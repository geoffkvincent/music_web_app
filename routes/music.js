var express = require('express');
var router = express.Router();
var Music = require('../models').Music;

// GET /movies
router.get('/', function(req, res) {
  //SELECT * FROM movies
  Music.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
    .then( function(music) {
      return res.render('music', { music: music })
    })
})

// PUT /music/:id
router.put('/:id', function(req, res) {
  Music.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/music');
  })
});

//get/music/:id/edit
router.get('/:id/edit', function(req, res) {
  Music.findById(req.params.id)
    .then( function(music) {
      return res.render('edit', { music: music });
  });
});

//DELETE
router.delete('/:id', function(req, res) {
  Music.findById(req.params.id)
    .then( function(music) {
      music.destroy()
    })
    .then( function() {
      return res.redirect('/music');
  });
});

/* POST add music listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Music.create({ title: title })
    .then( function() {
      res.redirect('/music');
  });
});

module.exports = router;