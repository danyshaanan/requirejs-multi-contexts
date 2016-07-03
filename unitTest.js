'use strict'

const _ = require('lodash')
const glob = require('glob')
const Jasmine = require('jasmine-core')
const JasmineConsoleReporter = require('jasmine-console-reporter')

const jasmine = Jasmine.boot(Jasmine)

const reporter = new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 1,
  verbosity: 4,
  listStyle: 'indent',
  activity: false
})

jasmine.getEnv().addReporter(reporter)

const proj1RJS = require('requirejs').config({
  context: 'proj1',
  baseUrl: 'proj1',
  paths: {
    util: 'main/util'
  }
})

const proj2RJS = require('requirejs')

proj2RJS.config({
  baseUrl: 'proj2',
  paths: {
    math: 'main/math',
    mathTest: 'test/math.unit'
  }
})

proj2RJS.define('loader', [], () => ({
  load: (name, req, onload) => {
    if (/^proj1\:/.test(name)) {
      proj1RJS([name.replace('proj1:', '')], value => {
        onload(value);
      })
    } else {
      throw Error('unknown load source')
    }
  }
}))

const units = glob.GlobSync('proj2/test/**/*.unit.js').found

proj2RJS(units, () => {
  jasmine.getEnv().execute()
})
