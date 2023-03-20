// function changeColor(){
//     document.getElementById('title').style.color = 'red';
// }

// let counter = 0;
// let n=0;
// function increment(){
//     counter = counter + 1;
//     //counter++
//     //counter += 1
//     n=counter*counter*counter;
//     document.getElementById('cube').innerHTML=n;
//     document.getElementById('counter').innerHTML = counter;

// }
// function decrement(){
//     counter = counter - 1;
//     //counter--
//     //counter -= 1
//     n=counter*counter*counter;
//     document.getElementById('cube').innerHTML=n;
//     document.getElementById('counter').innerHTML = counter;
// }
// function reset(){
//     counter = 0;
//     n=0;
//     //counter++
//     //counter += 1
//     document.getElementById('counter').innerHTML = counter;
//     document.getElementById('cube').innerHTML=n;
// }
// function cube(){
//     n=counter*counter*counter;
//     document.getElementById('cube').innerHTML=n;
// }
let n=0;
function sum(){
    n=parseInt(document.getElementById('n1').value)+parseInt(document.getElementById('n2').value);
    document.getElementById('sum').innerHTML="Sum of "+document.getElementById('n1').value+" and "+document.getElementById('n2').value+" is "+n;
    document.getElementById('n1').value='';
    document.getElementById('n2').value='';
}