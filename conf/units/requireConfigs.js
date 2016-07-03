'use strict'

module.exports = {
  main: {
    baseUrl: 'proj2',
    paths: {
      loader: '../conf/units/loader',
      math: 'main/math'
    }
  },
  additionalScopes: {
    proj1: {
      context: 'proj1',
      baseUrl: 'proj1',
      paths: {
        util: 'main/util'
      }
    }
  }
}
