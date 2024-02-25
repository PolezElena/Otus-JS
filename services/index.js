import Login from "./login.service"
import Register from "./register.service"

const api  = () =>({
  
  Login: () => ({...Login }),
  Register: () => ({...Register })

})
export default api
