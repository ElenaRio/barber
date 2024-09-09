AOS.init();

const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click', () =>{
    menuList.classList.toggle('menu__list--open');
   
});
menuClose.addEventListener('click', () =>{
    menuList.classList.remove('menu__list--open');
 
});




const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: 'coverflow',
    initialSlide: 0,
    
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        
        800: {
            slidesPerView: 1, 
        },

        801: {
            slidesPerView: 3,
        }
    }
   
  });




const modal = document.getElementById("myModal");
const openModalBtns = document.querySelectorAll(".btn");
const closeBtn = document.getElementsByClassName("close")[0];

const errorModal = document.getElementById("errorModal");
const closeErrorBtn = document.querySelector(".close-error");
const errorMessage = document.getElementById("errorMessageT");


const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");



const barberSelect = document.getElementById("barberSelect");
const timeSelect = document.getElementById("timeSelect");
const serviceSelect = document.getElementById("serviceSelect");
const nameInput = document.getElementById("name").querySelector('input');
const phoneInput = document.getElementById("phone").querySelector('input');
const commentInput = document.getElementById("comment").querySelector('textarea');
const agreeCheckbox = document.getElementById("agree");


const nameError = document.getElementById("name").querySelector('.error-message');
const phoneError = document.getElementById("phone").querySelector('.error-message');
const agreeError = document.getElementById("agreeError");


openModalBtns.forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "block";
    }
});


closeBtn.onclick = function() {
    modal.style.display = "none";
    resetForm(); 
}

closeErrorBtn.onclick = function() {
    errorModal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetForm(); 
    }


    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
}


function resetForm() {
    step1.classList.add("active");
    step2.classList.remove("active");
    nameInput.value = '';
    phoneInput.value = '';
    commentInput.value = '';
    agreeCheckbox.checked = false;
}


document.querySelector(".nextBtn").onclick = function() {
    
    if (barberSelect.value && timeSelect.value && serviceSelect.value) {
        step1.classList.remove("active");
        step2.classList.add("active");
    } else {
       

        showError('Будь ласка, заповніть усі обов\'язкові поля.');
    }
}


function showError(message) {
    errorMessage.textContent = message;
    errorModal.style.display = "block";
}



document.getElementById("submitBookingBtn").onclick = function() {
    let isValid = true;

    
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Будь ласка, введіть ваше ім\'я.';
        isValid = false;
    } else if (!/^[a-zA-Zа-яА-Я\s]+$/.test(nameInput.value.trim())) {
        nameError.textContent = 'Ім\'я повинно містити лише літери.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    
    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = 'Номер телефону має бути у форматі +380XXXXXXXXX.';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    if (!agreeCheckbox.checked) {
        agreeError.textContent = 'Ви повинні дати згоду на обробку даних.';
        isValid = false;
    } else {
        agreeError.textContent = '';
    }

   
    if (isValid) {
        const bookingData = {
            barber: barberSelect.value,
            time: timeSelect.value,
            service: serviceSelect.value,
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            comment: commentInput.value.trim()
        };

        console.log('Booking Data:', bookingData);
        showError('Дякуємо, чекаємо вас у barbershop "FOREST", адреса: Проспект Соборний 100, Київ, тел. 098 98 64 888');
        modal.style.display = "none";
        resetForm();
    }else {
        showError('Будь ласка, виправте помилки перед відправкою форми.');
}}
const form = {
    name: document.getElementById('name'),
    phone: document.getElementById('phone'),
    comment: document.getElementById('comment'),
}
function handleInput(e, name){
    const {value} = e.target
    if(value){
        form[name].classList.add('filed')
    }else{
        form[name].classList.remove('filed')
    }
}
form.name.oninput = (e) => handleInput(e, 'name')
form.phone.oninput = (e) => handleInput(e, 'phone')
form.comment.oninput = (e) => handleInput(e, 'comment')

const timeInput = document.getElementById('timeSelect');



const headers = document.querySelector('[ data-name="accordeon-title"]')
headers.addEventListener('click', function(){
     const social = document.querySelector('.step__social')
       social.classList.toggle('step__social-hidden')
    });

    const anchors = document.querySelectorAll(".menu__link");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href")
        const elem = document.querySelector(id)

        window.scroll({
            top: elem.offsetTop - 80,
            behavior:'smooth'
        });
    });
});