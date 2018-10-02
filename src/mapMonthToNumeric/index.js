/**
 * @name mapMonthToNumeric
 * @category Month Helpers
 * @summary Map English name of Month to it's given numeric version
 *
 * @description
 * Map English name of Month to it's given numeric version
 * The result will be passed back as a "two-digit" string
 *
 * @param {String} monthName - the name of a month
 * @returns {String} the numeric version of the given month
 * @throws {TypeError} 1 argument required
 * @throws {TypeError} Invalid month supplied
 * @throws {TypeError} Non-string given as month value
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = mapMonthToNumeric(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
export default function mapMonthToNumeric (monthName) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (typeof monthName !== 'string') {
    throw new TypeError('monthName must be a string')
  }

  var normalizeMonthName = monthName.toUpperCase().trim()

  switch (normalizeMonthName) {
    case 'JANUARY':
      return '01'
    case 'FEBRUARY':
      return '02'
    case 'MARCH':
      return '03'
    case 'APRIL':
      return '04'
    case 'MAY':
      return '05'
    case 'JUNE':
      return '06'
    case 'JULY':
      return '07'
    case 'AUGUST':
      return '08'
    case 'SEPTEMBER':
      return '09'
    case 'OCTOBER':
      return '10'
    case 'NOVEMBER':
      return '11'
    case 'DECEMBER':
      return '12'
    default:
      throw new TypeError('Invalid month supplied')
  }
}
