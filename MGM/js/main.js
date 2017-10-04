/* eslint-env jquery */
$(window, document, undefined).ready(() => {
  $('.login-modal-overlay').fadeIn(200);
  $('.button').click(() => {
    $('.login-modal-overlay').fadeOut(200);
  });
  $('.login-modal').click((event) => {
    event.stopPropagation();
  });

  $('input').blur(function () {
    const $this = $(this);
    if ($this.val()) { $this.addClass('used'); } else { $this.removeClass('used'); }
  });
});
