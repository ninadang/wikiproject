
$(function() {
    $("#answer").click(function(event) {
        alert('That is correct! Please circle PASSED on your sheet and proceed to the next page.');
    });    

    $(".wrong").click(function(event) {
        alert('Sorry, that is incorrect. Please mark a tally under the ATTEMPTS section and try again.');
    });  

});
