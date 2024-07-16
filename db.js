const mongoose = require('mongoose')

const dburl = 'mongodb+srv://rahul8456:mongodb8456@cluster0.ucbomuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.exports = () => {
    return mongoose.connect(dburl)
}
