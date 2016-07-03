'use strict'

requirejs.define(['requireScopes'], requireScopes => ({
  load(name, req, onload) {
    const projPrefix = /^([^:]+):/
    const projRJS = requireScopes[(m => m && m[1])(name.match(projPrefix))]
    if (!projRJS) throw Error('Unknown load source!')
    projRJS([name.replace(projPrefix, '')], onload)
  }
}))
