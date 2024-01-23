// Функция
 export function greet(name) {
  return `Hi, ${name}!`
 }

// Стрелочная функция
 export const farewell = name => {
  return `See you next time, ${name}!`
 }

 export function kolobok(name)
   {
    switch (name) {
    case 'Дедушка':
    return `Я от дедушки ушел!`
    case 'Заяц':
    return `Я от зайца ушел!`
    case 'Лиса':
    return `Меня съели!`
    default:
      throw new Error('Я встретил кого-то неизвестного')
 }
}

export function newYear(name)
{
  switch (name) {
    case 'Дед Мороз':
    case 'Снегурка':
      return name+ '! ' + name + '! ' +  name+ '!'
    default:
        throw new Error('Неизвестный герой')
  }
}
