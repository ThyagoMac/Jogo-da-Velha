vez = 'x';

function atualizarPlacar() {
    if (vez == 'o') {
        $('.placar img').attr('src', 'img/o.jpg');
    } else {
        $('.placar img').attr('src', 'img/x.jpg');
    }
}

function verificationVencedor() {
    var a1 = $('.a1').attr('data-marcado');
    var a2 = $('.a2').attr('data-marcado');
    var a3 = $('.a3').attr('data-marcado');

    var b1 = $('.b1').attr('data-marcado');
    var b2 = $('.b2').attr('data-marcado');
    var b3 = $('.b3').attr('data-marcado');

    var c1 = $('.c1').attr('data-marcado');
    var c2 = $('.c2').attr('data-marcado');
    var c3 = $('.c3').attr('data-marcado');

    var ganhador = '';

    for (var i = 0; i <= 1; i++) {
        if (i == 0) {
            var op = 'o'
        } else {
            var op = 'x'
        }

        if (a1 == op && b1 == op && c1 == op) {
            ganhador = op;
        } else if (a2 == op && b2 == op && c2 == op) {
            ganhador = op;
        } else if (a3 == op && b3 == op && c3 == op) {
            ganhador = op; /////horizontal
        } else if (a1 == op && a2 == op && a3 == op) {
            ganhador = op;
        } else if (b1 == op && b2 == op && b3 == op) {
            ganhador = op;
        } else if (c1 == op && c2 == op && c3 == op) {
            ganhador = op; /////vertication
        } else if (a1 == op && b2 == op && c3 == op) {
            ganhador = op;
        } else if (a3 == op && b2 == op && c1 == op) {
            ganhador = op; ////diagonation
        }
    }
    if (ganhador != '') {
        if (ganhador == 'o') {
            alert('O VENCEDOR É O: BOLA');
        } else {
            alert('O VENCEDOR É O: X');
        }

        $('.area').html('');
        $('.area').attr('data-marcado', '');
    }
    if (a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != '') {
        alert('SEM VENCEDORES... LOOOOSERS!!!');
    }
}

$(function () {
    atualizarPlacar();

    $('.area').bind('click', function () {
        if ($(this).find('img').length == 0) {

            if (vez == 'o') {
                $(this).html("<img src='o.jpg' border='0' height='50'/>");
                $(this).attr('data-marcado', 'o');
                vez = 'x';
            } else {
                $(this).html("<img src='img/x.jpg' border='0' height='50'/>");
                $(this).attr('data-marcado', 'x');
                vez = 'o'
            }
            atualizarPlacar();

            verificationVencedor();
        }
    });
});