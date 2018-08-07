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
  $("ul").prepend("<li>This is right?</li>")
});
$("button#2").click(function() {
  $("ul").prepend("<li>FINALLY</li>")
});
$("button#3").click(function() {
  $("ul").prepend("<li>Fine!</li>")
});
$("button#4").click(function() {
  $("ul").prepend("<li>Yes, ma'am :3</li>")
});
});
