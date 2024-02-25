// import supertest from "supertest"
// import urls from "../framework/config/index"
import Login from "../services/login.service"
import api from "../services/index"

test("пользователь может авторизоваться используя логин и пароль", async () => {
  const body = { username: "Lenok555", password: "Lenok555" }
  const response = await Login.post(body)
  expect(response.status).toEqual(200)
})

test("Неверное имя пользователя или пароль.", async () => {
  const body = { username: "Lenok555", password: "Lenok" }
  const response = await Login.post(body)
  expect(response.status).toEqual(412)
})

test("Неверное имя пользователя или пароль", async () => {
  const body = { username: "Lenok", password: "Lenok" }
  const response = await Login.post(body)
  expect(response.status).toEqual(412)
})

test("Неверное имя пользователя или пароля", async () => {
  const body = { username: "Lenok", password: "Lenok" }
  const response = await api().Login().post(body)
  expect(response.status).toEqual(412)
})

test("Пользователь может авторизоваться после регистрации", async () => {
  // todo сделать генерацию данных
  const body = { username: "test1", email: "test@mail", password: "test1" }
  await api().Register().post(body)
  const response = await api().Login().post({username: body.username, password: body.password})
  expect(response.status).toEqual(200)
})
