'use strict'

module.exports = {
  specDone(spec) {
    if (spec.status === 'failed') process.exitCode = 1
  }
}
