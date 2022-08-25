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

// 搜索功能 新增找不到資料的頁面
app.get('/search/', (req, res) => {
	const searchType = req.query.searchType
	const keyword = req.query.keyword.trim().toLowerCase()
	let getSelected1 = ''
	let getSelected2 = ''
	let getSelected3 = ''
	const restaurant = restaurantList.results.filter(restaurant => {
		if (searchType === 'name') {
			getSelected1 = 'selected'
			return restaurant.name.toLowerCase().includes(keyword)
		} else if (searchType === 'category') {
			getSelected2 = 'selected'
			return restaurant.category.toLowerCase().includes(keyword)
		} else if (searchType === 'location') {
			getSelected3 = 'selected'
			return restaurant.location.toLowerCase().includes(keyword)
		}
	})
	if (restaurant.length > 0) {
		res.render('index', { restaurant: restaurant, keyword: keyword, searchType: searchType, selected1: getSelected1, selected2: getSelected2, selected3: getSelected3 })
	} else {
		res.render('error', { restaurant: restaurant, keyword: keyword, searchType: searchType, selected1: getSelected1, selected2: getSelected2, selected3: getSelected3 })
	}
})

// 動態尋找id
app.get('/restaurants/:restaurant_id', (req, res) => {
	const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
	res.render('show', { restaurant: restaurant })
})

app.listen(port, () => {
	console.log(`Express is listening on localhost:${port}`)
})