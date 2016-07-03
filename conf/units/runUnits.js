'use strict'

const _ = require('lodash')
const Jasmine = require('jasmine-core')
const configs = require('./requireConfigs.js')

////////////////////////////////////////////////////////////////////////////////

const requireScopes = _.mapValues(configs, config => {
  const requirejs = require('requirejs')
  requirejs.config(config)
  return requirejs
})

requireScopes.main.define('requireScopes', requireScopes)
requireScopes.main.define('jasmineEnv', () => Jasmine.boot(Jasmine).getEnv())

const units = require('glob').GlobSync('proj2/test/**/*.unit.js').found

requireScopes.main(['jasmineEnv', ...units], (jasmineEnv) => {
  const JasmineConsoleReporter = require('jasmine-console-reporter')
  jasmineEnv.addReporter(new JasmineConsoleReporter())
  jasmineEnv.execute()
})
