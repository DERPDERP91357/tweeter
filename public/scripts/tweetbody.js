$(document).ready(function () {
  let heart = $(".fa-heart");
  heart.mouseenter(function () {//changes icon on mouseover
    $(this).addClass("fa-heart-pulse");
    $(this).removeClass("fa-heart");
  });
  heart.mouseleave(function () {//changes icon back on mouseleave
    $(this).addClass("fa-heart");
    $(this).removeClass("fa-heart-pulse");
  });
  let spin = $(".fa-retweet");
  spin.mouseenter(function () {
    $(this).addClass("fa-arrows-rotate");
    $(this).removeClass("fa-retweet");
  });
  spin.mouseleave(function () {
    $(this).addClass("fa-retweet");
    $(this).removeClass("fa-arrows-rotate");
  });
});
