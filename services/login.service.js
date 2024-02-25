import supertest from "supertest"
import urls from "../framework/config"
/**
*nameIsValid
*@param {object} Имя позльзователя и пароль
*/ 

const Login = {
  post: async body => {
    const response = await supertest(urls.vikunja)
      .post("/v1/login")
      .set("Accept", "application/json")
      .send(body)
    return response
  },
}
export default Login

//* const LoginVikunja = function () {
 // this.post = async function (body) {
  //  const response = await supertest(urls.vikunja)
   // .post("/v1/login")
    // .set("Accept", "application/json")
    // .send(body)
  // return response
  // }
// }
// export default LoginVikunja/*
