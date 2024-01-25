import {kolobok, newYear} from '../src/app.js'

describe ('kolobok function', () => 
 {
  it('возврощает Дедушка', () => 
  {
    const result = kolobok ('Дедушка')
    expect(result).toBe('Я от дедушки ушел!')
  })

  it('возврощает Заяц', () =>
   {
    const result = kolobok ('Заяц')
    expect(result).toBe('Я от зайца ушел!')
  })

  it('возврощает Лиса', () => 
  {
    const result = kolobok ('Лиса')
    expect(result).toBe('Меня съели!')
  })

  it('возврощает неизвестный', () => 
  {
    expect(() => {
      kolobok('неизвестный')
    }).toThrow('Я встретил кого-то неизвестного')
    })
  } 
)
    

describe('newYear function', () => 
 {
  it('возврощает Дед Мороз', () => 
  {
    const result = newYear('Дед Мороз')
    expect(result).toBe('Дед Мороз! Дед Мороз! Дед Мороз!')
  })

  it('возврощает Снегурка', () => 
  {
    const result = newYear('Снегурка')
    expect(result).toBe('Снегурка! Снегурка! Снегурка!')
  })

  it('should return a default response for unknown неизвестный', () => 
  {
    expect(() => {
      newYear('неизвестный')
    }).toThrow('Неизвестный герой')
  })
 } 
)
