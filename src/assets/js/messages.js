class messageHandler {
  types = {
    SET_COOKIE: 'SET_COOKIE',
    GET_COOKIE: 'GET_COOKIE',
    GET_SESSION: "GET_SESSION",
    SET_SESSION: "SET_SESSION",
    REGISTER: "REGISTER",
    LOGIN: "LOGIN",
  }

  ws = null
  cookie = null

  setup (webSocket, cookieModule) {
    this.ws = webSocket
    this.cookie = cookieModule
  }

  handleMessage = (event) => {
    console.log(event)
    let message
    try {
      message = JSON.parse(event.data)
    } catch (err) {
      console.log(`can not understand message (type not of JSON)`)
      return
    }
    console.log(message)
    if (!message.type) {
      console.log(`can not understand message (no type attribute)`)
      return
    }
    this.route(message)
  }

  makeMessage(type, payload) {
    return {type, payload}
  }

  routes = {
    [this.types.SET_COOKIE]: (message) => {this.setCookie(message.payload)},
    [this.types.SEND_SID]: (message) => {return null}
  }

  route = (message) => {
    console.log("routing")
    let linked = this.routes[message.type]
    if (!linked) {
      console.log(`can not understand message of type '${message.type}'`)
    }
    console.log("got linked function")
    console.log(typeof linked)
    if(typeof linked == 'function') {
      linked(message)
    }
  }

  DEFAULTCOOKIEOPTIONS = {expires: 1, domain:'.study.test'}

  setCookie (data) {
    console.log(this.cookie)
    if(!data.name) {
      console.log('can not set cookie if name not given')
      return
    }
    if (!data.value) {
      console.log('can not sest cookie if value not given')
    }
    let options = Object.assign({}, data.options, this.DEFAULTCOOKIEOPTIONS)
    this.cookie.set(data.name, data.value, options)
  }

  onOpen () {
    console.log(this.cookie)
    let sessionID = this.cookie.get("sessionID")
    if (!sessionID) {
      this.ws.send(JSON.stringify(this.makeMessage(this.types.GET_SESSION, null)))
    } else {
      this.ws.send(JSON.stringify(this.makeMessage(this.types.SET_SESSION, {sessionID})))
    }
    this.ws.send(JSON.stringify(this.makeMessage(this.types.REGISTER, {username: "testUser", password: "testpass", email:"test@test.com"})))
    this.ws.send(JSON.stringify(this.makeMessage(this.types.LOGIN, {username: "testUser", password:"testpass"})))
  }
}

export default messageHandler
