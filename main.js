function Up(n) {
    let data = ['months', 'years'];
    let obj = document.getElementById(data[n - 1]);
    let m = Number(obj.innerHTML) + 1;
    obj.innerHTML = m;
}

function Down(n) {
    let data = ['months', 'years'];
    let obj = document.getElementById(data[n - 1]);
    let m = Number(obj.innerHTML);
    if (m <= 0) {
        obj.innerHTML = 0;

    } else {
        obj.innerHTML = m - 1;
    }
}

function BtnActive(n) {
    let btns = document.querySelectorAll('.btn');
    for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove('btn-active');
    }
    let btn = document.getElementById('btn' + n)
    btn.classList.add('btn-active')
}

function Check() {
    let mass = document.getElementById('mass');
    let value = document.getElementById('mass').value;
    let array = value.split('');
    for (i = 0; i < array.length; i++) {
        if (isNaN(array[i] - 1) === true || Number(value) > 20 ||  value === '') {
            mass.classList.add('error');
            alert('Вы неверно ввели массу');
            mass.value='';
            break;
        } else {
            mass.classList.remove('error');
        }
        ;
    }
    ;

    let mail = document.getElementById('mail');
    let str = mail.value
    if (str.includes('@') === false) {
        mail.classList.add('error');
        alert('Вы неверно ввели Email');
        mail.value='';
    } else {
        mail.classList.remove('error');
    };

    if (mass.classList.contains('error')===false && mail.classList.contains('error')===false) {
        alert('Вы успешно отправили форму!')
        mass.value='';
        mail.value='';
    }

};
function Hidden() {
    let all = document.getElementById('container')
    all.classList.toggle('hidden')
}