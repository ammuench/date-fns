// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import mapMonthToNumeric from '.'

describe('mapMonthToNumeric', function () {
  it('accepts a string', function () {
    var result = mapMonthToNumeric('October')
    assert.deepEqual(result, '10')
  })

  it('correctly maps all months to their respective numeric values', function () {
    var january = mapMonthToNumeric('january')
    var february = mapMonthToNumeric('february')
    var march = mapMonthToNumeric('march')
    var april = mapMonthToNumeric('april')
    var may = mapMonthToNumeric('may')
    var june = mapMonthToNumeric('june')
    var july = mapMonthToNumeric('july')
    var august = mapMonthToNumeric('august')
    var september = mapMonthToNumeric('september')
    var october = mapMonthToNumeric('october')
    var november = mapMonthToNumeric('november')
    var december = mapMonthToNumeric('december')
    var january = mapMonthToNumeric('january')

    assert.deepEqual(january, '01')
    assert.deepEqual(february, '02')
    assert.deepEqual(march, '03')
    assert.deepEqual(april, '04')
    assert.deepEqual(may, '05')
    assert.deepEqual(june, '06')
    assert.deepEqual(july, '07')
    assert.deepEqual(august, '08')
    assert.deepEqual(september, '09')
    assert.deepEqual(october, '10')
    assert.deepEqual(november, '11')
    assert.deepEqual(december, '12')
  })

  it('generates the same value regardless of capitalization', function () {
    var result1 = mapMonthToNumeric('jAnUary')
    var result2 = mapMonthToNumeric('January')
    assert.deepEqual(result1, result2)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(mapMonthToNumeric.bind(null), TypeError)
  })

  it('throws TypeError if passed a non-string', function () {
    assert.throws(mapMonthToNumeric.bind(new Date()), TypeError)
  })

  it('throws TypeError if passed a non-month string', function () {
    assert.throws(mapMonthToNumeric.bind('Friday'), TypeError)
  })
})
