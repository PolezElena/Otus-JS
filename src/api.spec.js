// https://bookstore.demoqa.com/swagger/
// Напишите АПИ-тесты:
// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
// Генерация токена c ошибкой
// Генерация токена успешно
// Полезные ссылки:
// Тестирование асинхронного кода в jest с использованием оператора async / await
// Axios библиотека для отправки запросов (при выполнении ДЗ вы можете использовать другое решение)
// Использование ECMAScript-модулей в Node.js

async function createUser(userName,password)
{
  const response = await fetch ('https://bookstore.demoqa.com/Account/v1/User', 
    {
     method: 'post',
     body: JSON.stringify 
      ({
       "userName": userName,
       "password": password,
       
      }),
    headers: {'Content-Type': 'application/json'} 
    }
  )
    return response
} 

async function generateToken(userName,password)
{
  const response = await fetch ('https://bookstore.demoqa.com/Account/v1/GenerateToken',
    {
     method: 'post',
     body: JSON.stringify 
      ({
       "userName": userName,
       "password": password,
       
      }),
    headers: {'Content-Type': 'application/json'} 
    }
  )
    return response
}
// Генерация токена успешно
test('Генерация токена успешно',async() =>
  {
    const response = await generateToken('Lenok','Apitest12!')
    const data = await response.json()
    expect(response.status).toBe(200)
    expect(data.result).toBe("User authorized successfully.")
    console.log(data.token)
  }
)
// Генерация токена c ошибкой
test('Генерация токена c ошибкой',async() =>
  {
    const response = await generateToken('SeRiA','Tes@jh12')
    const data = await response.json()
    expect(response.status).toBe(200)
    expect(data.status).toBe("Failed")
    expect(data.result).toBe("User authorization failed.")
    console.log(data.token)
  }
)
describe('5 api tests bookstore service', () =>
  {
  // Создание пользователя успешно
    test ('Создание пользователя успешно', async() =>
    {
      const response = await createUser('SiVkA123','SpO@!123')
      const userId = await response.json()
      expect(response.status).toBe(201)
      expect(data.message).toBe('User exists!')
      console.log(userId)
    
    }
  )

    // Создание пользователя c ошибкой, логин уже используется
   test('Создание пользователя c ошибкой, логин уже используется',async() =>
      {
        const response = await createUser('Lenok','Apitest12!')
        const data = await response.json()
        expect(response.status).toBe(406)
        expect(data.code).toBe('1204')
        expect(data.message).toBe('User exists!')
        console.log(data.message)
      }
    )
// Создание пользователя c ошибкой, пароль не подходит
    test('Создание пользователя c ошибкой, пароль не подходит',async() =>
     {
        const response = await createUser('Lenok','Apitest12!')
        const data = await response.json()
        expect(response.status).toBe(406)
        expect(data.code).toBe('1204')
        expect(data.message).toBe('User exists!')
        console.log(data.message)
      }
    )
  }
)



