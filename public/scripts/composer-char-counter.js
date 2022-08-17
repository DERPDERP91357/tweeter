$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    let inputLength = $(this).val().length;
    const letterCounter = $("#tweet-text").siblings("div").children(".counter");
    letterCounter.val((i, val) => {
      let maximumCount = 140;
      return (val = maximumCount - inputLength);
    });
    if (letterCounter.val() <= 0) {
      letterCounter.addClass("negative");
    }
  });
});
