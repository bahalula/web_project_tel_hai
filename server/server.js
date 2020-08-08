const express = require('express');
const app = express();
const path = require("path");


const { profile } = require('console');
const port = 3000
const pages_dir = path.resolve(__dirname, "..", "client", "pages");
const public_dir = path.resolve(__dirname, "..", "client", "public");

app.use(express.static(public_dir))
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.sendFile(path.join(pages_dir, 'home.html'))
})
app.get('/login', (req, res) => {
	/* todo */
	res.sendFile(path.join(pages_dir, 'login.html'))
})
app.post('/login', (req, res) => {
	// console.log(req.body);
	res.redirect('/profile')
})
app.get('/register', (req, res) => {
	res.sendFile(path.join(pages_dir, 'register.html'))
})
app.post('/register', (req, res) => {
	console.log(req.body);
	res.redirect('/edit')
	// res.sendFile(path.join(pages_dir, 'register.html'))
})
app.get('/profile', (req, res) => {
	res.sendFile(path.join(pages_dir, 'profile.html'))
})
app.get('/edit', (req, res) => {
	res.sendFile(path.join(pages_dir, 'edit.html'))
})

app.get('/restaurants', (req, res) => {
	res.sendFile(path.join(pages_dir, 'restaurants.html'))
})

app.get('/vacation', (req, res) => {
	res.sendFile(path.join(pages_dir, 'vacation.html'))
})

app.get('/activities', (req, res) => {
	res.sendFile(path.join(pages_dir, 'activities.html'))
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
