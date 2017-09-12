const Koa = require('koa')
const app = new Koa()
// const router = require('./middlewares/router.js');
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const parse = require('co-body');
const views = require('koa-views')
const path = require('path')
const mongoose = require('mongoose');
const mongooseDB = require('./middlewares/database');

mongooseDB.connectDB()
const Student = mongoose.model('Student')
const Teacher = mongoose.model('Teacher')


// ejs template views
app.use(views(path.join(__dirname, '../views'), {
  extension: 'ejs'
}))
app.use(bodyParser())
// Add Koa Router
app
.use(router.routes())
.use(router.allowedMethods());

router.get('/getname', async function(ctx, next) {
  // let title = 'Mongoose demo page'
  // await ctx.render('index', {
  //   title,
  // })

  // connect with mongoose db.

  Student.saveStudent({
    name: "xiaohong",
    classid: "class4"
  });
})

router.post('/getname', async function(ctx, next) {
  // var item = await parse();
  console.log(JSON.stringify(ctx.request));

})
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')


// ctx.body = '404'
// console.log(JSON.stringify(ctx.response.body))

// app.use( async ( ctx , next) => {
//   ctx.body = 'hello koa2'
//   await next()
// })