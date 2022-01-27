let number = prompt('Give a number')

    if(number == 0){
        alert(0)
        oneTime = false
    }else{
        if(number > 0){
            alert(1)
            oneTime = false
    }else{
        if(number < 0){
            alert(-1)
            oneTime = false
        }else{
            alert('Error')
        }
    }
    }