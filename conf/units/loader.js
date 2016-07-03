'use strict'

const PROJ_PREFIX = /^([^:]+):/

requirejs.define(['requireScopes'], requireScopes => ({
  load(name, req, onload) {
    const projRJS = requireScopes[(m => m && m[1])(name.match(PROJ_PREFIX))]
    if (!projRJS) throw Error('Unknown load source!')
    projRJS([name.replace(PROJ_PREFIX, '')], onload)
  }
}))
