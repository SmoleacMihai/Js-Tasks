let a = prompt('Dati primul numar al intervalului')
let b = prompt('Dati ultimul numar al intervalului')
let count = 0
for(let i = a; i < b; i++){
    if(( i % 2 ) == 0){
        count = count + i;
    }
}
alert(count)