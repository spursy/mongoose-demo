const router = require('koa-router')()

router.get('/getname', async function(ctx, next) {
    ctx.body = 'hello my word'
    await next()
})

exports.router = router