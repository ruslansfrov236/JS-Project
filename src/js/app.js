const body = document.querySelector('body');
const btnButton = document.querySelector('#btn');
btnButton.addEventListener('click', DarkMode);
const text =document.querySelector(".text");
const BtnForm = document.querySelector('#btn-form');
function yashUser() {
    let userInput = prompt("Yaşınızı daxil edin:").trim();

    if (userInput === "") {
        alert("Yaş bos deyer daxil edibsiz.");
    } else {
        let age = parseInt(userInput);

        if (isNaN(age)) {
            alert("Zehmet olmasa duzgun deyer daxil edin");
        } else if (age < 18) {
            alert(`Yaşınız ${age}, ${18 - age} ilden sonra sifariş tamamlanacak.`);
        } else {
            alert("Sifariş tamamlandı.");
        }
    }
}

yashUser();


function DarkMode() {
    if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
        confirm("dark mode");
        body.style.backgroundColor = '#000';
        body.style.color = '#fff';
        btnButton.innerHTML = 'White';
    } else {
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';
        btnButton.innerHTML = 'Dark';
    }
}


class User {
    constructor(ad, soyad, password) {
        this.ad = ad;
        this.soyad = soyad;
        this.password = password;
    }
}

function UserCreate() {
    const ad = document.querySelector('#ad').value;
    const soyad = document.querySelector('#soyad').value;
    const password = document.querySelector('#password').value;

    if (ad && soyad && password) {
        const newUser = new User(ad, soyad, password);
        text.innerHTML=`İstifadəçi ${newUser.ad.toUpperCase()} ${newUser.soyad.toUpperCase()} , parol :${newUser.password.toUpperCase()}`;
        return newUser;
    } else {
        text.innerHTML='Zəhmət olmasa bütün sahələri doldurun.';
        return null;
    }
}

const btnForm = document.querySelector('#btn-form');

if (btnForm) {
    btnForm.addEventListener('click', () => {
        UserCreate();
    });
}
