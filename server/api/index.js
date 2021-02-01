const apiRouter = require('express').Router()

const phbotStats = require('./phbotStats')
const groupStats = require('./fetchGroupStats')

apiRouter.post('/phbotStats', phbotStats)
apiRouter.get('/groupStats', groupStats)

module.exports = apiRouter