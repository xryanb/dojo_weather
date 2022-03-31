

function tapHere(){
alert('Loading weather report...');
}


function beGone(id){
    var element=document.querySelector(id);
    element.remove();
}



/* on switch */

function convert(element){
    var select=document.querySelector('#temp')
    var value=select.options[select.selectedIndex].value;
    console.log(value);
    var element=document.querySelector('#celsius');
    var show2=document.querySelector('#alikazam');
if (value =='farenheit' && show2 !== 'none') {
    element.style.display='none'
    show2.style.display='flex';
} else if(value == 'celsius'){
    element.style.display='flex';
    show2.style.display='none';
} else {
   console.log('how to convert that?');
}

}