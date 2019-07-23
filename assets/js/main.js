$(() => {
    $('.result-bottom-btn button').on('click', function() {
        $(this).next().slideToggle();
    })
})