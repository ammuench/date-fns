// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import mapMonthToNumeric from '.'

suite('mapMonthToNumeric', function () {
  benchmark('date-fns', function () {
    return mapMonthToNumeric(this.monthName)
  })
}, {
  setup: function () {
    this.monthName = 'October'
  }
})
