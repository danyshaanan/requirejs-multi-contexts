'use strict'

define(['loader!proj1:util'], util => {

  const divide = (a, b) => {
    if (b === 0) {
      util.log('You can not divide by zero!')
      return NaN
    }
    return a/b
  }

  return {
    divide,
    util // for testing
  }
})
