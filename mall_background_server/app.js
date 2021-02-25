const express = require('express')
const compression = require('compression')

const app = express()



// 一定要把这一行代码，写到 静态资源托管之前
app.use(compression())
app.use(express.static('./dist'))

app.listen(81, () => {
  console.log('server running at http://127.0.0.1')
})

// https.createServer(options, app).listen(443)
