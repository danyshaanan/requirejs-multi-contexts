'use strict'

const _ = require('lodash')
const requirejs = require('requirejs')

module.exports = function(loaderName, configs) {
  const PROJ_PREFIX = /^([^:]+):/
  const requireScopes = _.mapValues(configs, requirejs.config)

  requirejs.define(loaderName, () => ({
    load(name, req, onload) {
      const projRJS = requireScopes[(m => m && m[1])(name.match(PROJ_PREFIX))]
      if (!projRJS) throw Error('Unknown load source!')
      projRJS([name.replace(PROJ_PREFIX, '')], onload)
    }
  }))
}
