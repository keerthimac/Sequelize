const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../Models/Gig');


//get gig list
router.get('/', (req, res) =>
  Gig.findAll()
    .then(gigs => {
      res.render('gigs', {
        gigs
      });
    })
    .catch(err => console.log(err)));

// Add a gig
router.get('/add', (req, res) => {
  const data = { // (this is hardcoded data for testing usually this will be a form data)
    title: 'simple wordpress website',
    technologies: 'wordpress,php,html,css',
    budget: '51000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    contact_email: 'user2@gmail.com'
  }
  let { title, technologies, budget, description, contact_email } = data; // javascript destructureing
  Gig.create({
    title, technologies, description, budget, contact_email
  }).then(gig => {
    res.redirect('/gigs');
    //console.log(gig) 
  })
    .catch(err => console.log(err));

});



//Insert into table


module.exports = router;