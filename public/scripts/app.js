
var createTweetElement = function (tweet) {
  return `<div class="individual-tweets">
          <header>
            <img src="${tweet.user.avatars.small}">
            <h2>${tweet.user.name} </h2>
            <span>${tweet['user']['handle']}</span>
          </header>

          <article>
            <p>${escape(tweet['content']["text"])}</p>
          </article>

          <footer>
            <p>${tweet["created_at"]}</p>
            <div class="icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </div>`
}


function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function renderTweets(tweets) {
  for(var i = 0 ; i < tweets.length ; i++) {
    var $tweet = createTweetElement(tweets[i]);
    $(".tweets-container").prepend($tweet);
  }
}

function postTweet() {
  $.ajax({
    url: "/tweets",
    method: "POST",
    data: $(".new-tweet-form-textarea").serialize(),
    success: function(data) {
      $(".tweets-container").empty();
      $(".new-tweet-form-textarea").val("");

      loadTweets();
    }
  });
}

function loadTweets() {
  $.ajax({
    url: "/tweets",
    method: "GET",
    success: function(data) {
      renderTweets(data);
    }
  });
}

// console.log($tweet); // to see what it looks like

$( document ).ready(function() {
  loadTweets();

  $("#submit-toggle").on("click", function(){
    $(".new-tweet").toggle();
    $(".new-tweet-form-textarea").focus();
  });

  $("#new-tweet-form").on("submit", function(evt) {
    evt.preventDefault();
    if($(".new-tweet-form-textarea").val() == "" ){
      alert('Your tweet is empty');
    } else if ($(".new-tweet-form-textarea").val().length > 140){
      alert('Your tweet is more than 140 characters');
    } else {
      postTweet();
    }
  });
});


//
//
//
// date = new Date(1461113959088)
// now = new Date()
//
// lef diff = now - date
// if (diff > 60000){
//   console.log(diff/1000 + "seconds ago")
// } else if (diff > 100000 )  {
//   console.log(diff/60000 + "minutes ago")
// } else if (diff > 1000000) {
//   console.log(diff/36000000 + "hours ago")
// } else if (diff > 100000000) {
//   console.log(diff/36000000 + "minutes ago")
