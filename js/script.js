$('#icon').on('mouseover', function() {
    $('#icon').css('background-color', 'hsl(217, 19%, 35%)');
    $('#icon').css('cursor', 'pointer');
    $('.kumpulanIcon').css('display', 'block');

    $('#icon').on('mouseout', function() {
        $('#icon').css('background-color', 'hsl(210, 46%, 95%)');
        $('#icon').css('cursor', 'default');
        $('.kumpulanIcon').css('display', 'none');
    });
});