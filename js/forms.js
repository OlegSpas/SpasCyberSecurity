/////////// ПОТРЕБУЄ ДОРОБЛЕННЯ. BACKEND НЕ НАЛАШТОВАНИЙ,  АДЖЕ ВОНО НЕ СТОЇТЬ НА ХОСТИНГУ.
/////////// ІДЕЯ: ВОНО ВИСИЛАТИМЕ ВАМ ЛИСТ НА ПОШТУ. ПОТРЕБУЄТЬСЯ ХОСТИНГ ДЛЯ ЦЬОГО


'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formMessage');
    form.addEventListener('submit', formSend);
    let imgSrc = ''
    let popupMessage = ''

    function CreatePopup(){
        form.classList.add('_sending')
        var popPlace = document.getElementById('popupPlace');
        var popupContent = document.createElement('DIV');
        var popup = document.createElement('DIV');
        var text = document.createElement('H3');
        var arrow = document.createElement('img');

        text.innerHTML = popupMessage;
        arrow.setAttribute('src',imgSrc)

        popupContent.className="popupContent";
        popup.className="popupContent__main";


        popPlace.appendChild(popupContent);
        popupContent.appendChild(popup);
        popup.appendChild(arrow)
        popup.appendChild(text);
        
        setTimeout(function(){
            popupContent.style.display = "none"
        },3000)
    }

    async function formSend(e) {
        e.preventDefault();
 
        const error = formValidate(form);

        const formData = new FormData(form);
        



		if(error === 0){
			form.classList.add('_sending')
            imgSrc = "./image/popup/smile.svg";
            popupMessage = 'Дякуємо за довіру :)'
            CreatePopup()
            form.reset()
		}else{
            imgSrc = "./image/popup/fillOut.svg";
            popupMessage = 'Заповніть усі поля'
            CreatePopup()
		}
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')
        console.log(form);
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    // Тест email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
})