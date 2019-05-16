// Check off the specific todo items by clicking them.
// add listener to entire ul parent element.
// when li is clicked inside a ul, run this code.
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete list item.
// Fade out the parent element of the span and then remove it once fade is complete.
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $("this").remove();
    });
  event.stopPropagation();
});

// Run code when user presses Enter key.
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // Get new todo text from input.
    var todoText = $(this).val();
    // Clear the input field once entered.
    $(this).val("");
    // Create a new li and add to to ul.
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i> </span>" + todoText + "</li>"
    );
  }
});

$(".fa-plus").on("click", function() {
  $("input[type='text'").fadeToggle();
});
