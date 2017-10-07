$(() => {
  // MODAL LOGIN START
  // Show overlay & Open modal
  $('.login-modal-overlay').fadeIn(200);
  $('.nameButton').click(() => {
    $('.login-modal-overlay').fadeOut(200);
    $('#userName').append(` ${$('#playerName').val()}`);
    $('.transparent-container').show();
  });
  $('a').click(function () {
    $('.dropbtn').text($(this).html());
  });
  // Attach event on .depositButton
  $('.depositButton').click(() => {
    $('#depositSum').append(`${$('.dropbtn').text()}`);
    $('.transparent-container').hide();
  });
  // Stops event execution of children elements
  $('.login-modal').click((event) => {
    event.stopPropagation();
  });
  // Input label
  $('input').blur(function () {
    const $this = $(this);
    if ($this.val()) { $this.addClass('used'); } else { $this.removeClass('used'); }
  });
  // MODAL LOGIN END


  // TESTING PURPOSES START
  const container = containerFunc();
  let deck_id;
  container.asyncOps.newShuffledDeck(5).then(deck => deck.deck_id)
    .then(deck => container.asyncOps.drawCard(deck))
    .then(picUrl => $('#logo').attr('src', picUrl.cards[0].image));
  // TESTING PURPOSES END
});
