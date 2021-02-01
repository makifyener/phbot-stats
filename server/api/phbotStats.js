let db = require('../db')

module.exports = (req, res) => {
    try {
        const data = req.body
        const parsedData = JSON.parse(data.data)
        
        let ip = ipParser(req)

        parseClients(ip)

        parseGroups(ip, parsedData)
    } catch (error) {
        console.error(error)
    } finally {
        res.end()
    }

}

function ipParser(req) {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
    }
    return ip
}

function parseClients(ip) {
    if (!ip)
        throw new Error('Client IP could not be obtained')

    db.connectedClientsDatabase[ip] = {
        isAlive: true,
        lastDataRecieved: new Date().valueOf()
    }
}

function parseGroups(ip, data) {
    if (!data)
        throw new Error('Missing or invalid data')
    
    const groupData = db.groupsDatabase
    Object.keys(data).forEach(groupAndCharacterName => {
        const groupName = groupAndCharacterName.split('/')[0]
        const characterData = data[groupAndCharacterName]
        if (!groupData[groupName]) {
            groupData[groupName] = []
        }
        const group = groupData[groupName]
        group[characterData.name] = {
            dead: characterData.dead,
            botting: characterData.botting,
            connected: characterData.connected
        }
        db.groupsDatabase = groupData
        db.characterDatabase[characterData.name] = characterData        
    })
}
