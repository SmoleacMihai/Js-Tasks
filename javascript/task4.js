function ucFirst(str){
    str = str.charAt(0)
    str = str.toUpperCase()
    return str
}

let text = prompt('Write a word');
let ucLetter = ucFirst(text);
textWithoutFirstLetter = text.substring(1)


alert(ucLetter + textWithoutFirstLetter)