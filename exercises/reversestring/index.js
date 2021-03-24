// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // var stri = str.split("").reverse().join("");
    // return stri;

    
        // var arr = str.split("");
        // var arry=[];
        // var ii=arr.length;
        // for(var i=arr.length-1;i>=0;i--){
        //    arry.push(arr[i]);
        // }
        // return arry.join("");
    // var rever='';
    //     for(let char of str){
    //         rever = char +rever;
    //     }
    //     return rever;
  
   return str.split("").reduce((reversed,character)=> reversed= character + reversed,'')
    }
    reverse('1234');

module.exports = reverse;
