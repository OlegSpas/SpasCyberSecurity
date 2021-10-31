

function generPassword(){
    let litersSmall = 'abcdefghijklmnopqrstuvwxyz';
    let litersBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '1234567890';
    let passWord = '';
    let passSymbols = '';
    let strings = '';
    let message = document.getElementById('password__result')
    


    let  bigCheckBox = document.getElementById('big');
    let  smallCheckBox = document.getElementById('small');
    let  numbersCheckBox = document.getElementById('numbers');
    let  litersCheckBox = document.getElementById('liters');


    
    if(litersCheckBox.checked){
        if(bigCheckBox.checked){
            strings += litersBig;
        } else{
            console.log('not checked')
        }   
        if(smallCheckBox.checked){
            strings += litersSmall;
        } else{
            console.log('not checked')
        }
        passSymbols += strings;


    } else{
        console.log('not checked')
    }  
    if(numbersCheckBox.checked){
        passSymbols += numbers;
    } else{
        console.log('not checked')
    }

    let passLength = document.getElementById('passLength').value

    try{
        if(passLength > 28)  throw 'Введіть число від 2 до 28';
        if(passLength < 2) throw 'Введіть число від 2 до 28';
        if(passLength == '') throw 'Введіть довжину';
        if(isNaN(passLength)) throw 'Введіть число від 2 до 28';
        if(Number(passLength)) 
        for(i = 0; i < passLength; i++){
            let passSym = Math.floor(Math.random()*passSymbols.length + 1);
            passWord += passSymbols.charAt(passSym)
        }
        message.innerHTML = passWord;
    }
    catch(err){
        message.innerHTML = 'Error: ' + err + ".";
    }
    finally{
        message = ''
    }
}





