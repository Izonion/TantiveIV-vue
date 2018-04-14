const types = {
  SET_COOKIE: 'SET_COOKIE',
}

const handleMessage = (event) => {
  console.log(event)
  try {
    let message = JSON.parse(event.data)
    if (!message.type) {
      console.log(`can not understand message (no type attribute)`)
      return
    }
    route(message)
  } catch {
    console.log(`can not understand message (type not of JSON)`)
    return
  }
}

const routes = {
  [types.SET_COOKIE]: (message) => {setCookie(message.payload)}
}

const route = (message) => {
  let linked = routes[message.type]
  if (!linked) {
    console.log(`can not understand message of type '${message.type}'`)
  }
  linked(message)
}

const DEFAULTCOOKIEOPTIONS = {expires: 1, domain:'.study.test'}

function setCookie (data) {
  if(!data.name) {
    console.log('can not set cookie if name not given')
    return
  }
  if (!data.value) {
    console.log('can not sest cookie if value not given')
  }
  let options = Object.assign({}, data.options, DEFAULTCOOKIEOPTIONS)
  this.$cookie.set(data.name, data.value, options)
}

export default handleMessage
