// 宣告區
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
// Express
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
	// const restaurantOne = {
	// 	id: 1,
	// 	title: 'Sababa 沙巴巴中東美食',
	// 	category: '中東料理'
	// 	image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg',
	// }
	res.render('index')
})


app.listen(port, () => {
	console.log(`Express is listening on localhost:${port}`)
})