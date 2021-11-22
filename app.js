const express = require('express');
const mariadb = require('mariadb');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

//Database
const db = require('./config/database');


//test db option 01
// db.authenticate()
// .then(()=>console.log('Connection has been established successfully.'))
// .catch (err=>console.error('Unable to connect to the database:', err)) 

//Test db option 02
try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:', err);
}


const app = express();

//Handlebars middleware
app.engine('handlebars', expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
})); // added with stackoverflow help 
app.set('view engine', 'handlebars');

//Body parser middleware
app.use(express.urlencoded({ extended: false })); //updated with brad's 2019 express tutorial
app.use(express.json());

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Index Route
app.get('/', (req, res) => {
  res.render('index', { layout: 'landing' }) //if we want to use a different layout other than default layout, we can pass it as a parameter in the render function 
})

//Gig Routes
app.use('/gigs', require('./routes/gigs'))//Middleware - run between request and responce 


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`))