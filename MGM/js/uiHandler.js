const uiHandlerFunc = function(gameLogics,asyncOps,views){
    //TO MAKE ANOTHER FILE WITH IT

    const login = function() {
        return{
            get render(){
                $.get(views.login,function(partialPage){
                    $("#centralContentWrapper").html(partialPage);
                    console.log("login done");

                    //ToComeFromEventModule
                      // Show overlay & Open modal
                    $('.login-modal-overlay').fadeIn(200);
                    $('.nameButton').click(() => {
                        $('.login-modal-overlay').fadeOut(200);
                        $('#userName').append(` ${$('#playerName').val()}`);
                        deposit().render;
                        
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
            }
        }
    }
    const deposit = function() {
            return{
                get render(){
                    $.get(views.deposit,function(partialPage){
                        $("#centralContentWrapper").html(partialPage);
                        console.log("deposit done");
    
                        //ToComeFromEventModule
                        $('.transparent-container').show();
                        $('.depositValue').click(function () {
                        $('.dropbtn').text($(this).html());
                        });

                        // Attach event on .depositButton
                        $('.depositButton').click(() => {
                            
                        if ($('.dropbtn').text() !== 'Select sum') {
                            $('#depositSum').append($('.dropbtn').text());
                            $('.transparent-container').hide();
                            $('.idleEmptyBoard').show();
                            gameWindow().render;
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
                        $('.depositValue').click(function () {
                            $('.dropbtn').text($(this).html());
                        });
                    });
                }
        }
    }
    const gameWindow = function() {
        return{
            get render(){
                $.get(views.gameWindow,function(partialPage){
                    $("#centralContentWrapper").html(partialPage);
                    console.log("gameWindowMock done");

                }).then(() => gameLogics(asyncOps));
            }
        }
    }


          
    return {
        login: login
    }
}
