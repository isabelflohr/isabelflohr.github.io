// THIS FUNCTION ADDS SMOOTH SCROLLING //
$(document).ready(function(){   
  $("a").on('click', function(event) {
	  
    // Make sure this.Link has a value before overriding default behavior
    if (this.Link !== "") {
      event.preventDefault();

      // Store Link
      var Link = this.Link;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(Link).offset().top
      }, 3000, function(){
   
        // Add Link (#) to URL when done scrolling (default click behavior)
        window.location.Link = Link;
      });
    }
  });
});

// OPEN AND CLOSE CONTACT FORM //
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  this.Close();
}
