$(document).ready(function(){
    $('.country_link').on('click', function(e){
        e.preventDefault();
        $('.country_link').removeClass('disabled_country');
       $(this).addClass('disabled_country');
        var id = $(this).data('id');
        $.ajax({
            url: '/web/site/ajax',
            data: {id: id},
            type: 'POST',
            success: function(res){
                showCity(res);
            },
            error: function(){
                console.log('Error!');
            }
        });

    });

    function showCity(res){
        $('.city').html(res);
    }

});

