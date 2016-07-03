'use strict'

define(['loader', 'loader!proj1:util', 'math'], (loader, util, math) => {

  describe('loader', () => {
    it('should be defined', () => {
      expect(loader).toBeDefined()
    })

    describe('util', () => {
      it('should exist and have a log method', () => {
        expect(util).toBeDefined()
        expect(util.log).toBeDefined()
      })

      it('should have the same reference to util through math and directly', () => {
        expect(util === math.util).toBeTruthy()
      })
    })
  })

})
