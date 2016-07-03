'use strict'

define(['loader!proj1:name', 'name'], (proj1name, proj2name) => {
  describe('two modules with the same filename', () => {
    it('should return different values', () => {
      expect(proj1name).not.toBe(proj2name)
    })
  })
})
