$(function () {
    $('.pliki-js').css('display','none');
    $('.document-js').css('display','none');
    $('.home-js').css('display','none');

    $('*[data-main-tabs]>ul>li').on('click',function(e){
        $('[data-main-tab').each((index,div) => {
            if($(div).data("main-tab") ==e.target.id){
                div.style.display ="block";
            }else{
                div.style.display = 'none';
            };
        });
    });
    
});