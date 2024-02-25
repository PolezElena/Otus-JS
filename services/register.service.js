import supertest from "supertest"
import urls from "../framework/config"
/**
*nameIsValid
*@param {object} Имя позльзователя и пароль
*/ 

const Register = {
  post: async body => {
    const response = await supertest(urls.vikunja)
      .post("/v1/register")
      .set("Accept", "application/json")
      .send(body)
    return response
  },
}
export default Register


