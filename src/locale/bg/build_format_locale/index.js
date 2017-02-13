import buildTokensRegExp from '../../_lib/build_tokens_reg_exp/index.js'

export default function buildFormatLocale () {
  var months3char = ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек']
  var monthsFull = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
  var weekdays2char = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  var weekdays3char = ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб']
  var weekdaysFull = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
  var meridiem = ['сутринта', 'на обяд', 'следобед', 'вечерта']

  var timeOfDay = function (date) {
    var hours = date.getUTCHours()
    if (hours >= 4 && hours < 12) {
      return meridiem[0]
    } else if (hours >= 12 && hours < 14) {
      return meridiem[1]
    } else if (hours >= 14 && hours < 17) {
      return meridiem[2]
    } else {
      return meridiem[3]
    }
  }

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getUTCMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getUTCMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getUTCDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getUTCDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getUTCDay()]
    },

    // AM, PM
    'A': timeOfDay,

    // am, pm
    'a': timeOfDay,

    // a.m., p.m.
    'aa': timeOfDay
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви'
      case 2:
        return number + '-ри'
    }
  }
  return number + '-и'
}