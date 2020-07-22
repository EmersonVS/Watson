$('#total').css('min-height', screen.height - .14 * screen.height)

$('#enviar').on('click', () => {
    let comentario = $("#novoComentario").val();
    if( comentario != '') {
        $("#novoComentario").css('background-color', 'white')
        $.ajax({
            method: "POST",
            contentType: "application/json; charset=utf-8",
            processData: false,
            data: JSON.stringify({ comentario: comentario }),
            url: "/cadastro",
            success: () => {
                window.location.reload();
            },
            error: () => {
                console.log(error)
            }
        })
    } else {
        $("#novoComentario").css('background-color', '#d37171')
        $('#novoComentario').css('color', 'white')
    }
})

$('.ouvir').on('click', (e) => {
    $('.ouvir').prop('disabled', true)
    let idBotao = e.target.id;
    let idTexto = "#texto" + idBotao.substring(idBotao.indexOf('_'), idBotao.length);
    $.post({
        method: "POST",
        contentType: "application/json; charset=utf-8",
        processData: false,
        data: JSON.stringify({ text: $(idTexto).text() }),
        url: "/watson",
        success: (data) => {
            let audio = new Audio('/estatico/audio'+data+'.wav')
            audio.play()
            $('.ouvir').prop('disabled', false)
        }
    })
})