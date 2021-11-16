function formatDate(timeStamp) {
  const date = new Date(timeStamp)

  const y = date.getFullYear(),
        M = date.getMonth() + 1,
        d = date.getDate(),
        h = _addZero(date.getHours()),
        m = _addZero(date.getMinutes()),
        s = _addZero(date.getSeconds())

  return `${y}-${M}-${d} ${h}:${m}:${s}`
}

function _addZero(value) {
  return value < 10 ? '0' + value : value
}

export default formatDate
