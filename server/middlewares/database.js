const mongoose = require('mongoose');
const config = require('../config/index');
const path = require('path');
const fs = require('fs');

const models = path.resolve(__dirname, './schema')
fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*js$/))
    .forEach(file => require(path.resolve(models, file)))

exports.connectDB = function () {
    mongoose.set('debug', true)
    console.log(`connect mongoodb`);

    mongoose.connect(config.config.db + '/' + 'yiqigo' )
    
    mongoose.connection.on('disconnect', () => {
        // mongoose.createConnection('localhost', 'yiqigo', '27017')
    })

    mongoose.connection.on('error', err => {
        //not exists dbs, create a database
        console.log(`not exists dbs, create a database.`);
        mongoose.connect(config.db)
    })

    mongoose.connection.on('open', async => {
        console.error('Connected to MongoDB', config.db);
    })
}
