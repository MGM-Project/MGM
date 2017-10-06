$(function() {
                        // MODAL LOGIN START //
    // Show overlay & Open modal
    $(".login-modal-overlay").fadeIn(200);
    $(".button").click(function() {
      $(".login-modal-overlay").fadeOut(200);
      $("#userName").append(" "+ $("#playerName").val());
      $(".transparent-container").show();
    });
    //Attach event on .depositButton
    $(".depositButton").click(function() {
      $("#depositSum").append(" "+ $("#playerName").val());
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

    $('a').click(function(){
      $('.dropbtn').text($(this).html());
      $("#userName").append(" "+ $(this).html());
    });


                        ////TESTING PURPOSES
                       
                let container = containerFunc();
                let deck_id;
                container.asyncOps.newShuffledDeck(5).then((deck)=>deck_id = deck.deck_id)
                                                       .then((deck) => container.asyncOps.drawCard(deck))
                                                       .then((picUrl)=>$("#logo").attr("src",picUrl.cards[0].image));
                        ////TESTING PURPOSES END
});