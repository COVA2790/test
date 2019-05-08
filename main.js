$(document).ready(function () {
    $('#btn').on('click', function (e) {
        e.preventDefault()
        
        // 1. Взять содержимое поля ввода
        var value = $('#input').val()
        // 2. Поместить содержимое которое мы взяли в заголовок
        $('#name').text(value)
        // 3. Насрать на экране указанное количество раз
        var el = $('#hell')
        $(el).empty()
        for(var i = 0; i < value; i++) {
            $(el).append('<p>Хуй гавно '+ i +'</p>')
        }
    })
})