
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

jasmine.ConsoleReporter({
    onComplete: function(passed) {
        if(passed) {
            console.log('passed')
            exit(0);
        }
        else {
            console.log('failed')
            exit(1);
        }
    },
    timer: new jasmine.Timer(),
    print: function() {
        //process.stdout.write (jasmine.util.format.apply(this, arguments));
    },
    showColors: true,
    jasmineCorePath: this.jasmineCorePath
});

requirejs(['specs'], function (specs) {
    //jasmine.getEnv().execute();


    jasmine.getEnv().execute([specs])
    //jasmine.ConsoleReporter({
    //    print:function() {
    //        process.stdout.write(util.format.apply(this, arguments));
    //    }
    //}))
});
