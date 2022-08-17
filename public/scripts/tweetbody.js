$(document).ready(function() {
  let heart = $(".fa-heart");
  heart.mouseenter(function () {
    $(this).addClass("fa-heart-pulse");
    $(this).removeClass("fa-heart");
  })
  heart.mouseleave(function () {
    $(this).addClass("fa-heart");
    $(this).removeClass("fa-heart-pulse");
  })
  let spin = $(".fa-retweet");
  spin.mouseenter(function () {
    $(this).addClass("fa-arrows-rotate");
    $(this).removeClass("fa-retweet");
  })
  spin.mouseleave(function () {
    $(this).addClass("fa-retweet");
    $(this).removeClass("fa-arrows-rotate");
  })
});

// /* hover effect on icons

//  */
// <i class="fa-solid fa-heart-pulse"></i>
// <i class="fa-solid fa-repeat"></i>