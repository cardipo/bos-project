const mysql = require('mysql');
const options = {
    user: 'hackabos',
    password: 'hackabos',
    database: 'Gimnasio'
}


const connection = mysql.createConnection(options)
connection.connect(err => {
    if (err) {
        console.error('An error occurred while connecting to the DB')
        throw err
    }
    else {
        console.log('Connected to mysql')
    }
})

// How module.exports works
module.exports = connection
