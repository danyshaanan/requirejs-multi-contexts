'use strict'

const _ = require('lodash')
const requirejs = require('requirejs')
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

requirejs.define('specs', [], () => {
    describe('specs', () => {
        it('should run', () => {
            expect(1).toBe(1)
        })
    })
})

requirejs(['specs'], specs => {
    jasmine.getEnv().execute()
})
