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
	res.render('index', { restaurant: restaurantList.results })
})

// 搜索功能
app.get('/search/', (req, res) => {
	const keyword = req.query.keyword
	const restaurant = restaurantList.results.filter(restaurant => {
		return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
	})
	res.render('index', { restaurant: restaurant, keyword: keyword })
})

// 動態尋找id
app.get('/restaurants/:restaurant_id', (req, res) => {
	const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
	res.render('show', { restaurant: restaurant })
})

app.listen(port, () => {
	console.log(`Express is listening on localhost:${port}`)
})