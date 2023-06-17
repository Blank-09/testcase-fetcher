const crypto = require('crypto')

function uuid() {
  return crypto.randomBytes(16).toString('hex')
}

function broadcast(msg) {
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg)
    }
  }
}

module.exports = {
  uuid,
  broadcast,
}
