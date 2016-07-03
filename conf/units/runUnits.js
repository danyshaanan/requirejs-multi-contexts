'use strict'

const _ = require('lodash')
const requirejs = require('requirejs')
const Jasmine = require('jasmine-core')
const configs = require('./requireConfigs.js')

////////////////////////////////////////////////////////////////////////////////

requirejs.config(configs.main)
const requireScopes = _.mapValues(configs.additionalScopes, requirejs.config)

_.forEach(requireScopes, scope => {
  if (requirejs === scope) throw new Error('requirejs scopes are not distinct')
})

requirejs.define('requireScopes', requireScopes)
requirejs.define('jasmineEnv', () => Jasmine.boot(Jasmine).getEnv())

const units = require('glob').GlobSync('proj2/test/**/*.unit.js').found

requirejs(['jasmineEnv', ...units], jasmineEnv => {
  const JasmineConsoleReporter = require('jasmine-console-reporter')
  jasmineEnv.addReporter(new JasmineConsoleReporter())
  jasmineEnv.execute()
})
