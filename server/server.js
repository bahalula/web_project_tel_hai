const express = require('express');
const app = express();
const path = require("path");

// ask tal: for what use the line below ... 
const { profile } = require('console');
const port = 3000
const pages_dir = path.resolve(__dirname, "..", "client", "pages");
const public_dir = path.resolve(__dirname, "..", "client", "public");
// const dbservice = require("../data/dbservice");
// dbservice.addRestaurant({
//     name:"leonardo 2",
//     long : 
// })
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
    console.log(req.body);
    res.redirect('/profile')
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(pages_dir, 'register.html'))
})
app.post('/register', (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(pages_dir, 'register.html'))
})
app.get('/profile', (req, res) => {
    res.sendFile(path.join(pages_dir, 'profile.html'))
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))

// TODO: add page was not found.