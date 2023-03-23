export default function numberFormat(value, format = 'K') {
  let number = 0
  switch (format) {
    case 'K':
      number = (value / 1000).toFixed(1)
      break
    case 'KK':
      number = (value / 100000).toFixed(1)
      break
    case 'M':
      number = (value / 1000000).toFixed(1)
      break
  }
  return number + format
}
