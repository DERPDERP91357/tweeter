$(document).ready(function () {
  let heart = $(".fa-heart");
  heart.mouseenter(function () {
    //changes icon on mouseover
    $(this).addClass("fa-heart-pulse").removeClass("fa-heart");
  });
  heart.mouseleave(function () {
    //changes icon back on mouseleave
    $(this).addClass("fa-heart").removeClass("fa-heart-pulse");
  });
  let spin = $(".fa-retweet");
  spin.mouseenter(function () {
    $(this).addClass("fa-arrows-rotate").removeClass("fa-retweet");
  });
  spin.mouseleave(function () {
    $(this).addClass("fa-retweet").removeClass("fa-arrows-rotate");
  });
});
