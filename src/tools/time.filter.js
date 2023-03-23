export default function timeFormat(value, format = 'HMS') {
  const number = []
  switch (format) {
    case 'HMS':
      number[0] = Math.floor(value / 3600) + ' H'
      number[1] = Math.floor((value % 3600) / 60) + ' Mins'
      number[2] = Math.floor((value % 3600) % 60) + ' S'
      break
    case 'HM':
      number[0] = Math.floor(value / 3600) + ' H'
      number[1] = Math.floor((value % 3600) / 60) + ' Mins'
      break
    case 'H':
      number[0] = Math.floor(value / 3600) + ' H'
      break
  }
  return number.join(' ')
}
