require('dotenv').config()
const mongoose = require('mongoose');
async function connectDatabase() {
    return new Promise((resolve, reject) => {
        
        mongoose.connect(process.env.MONGO_URI, (err) => {
            if (err) {
                console.log('Error connecting to DB')
                reject(err)
            } else {
                console.log('Successfully connected to DB')
                resolve()
            }
        })
    })
}
module.exports =  {connectDatabase}
