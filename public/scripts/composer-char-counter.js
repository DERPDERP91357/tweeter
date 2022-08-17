$(document).ready(function () {
  $("#tweet-text").on("input", function () { 
    let inputLength = $(this).val().length;
    const letterCounter = $("#tweet-text").siblings("div").children(".counter"); //corresponds to output element in index html
    letterCounter.val((i, val) => {
      let maximumCount = 140;
      return (val = maximumCount - inputLength);
    });
    if (letterCounter.val() <= 0) {
      letterCounter.addClass("negative");//changes color of counter when value is negative
    }
  });
});
