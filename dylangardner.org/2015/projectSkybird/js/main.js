$('document').ready(function(){
    function open() {
        $('nav').toggleClass('expand');
        $('#a-top').fadeToggle(800);
        $('#a-bio').fadeToggle(750);
        $('#a-projects').fadeToggle(750);
        $('#a-about').fadeToggle(750);
        $('.nav-button').toggleClass('close-button');
        if ($('nav').width() >= 550) {
           console.log('sucess');
        }
    };

    function close() {
        $('nav').toggleClass('close');
        $('#a-top').fadeToggle(300);
        $('#a-bio').fadeToggle(300);
        $('#a-projects').fadeToggle(300);
        $('#a-about').fadeToggle(300);
        $('.nav-button').toggleClass('close-button');
    };
    $('.nav-button').one('click', function(event){
        open();
        $('.nav-button').click(close);
    });
    $('.a-nav').click(function(){
        close();
    });          
});