$(document).ready(function(){

    // Boutons connexion
    var modalPath = $('.modalBoxPatient');
    $('#connexionPatient').click(function(){
        modalPath.show();
    });
    $('.btn-close').click(function(){
        modalPath.hide();
    });
    var modalPrat = $('.modalBoxPrat');
    $('#connexionPS').click(function(){
        modalPrat.show();
    });
    $('.btn-close').click(function(){
        modalPrat.hide();
    });

});
