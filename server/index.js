const Koa = require('koa')
const app = new Koa()
const router = require('./middlewares/router.js');
const koaBody = require('koa-body');
const views = require('koa-views')
const path = require('path')
const mongoose = require('mongoose');
const mongooseDB = require('./middlewares/database');

mongooseDB.connectDB()
// const Student = mongoose.model('Student')
// const Teacher = mongoose.model('Teacher')

// ejs template views
app.use(views(path.join(__dirname, '../views'), {
  extension: 'ejs'
}))

app.use(koaBody())

console.log(typeof router)

// Add Koa Router
app
.use(router.routes())
.use(router.allowedMethods()); 

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')