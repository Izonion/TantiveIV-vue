class messageHandler {
  types = {
    SET_COOKIE: 'SET_COOKIE',
    GET_COOKIE: 'GET_COOKIE',
    GET_SESSION: "GET_SESSION",
    SET_SESSION: "SET_SESSION",
    GET_NOTEBOOKS: "GET_NOTEBOOKS",
    GET_NOTEBOOK: 'GET_NOTEBOOK',
    SET_NOTEBOOK: "SET_NOTEBOOK",
    LOG_IN_SUCCESSFULL: "LOG_IN_SUCCESSFULL",
    REGISTER: "REGISTER",
    LOGIN: "LOGIN",
    NOTEBOOK_CREATION_SUCCESS: "NOTEBOOK_CREATION_SUCCESS",
    SET_NOTEBOOKS: "SET_NOTEBOOKS",
  }

  ws = null
  cookie = null

  setup (webSocket, cookieModule, vue) {
    this.ws = webSocket
    this.cookie = cookieModule
    this.vue = vue
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
    [this.types.SEND_SID]: (message) => {return null},
    [this.types.LOG_IN_SUCCESSFULL]: (message) => {this.loginSuccess(message.payload)},
    [this.types.NOTEBOOK_CREATION_SUCCESS]: (message) => {this.notebookCreationSuccess(message.payload)},
    [this.types.SET_NOTEBOOKS]: (message) => {this.setNotebooks(message.payload)},
    [this.types.SET_NOTEBOOK]: (message) => {this.setNotebook(message.payload)},
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

  loginSuccess(payload) {
    if (!payload.user) {
      return
    }
    let user = payload.user
    console.log("user available")
    //set user someplace
    this.user = user
  }

  onOpen () {
    console.log(this.cookie)
    let sessionID = this.cookie.get("sessionID")
    if (!sessionID) {
      this.ws.send(JSON.stringify(this.makeMessage(this.types.GET_SESSION, null)))
    } else {
      this.ws.send(JSON.stringify(this.makeMessage(this.types.SET_SESSION, {sessionID})))
    }
    //this.ws.send(JSON.stringify(this.makeMessage(this.types.REGISTER, {username: "testUser", password: "testpass", email:"test@test.com"})))
    // this.ws.send(JSON.stringify(this.makeMessage(this.types.LOGIN, {username: "testUser", password:"testpass"})))
    // this.ws.send(JSON.stringify(this.makeMessage(this.types.GET_NOTEBOOKS, null)))
  }

  notebookCreationSuccess (payload) {
    if (!payload) {
      return
    }
    if (!payload.notebook) {
      return
    }
    this.vue.loadNoteBook(payload.notebook);
    console.log(`notebook available`)
  }

  setNotebooks (payload) {
    if (!payload || !payload.notebooks) {
      return
    }
    this.vue.loadNoteBooks(payload.notebooks);
    console.log('set notebooks')
  }

  setNotebook (payload) {
    if (!payload || !payload.notebook) {
      return
    }
    console.log(`notebook available`)
  }
}

export default messageHandler
