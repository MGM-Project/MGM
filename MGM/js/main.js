$(function() {
                        // MODAL LOGIN START //
    // Show overlay & Open modal
    $(".login-modal-overlay").fadeIn(200);
    $(".button").click(function() {
      $(".login-modal-overlay").fadeOut(200);
      $(".transparent-container").show();
    });
    //Attach event on .depositButton
    $(".depositButton").click(function() {
      $(".transparent-container").hide();
    })
    //Stops event execution of children elements
    $(".login-modal").click(function(event) {
      event.stopPropagation();
    });
    
    
    // Input label
    
    $('input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });

                        // MODAL LOGIN END //
});