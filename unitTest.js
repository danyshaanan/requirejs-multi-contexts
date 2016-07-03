
var _ = require('lodash');
var requirejs = require('requirejs');
var Jasmine = require('jasmine-core');
//
//requirejs.define('jasmine-boot', ['jasmine-core'], function(jasmine) {
//    return jasmine.boot;
//});

var jasmine = Jasmine.boot(Jasmine);

requirejs.define('specs', [], function() {
    describe('specs', function () {
        it('should run', function () {
            expect(1).toBe(1);
        })
    });
});

var JasmineConsoleReporter = require('jasmine-console-reporter');
var reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

jasmine.getEnv().addReporter(reporter);


requirejs(['specs'], function (specs) {
    // jasmine.getEnv().execute();


    jasmine.getEnv().execute()
    //jasmine.ConsoleReporter({
    //    print:function() {
    //        process.stdout.write(util.format.apply(this, arguments));
    //    }
    //}))
});
