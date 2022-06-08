window.addEventListener('DOMContentLoaded', () => {
    let login = document.querySelector('#login'),
        password = document.querySelector('#password'),
        checkbox = document.querySelector('#checkbox'),
        send = document.querySelector('#enter'),
        wrapper = document.querySelector('.wrapper-button'),
        wrapperLink = document.querySelectorAll('.wrapper-button a');

        if(wrapperLink.length <= 1){
            wrapper.style.padding = '100px'
            console.log(wrapper);
        }
        console.log(wrapperLink);
        
        send.addEventListener('click', () => {
           if((login.value !== '') && (password.value !== '') && checkbox){
               console.log('emas');
           }else {
               console.log('bow');
           }

           login.value = '';
           password.value = '';
        })
})