let message = 'txt'; 
let a = prompt('a = '); 
let b = prompt('b = '); 
let c = prompt('c = '); 
let max; 
if(a > b){
    max = a; 
    message = 'a';
}else{
    max = b; 
    message = 'b';
}; 
if(c > max){
    max = c; 
    message = 'c';
}; 
alert('The biggest number is ' + message);