const router = require('koa-router')()

router.get('/getname',  async (ctx, next) => {
    let title = 'Mongoose demo page'
    await ctx.render('index', {
      title,
    })
})

router.post('/getname',  async (ctx, next) => {
    console.log(JSON.stringify(ctx.request.body));
})

module.exports = router