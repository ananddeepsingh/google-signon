const { LOGOUT, LOGIN } = require("./types")

export const loginAction = () => (disptach) => {
  disptach({
    type: LOGIN
  })
}

export const logoutAction = () => (disptach) => {
  disptach({
    type: LOGOUT
  })
}
