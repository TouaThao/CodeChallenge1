console.log('JavaScript')

$(document).ready(readyNow)


function readyNow(){
    EventHandler()
    console.log('In JQuery')
}

function toggleEffectRempve(){
    $('#change').on('click',changeColor)
    $('#remove').on('click',rmvBtn)
}

function EventHandler(){
$('#Submit').on('click',addDiv)

}

function addDiv(){
  $('#display').append('<div></div>')
  $('#display').append('<p></p>')
  $('#display').append('<button id="change" >Swap</button>' + '<button id="remove" >Delete</button>')  
}

function changeColor(){
    $('div').css("background", "Yellow")
}


function rmvBtn(){
    (this).closest().remove();
}
// (this).remove
// let effect = -1
// for (let i = 0; i < storage.length; i++) {
//    if (storage[i]=== (this).val()) {
//    }
// }

