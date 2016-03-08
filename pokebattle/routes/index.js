var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

//Pokemon route
router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
  res.send(pokemon);
});


module.exports = router;

var pokemon = [
  {
    name: 'Bulbasaur',
    avatarUrl: 'http://rs949.pbsrc.com/albums/ad339/FlameingElectricity/Animated%20Pokemon%20Sprites/001_zps2b3b00f2.gif~c200'
  },
  {
    name: 'Charmander',
    avatarUrl: 'http://24.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif'

  },
  {
    name: 'Squirtle',
    avatarUrl: 'http://25.media.tumblr.com/c7beb8c411a9447f326c54b531b1067a/tumblr_mhd98a5fT51s2ugo7o9_250.gif'
  }
];


