import {watch, energy} from '../src/app.js'

describe ('watch function', () => 
 {
  it('Говорят Часы стоят', () => 
  {
    const result = watch ('Говорят')
    expect(result).toBe('Часы стоят')
  })

  it('Говорят Часы спешат', () =>
   {
    const result = watch ('Говорят1')
    expect(result).toBe('Часы спешат')
  })

  it('Говорят Часы идут', () => 
  {
    const result = watch ('Говорят2')
    expect(result).toBe('Часы идут')
  })

  it('Но немножко отстают', () => 
  {
    expect(() => {
      watch('неизвестное')
    }).toThrow('Но немножко отстают')
    })
  } 
)
    

describe('energy function', () => 
 {
  it('Твои ошибки-твоя сила', () => 
  {
    const result = energy('Твои ошибки-твоя сила')
    expect(result).toBe('Твои ошибки-твоя сила! Твои ошибки-твоя сила! Твои ошибки-твоя сила!')
  
  })

  it('Улыбайтесь', () => 
  {
    const result = energy('Улыбайтесь')
    expect(result).toBe('Улыбайтесь! Улыбайтесь! Улыбайтесь!')
  })

  it('should return a default response for unknown неизвестный', () => 
  {
    expect(() => {
       energy('неизвестный')
    }).toThrow('Неизвестный герой')
  })
 } 
)
