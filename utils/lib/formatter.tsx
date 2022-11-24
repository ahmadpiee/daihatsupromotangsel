import { en, id } from '@utils/lang'

// Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}
export const currentYear = new Date().getFullYear()
export const currentMonth = getCurrentMonth()
export const currentDay = getCurrentDay()
export const currentDate = `${currentMonth}-${currentDay}-${currentYear}`

// currency
export const CurrencyUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
export const CurrencyIDR = new Intl.NumberFormat('id-ID', {
  currency: 'IDR',
})

export const localize = (locale: string, string: string) => {
  const translate = locale === 'en' ? en : id

  return translate[string]
}
