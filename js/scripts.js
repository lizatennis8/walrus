$(document).ready(function() {
  $(".clickable").click(function() {
    `$("#initially-showing").toggle();
    $("#initially-hidden").toggle();`
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
$("button#nighttime").click(function() {
  $("body").removeClass();
  $("body").addClass("black-background");
});
$("button#1").click(function() {
  $("ul#user").prepend("<li>This is right?</li>");
  $("ul#webpage").prepend("<li>Yes?</li>");

  $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
});
$("button#2").click(function() {
  $("ul#user").prepend("<li>Hey, girrrl</li>");
  $("ul#webpage").prepend("<li>I have no gender. Does not compute.</li>");

  $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
});
$("button#3").click(function() {
  $("ul#user").prepend("<li>Get out!</li>");
  $("ul#webpage").prepend("<li>Ok.</li>");

  $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
});
$("button#4").click(function() {
  $("ul#user").prepend("<li>No, come back!</li>");
  $("ul#webpage").prepend("<li>I never really left.</li>");

  $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
    });
  });
