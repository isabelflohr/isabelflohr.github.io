// THIS FUNCTION ADDS SMOOTH SCROLLING //
$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.Link !== "") {
            event.preventDefault();

            var Link = this.Link;
        
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 3000, function(){

                window.location.Link = Link;
            });
        }
    });
});

// OPEN/CLOSE CONTACT FORM //
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}