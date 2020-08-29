const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['user'] = require('..\\middleware\\user.js')
middleware['user'] = middleware['user'].default || middleware['user']

export default middleware
