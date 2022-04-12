const express = require('express')
const path = require('path')
//получаем порт из системной переменной, если такой нет, то 8080
const PORT = process.env.PORT || 8080
const app = express()
//раздаем главный каталог
app.use(express.static(__dirname))
//раздаем build версию
app.use(express.static(path.resolve(__dirname, 'build')))
//при get запросе возвращаем index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)