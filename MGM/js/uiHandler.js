const uiHandlerFunc = function eslint1(gameLogics, asyncOps, views) {
  // TO MAKE ANOTHER FILE WITH IT
  const gameWindow = function eslint5() {
    return {
      get render() {
        $.get(views.gameWindow, (partialPage) => {
          $('#centralContentWrapper').html(partialPage);
          console.log('gameWindowMock done');
        }).then(() => gameLogics(asyncOps));
        return null; // eslint
      },
    };
  };

  const deposit = function eslint3() {
    return {
      get render() {
        $.get(views.deposit, (partialPage) => {
          $('#centralContentWrapper').html(partialPage);
          console.log('deposit done');

          // ToComeFromEventModule
          $('.transparent-container').show();
          $('.depositValue').click(function eslint4() {
            $('.dropbtn').text($(this).html());
          });

          // Attach event on .depositButton
          $('.depositButton').click(() => {
            if ($('.dropbtn').text() !== 'Select sum') {
              $('#depositSum').append($('.dropbtn').text());
              $('.transparent-container').hide();
              $('.idleEmptyBoard').show();
              gameWindow().render();
            }
          });
          $('.dropdown-content').click(() => {
            if ($('.dropdown-content').is(':hidden')) {
              $('.dropdown-content').show();
            } else {
              $('.dropdown-content').hide();
            }
          });
          $('.dropbtn').click(() => {
            if ($('.dropdown-content').is(':hidden')) {
              $('.dropdown-content').show();
            } else {
              $('.dropdown-content').hide();
            }
          });
          $('.depositValue').click(function eslint4() {
            $('.dropbtn').text($(this).html());
          });
        });
        return null; // eslint
      },
    };
  };
  const login = function eslint2() {
    return {
      get render() {
        $.get(views.login, (partialPage) => {
          $('#centralContentWrapper').html(partialPage);
          console.log('login done');

          // ToComeFromEventModule
          // Show overlay & Open modal
          $('.login-modal-overlay').fadeIn(200);
          $('.nameButton').click(() => {
            $('.login-modal-overlay').fadeOut(200);
            $('#userName').append(` ${$('#playerName').val()}`);
            deposit().render();
          });
          $('input').blur(function eslintStopCryingLikeALittleBitch() {
            const $this = $(this);
            if ($this.val()) { $this.addClass('used'); } else { $this.removeClass('used'); }
          });
          $('#playerName').keyup((event) => {
            if (event.keyCode === 13) {
              $('.nameButton').click();
            }
          });
        });
        return null; // eslint
      },
    };
  };

  return {
    login,
  };
};
