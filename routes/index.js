const express = require('express');
const router = express.Router();
const jsonString = require('jsonstring');

var Twitter = require('twitter');
var fs = require('fs');
var s = require('string');

var accessTokens = {
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: ""
};

var tokens = fs.readFileSync('./Configuration/tokensApp.txt', 'utf8');
tokens += fs.readFileSync('./Configuration/tokensUser.txt', 'utf8');
if (s(tokens).contains('\r\n')) {
    var tab = tokens.split('\r\n').map(function (val) {
        return val;
    });
} else if (s(tokens).contains('\n')) {
    var tab = tokens.split('\n').map(function (val) {
        return val;
    });
} else {
    var tab = tokens.split('\r').map(function (val) {
        return val;
    });
}

tab.forEach(function(item){
  var token = item.split('=').map(function(val){
    return val;
  })
  if(token[0] == 'consumer_key')
    accessTokens.consumer_key = token[1];
  else if(token[0] == 'consumer_secret')
    accessTokens.consumer_secret = token[1];
  else if(token[0] == 'access_token_key')
    accessTokens.access_token_key = token[1];
  else if(token[0] == 'access_token_secret')
    accessTokens.access_token_secret = token[1];
})

console.log(accessTokens);

var client = new Twitter({
    consumer_key: accessTokens.consumer_key,
    consumer_secret: accessTokens.consumer_secret,
    access_token_key: accessTokens.access_token_key,
    access_token_secret: accessTokens.access_token_secret
});


router.get('/', function(req, res, next) {
  client.post('account/update_profile', { }, function(error, tweet, response){
    tweet.status.source = "";
    tweet.status.retweeted_status.source = "";
    var data = jsonString.create(tweet);
    res.render('index', { title: 'Dockitter', viewModel: data });
  })

});

module.exports = router;
