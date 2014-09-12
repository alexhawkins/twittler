 var Tweets = {};


 Tweets.latestTweets = function() {
     $('.tweets').html('');
     var streamLength = streams.home.length;
     var index = streamLength - 1 - 10;
     while (index < streamLength) {
         var tweet = streams.home[index];
         $('.tweets').prepend('<a class="pull-left tweet-image" href="#"><img class="media-object" src="images/default.gif" height="40px" width="40px"></a><div class="media-body"><h4 class="media-heading">@' + tweet.user + '</h4>' + tweet.message + '</div></p>');
             index++;
         }
     };

     Tweets.addTweet = function(message) {
        var tweet = {}; 
        tweet.user = 'anonymous';
        tweet.message = message;
        tweet.created_at = new Date();
        streams.users[tweet.user].push(tweet);
        streams.home.push(tweet);
         $('.tweets').prepend('<a class="pull-left tweet-image" href="#"><img class="media-object" src="images/default.gif" height="40px" width="40px"></a><div class="media-body"><h4 class="media-heading">@anonymous</h4>' + tweet.message + '</div></p>');
         $('.new-tweet').val('');
     };

     Tweets.displayUserTweets = function(id) {
         $('.tweets').html('');
         var streamLength = streams.users[id].length;
         var index = streamLength - 1;
         while (index >= 0) {
             var tweet = streams.users[id][index];
                 $('.tweets').prepend('<a class="pull-left tweet-image" href="#"><img class="media-object" src="images/default.gif" height="40px" width="40px"></a><div class="media-body"><h4 class="media-heading">@' + tweet.user + '</h4>' + tweet.message + '</div></p>');

             index--;

         }
     };

     Tweets.displayAllTweets = function() {
         var streamLength = streams.home.length;
         var index = streams.home.length - 1;
         while (index >= 0) {
             var tweet = streams.home[index];
             var $tweet = $('<li>@' + tweet.user + ': ' + tweet.message + '</li>');
                 $('.tweets').prepend('<a class="pull-left tweet-image" href="#"><img class="media-object" src="images/default.gif" height="40px" width="40px"></a><div class="media-body"><h4 class="media-heading">@' + tweet.user + '</h4>' + tweet.message + '</div></p>');
             index--;
         }
     };

     $(document).ready(function() {
         var $body = $('body');
         Tweets.latestTweets(); //load initial tweets;
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
