
define(['loader!proj1:util', 'math'], (util, math) => {
  describe('math.divide', () => {
    it('should print error if dividing by zero', () => {
      spyOn(util, 'log')
      math.divide(1, 0)
      expect(util.log).toHaveBeenCalled()
    })
  })
})
