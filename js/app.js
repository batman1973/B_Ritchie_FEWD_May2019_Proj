// This is the email submit click event that sends a thank you message
$('#email-submit').click(function(event){
  event.preventDefault();
  alert('Thank you for signing up!!!');
});

// This will hide/show the 
$(document).ready(function(){
  $("#show-hide-toggle-btn").click(function(){
    var buttonValue = $("#show-hide-toggle-btn").val();
    var value = "Show my subaru collection";
    if (value == buttonValue){
      $("#show-hide-toggle-btn").prop('value', 'Hide my subaru collection');
      $("#my-first-subaru").toggle();
      $("#my-second-subaru").toggle();
    } else {
      $("#show-hide-toggle-btn").prop('value', 'Show my subaru collection');
      $("#my-first-subaru").toggle();
      $("#my-second-subaru").toggle();
    }    
  });
});

