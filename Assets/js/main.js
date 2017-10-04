$(window, document, undefined).ready(function() {

    // Show overlay & Open modal
    $(".login-modal-overlay").fadeIn(200);
    $(".button").click(function() {
      $(".login-modal-overlay").fadeOut(200);
    })
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
});