var scores = [20,33,44];
var scoresLenght = scores.length;

var round = 0;
var msg ='';
var i; 

for(i = 0; i<scoresLenght ; i++)
{
    round = (i + 1);
    msg += 'runda ' + round + ':';
    msg += scores[i] + '<br/>';

}

//document.getElementById('wynikk').innerHTML = msg;
function h_Information()
{
    var oneOne = document.getElementById('h-four-generate').textContent='nazwa obiektu: '+hotel.name;
    var oneTwo = document.getElementById('h-four-generate__two').textContent='ilość pokoi: '+hotel.rooms;
    var oneTree = document.getElementById('h-four-generate__tree').textContent='wolny pokój: '+Wolne;
}
//OBIEKT
var hotel = {
    name: 'Zamek',rooms:40,zajetePokoje:39
};

 Wolne = hotel.rooms - hotel.zajetePokoje;

document.getElementById('hotelId').innerHTML = hotel.name ;
document.getElementById('hotelRooms').innerHTML = hotel.rooms;
document.getElementById('hotelFreeRooms').innerHTML = Wolne;
h_Information();

/*
$('#button-Reservation').ready(function(){

    $('.der').css('display','none');

    $('#button-Reservation').hover(function(){

        $('der').css('display','block');
    }),function(){
        $('der').css('display','none');
    }
})
*/

var OneElementCool = document.getElementById('one');
var el = document.getElementsByClassName('hot');

OneElementCool.className ='cool';

if(el.length >1){
    var element = el[2];
    element.className='cool';
}

var plik = document.querySelectorAll('li[id]')

plik.textContent ='g';

wiadomosc = 'dokument';


var NewEl = document.createElement('li');
var NewText = document.createTextNode('komosa');

NewEl.appendChild(NewText);

var position = document.getElementsByTagName('ul')[0];
position.appendChild(NewEl);
position.className='hot';

/*
var removeEL = document.getElementsByTagName('li')[3];
var Container = removeEL.parentNode;
Container.removeChild(removeEL);
*/

$('#button').on('click',function(){
    $('.der').remove();
    alert('usunięty');
}) 
 /* 
$('#kalenda').on('click',function() {
        $('.der').css('display','none');
        console.log('click');
        
        $('der').css('display','none');
    }, function () {
        $('.der').css('display','block');
        console.log('click-click');
    }
);
*/

$(document).ready(function(){
    $('.der').css('display','none');

    $('*[data-main-tabs] > button').on('click',function (event) {
        $("div[data-main-tab]").each((index,div) => {
            if($(div).data("main-tab") == event.target.id) {
                div.style.display="block";
            } else {
                div.style.display="none";
            }
        });
        
    });
});

$(function () { 
$('.das').css('opacity','1');

    $('#pokoje').on('click',function () {
        $('.das').css('opacity','1');
        console.log('pokoje');
      }),function(){
          $('.das').css('opacity','1');
          console.log('usunietopokoje');
      }
 })


/*
 $(function(){
     $('.klik').on('click',function(){
         console.log('click');
         $('.cl').remove();
     })
    });
        
*/

$(document).ready(function(){
    //$('.cl').fadeOut();

    $('.klik').on('click',function(){

        console.log('działą');
        $('.cl').fadeIn();

    },function(){
        $('.cl').fadeOut();
}
)
}
)


     


    

buttonId = document.getElementById('button');
console.log(buttonId);

