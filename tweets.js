 moment().format();

 var Tweets = {}; //create Tweet Object

 Tweets.latestTweets = function() {
     $('.tweets').html('');
     var streamLength = streams.home.length;
     var index = streamLength - 1 - 10;
     while (index < streamLength) {
         var tweet = streams.home[index];
         var dayWrapper = moment(tweet.created_at).fromNow();
         $('.tweets').prepend('<a class="pull-left tweet-image" href="#"><img class="media-object" src="images/' + tweet.user + '.gif" height="40px" width="40px"></a><div class="media-body"><h4 class="media-heading">@' + tweet.user + ' - ' + dayWrapper + '</h4>' + tweet.message + '</div></p>');
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
     var dayWrapper = moment(tweet.created_at).fromNow();
     $('.tweets').prepend('<a class="pull-left tweet-image" href="#"><img class="media-object" src="images/anonymous.gif" height="40px" width="40px"></a><div class="media-body"><h4 class="media-heading">@' + tweet.user + ' - ' + dayWrapper + '</h4>' + tweet.message + '</div></p>');
     $('.new-tweet').val('');
 };

 Tweets.displayUserTweets = function(id) {
     $('.tweets').html('');
     var streamLength = streams.users[id].length;
     var index = 0;
     while (index < streamLength) {
         var tweet = streams.users[id][index];
         var dayWrapper = moment(tweet.created_at).fromNow();
         $('.tweets').prepend('<a class="pull-left tweet-image" href="#"><img class="media-object" src="images/' + id + '.gif" height="40px" width="40px"></a><div class="media-body"><h4 class="media-heading">@' + tweet.user + ' - ' + dayWrapper + '</h4>' + tweet.message + '</div></p>');

         index++;

     }
 };


 Tweets.displayAllTweets = function() {
     var streamLength = streams.home.length;
     var index = 0;

     while (index < streamLength) {
         var tweet = streams.home[index];
         var dayWrapper = moment(tweet.created_at).fromNow();
         $('.tweets').prepend('<a class="pull-left tweet-image" href="#"><img class="media-object" src="images/' + tweet.user + '.gif" height="40px" width="40px"></a><div class="media-body"><h4 class="media-heading">@' + tweet.user + ' - <span class="pretty-time">' + dayWrapper + '</span></h4>' + tweet.message + '</div></p>');
         index++;
     }
 };

 //ON PAGE LOAD

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
