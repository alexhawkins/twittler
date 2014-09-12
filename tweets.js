 var Tweets = {};
  

 Tweets.latestTweets = function() {
    $('.tweets').html('');
     var streamLength = streams.home.length;
     var index = streamLength - 1 - 15;
     while (index < streamLength) {
         var tweet = streams.home[index];
         var $tweet = $('<li>@' + tweet.user + ': ' + tweet.message + '</li>');
         $('.tweets').prepend('<li>@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at + '</li>');
         index++;
     }
 };

 Tweets.addTweet = function(tweet) {
     $('.tweets').prepend('<li><strong>' + tweet + '</strong></li>');
     $('.new-tweet').val('');
 };

 Tweets.displayUserTweets = function(id) {
     $('.tweets').html('');
     var streamLength = streams.users[id].length;
     var index = streamLength - 1;
     while (index >= 0) {
         var tweet = streams.users[id][index];
         var $tweet = $('<li>@' + tweet.user + ': ' + tweet.message + '</li>');
         $('.tweets').prepend('<li>@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at + '</li>');
         index--;

     }
 };

 Tweets.displayAllTweets = function() {
     var streamLength = streams.home.length;
     var index = streams.home.length - 1;
     while (index >= 0) {
         var tweet = streams.home[index];
         var $tweet = $('<li>@' + tweet.user + ': ' + tweet.message + '</li>');
         $('.tweets').prepend('<li>@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at + '</li>');
         index--;
     }
 };

 $(document).ready(function() {
     var $body = $('body');
     //Tweets.latestTweets(); //load initial tweets;
     //EVENT LISTENERS
     $('.buttons-select').on('click', 'button', function() {
         if (this.id === 'latest') {
             Tweets.latestTweets();
             $('.add-my-tweet').show();
         } else {

             $('.add-my-tweet').hide();
             this.id === 'all-tweets' ? Tweets.displayAllTweets() : Tweets.displayUserTweets(this.id);
         }
     });

     $body.on('click', '.send-tweet', function() {
         var message = $('.new-tweet').val();
         console.log(message);
         Tweets.addTweet(message);

     });


 });
