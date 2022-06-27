const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true }).then(() => console.log('CONNECTED TO THE DB...')).catch((err) => console.log(err));
    // mongoose.connect(connectionString, { useNewUrlParser: true }).then(() => { console.log('mongoDB is connected...') }).catch((err) => { console.log(err) });
}

// const connectionString = 'mongodb+srv://anilducat:Jitin@75308@nodeexpressprojects.cb4ca2f.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

module.exports = connectDB