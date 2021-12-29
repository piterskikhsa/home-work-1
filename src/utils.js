
export function getName(fullName) {
  return fullName.split(' ')[0];
}

export function getDate(date) {
  return date.toLocaleString('ru', { month: 'long', day: 'numeric', year: 'numeric', }).slice(0, -3)
}