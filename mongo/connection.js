const mongoose = require('mongoose')

async function intializeDatabase(){
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@${process.env.MONGO_URL}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected")
    } catch (err) {
        console.log("Error connecting database", err)
    }
}

module.exports = {
    intializeDatabase
}