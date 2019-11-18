$(document).ready(function(){
    // запускаем действие по клику на ссылку
    $('.country_link').on('click', function(e){
        e.preventDefault();
        // добавляем возможность отправки ajax-запроса для всех ссылок стран
        $('.country_link').removeClass('disabled_country');
        // конкретно у этой ссылки убираем возможность отправки ajax запроса при повторном нажатии на данную ссылку
       $(this).addClass('disabled_country');
       // получаем уникальный идентификатор страны
        var id = $(this).data('id');
        // готовим ajax-запрос
        $.ajax({
            url: '/web/site/ajax',
            data: {id: id},
            type: 'POST',
            success: function(res){
                // В случае успеха показываем результат
                showCity(res);

            }
        });

    });

    // Функция показа результата ajax-запроса
    function showCity(res){
        $('.city').html(res);
    }

});

