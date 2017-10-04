$(window, document, undefined).ready(function() {

    $(".login-modal-overlay").fadeIn(200);
    $(".button").click(function() {
      $(".login-modal-overlay").fadeOut(200);
    })
    $(".login-modal").click(function(event) {
      event.stopPropagation();
    });
  
    $('input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });
});
