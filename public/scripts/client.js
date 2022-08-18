/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {
  const createTweetElement = function (data) {
    const $img = $("<img>").addClass("left-items").attr("src", data.user.avatars)
    const $span = $("<span>").addClass("right-items").text(data.user.handle);
    const $header = $("<header>").addClass("tweet-header").append($img, $span);

    const $p = $("<p>").text(data.content.text);
    const $section = $("<section>").addClass("tweet-body").append($p);

    const $span2 = $("<span>").addClass("left-items").text(timeago.format(data.created_at));
    const $i1 = $("<i>").addClass(["fa-solid", "fa-heart"]);
    const $i2 = $("<i>").addClass(["fa-solid", "fa-retweet"]);
    const $i3 = $("<i>").addClass(["fa-solid", "fa-flag"]);
    const $div = $("<div>").addClass(["right-items", "icons"]).append($i1, $i2, $i3);
    const $footer = $("<footer>").addClass("tweet-footer").append($span2, $div);
    

    const $article = $("<article>").addClass("tweet").append($header, $section, $footer);
    return $article;
  };
  

  const renderTweets = function(tweets) {
    for (let each of tweets) {
      $('#past-tweets').prepend(createTweetElement(each));
    }
  };
  const loadtweets = function() {
   $.get("/tweets").then((data) => {
    $("#past-tweets").empty();
    renderTweets(data);
   })
  };

  loadtweets();


  $("#tweet-form").on("submit", function (event) {
    event.preventDefault();
    let tweetLength = $("#tweet-text").val();
    if (!tweetLength || tweetLength.length > 140) {
      return alert("invalid message!");
    }
    const data = $(this).serialize();
    $.post("/tweets", data).then(() => {
      console.log("data sent successfully!");
      loadtweets();
    })
  })

});

