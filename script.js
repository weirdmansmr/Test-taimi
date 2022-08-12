let email = document.getElementById('email')
let placeholder = document.querySelector('.form__email_placeholder')

email.addEventListener('input', function() {
    if (email.value.length != 0) {
        console.log(email.value)
        placeholder.style.display = 'none'
    } else {
        placeholder.style.display = 'block'
    }
})
/* placeholder поля E-Mail */

const btn = document.getElementById('btn')
const btn_div = document.getElementById('btn_div')
const plane = document.getElementById('plane')
const sand_text = document.getElementById('send_text')

/*
    надо submit, но серверная часть не подключена,
    поэтому поставил click, чтобы работало как надо.
*/
btn.addEventListener('click', function() { 
    plane.style.position = 'relative'
    function animate() {
        let i = 57;
        let j = 0
        const ps = plane.style
        let timerId = setInterval(function() {
            ps.bottom = j+'px'
            ps.left = j+'px'
            ps.width = i+'px'
            if (i === 0) {
            clearInterval(timerId);
            ps.display = 'none'
            
            btn_div.style.backgroundImage = 'none'
            sand_text.innerHTML = 'Ваше сообщение отправлено!'
            btn.style.backgroundColor = btn_div.style.backgroundColor = '#388AF3'
            btn.style.color = '#fff'
            }
            i--;
            j+=1.75;
        }, 15);
    }
    animate();
})

