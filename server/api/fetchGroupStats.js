const { getGroupsData, getClients, getCharacters } = require('../db')

module.exports = (req, res) => {
    try {
        const responseBody = {
            message: "success",
            data: getCharacters(),
            time: new Date().valueOf()
        }
        console.log('sending\n', responseBody)
        res.send(responseBody)
    } catch (error) {
        res.status(500).send(error)
    }
}