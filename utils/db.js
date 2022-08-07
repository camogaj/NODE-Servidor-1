const mongoose = require ("mongoose")

const url = "mongodb://localhost:27017/servidor1-peliculas"
const connect = async () => {
    try {
        await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.log(error)
    }
}
module.exports = connect