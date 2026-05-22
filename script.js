// REVEAL ANIMATION

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add('active');

        }

    });

});

// TYPING EFFECT

const textArray = [

    "AI Claim Processing...",

    "Smart Fraud Detection...",

    "Instant Policy Recommendation...",

    "24/7 AI Insurance Assistant..."

];

let typingElement = document.getElementById('typing');

let textIndex = 0;

let charIndex = 0;

function typeEffect(){

    if(charIndex < textArray[textIndex].length){

        typingElement.innerHTML += textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,70);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.innerHTML = textArray[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,40);

    }

    else{

        textIndex++;

        if(textIndex >= textArray.length){

            textIndex = 0;

        }

        setTimeout(typeEffect,400);

    }

}

typeEffect();

// COUNTER

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,25);

        }

        else{

            if(target === 10000){

                counter.innerText = '10K+';

            }

            else if(target === 99){

                counter.innerText = '99%';

            }

            else{

                counter.innerText = target;

            }

        }

    }

    updateCounter();

});

// PROGRESS BAR

window.addEventListener('scroll',()=>{

    const scrollTop = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / height) * 100;

    document.querySelector('.progress-bar').style.width = scrollPercent + '%';

});

// CHATBOT TOGGLE

const aiFloat = document.querySelector('.ai-float');

const chatbot = document.querySelector('.chatbot-container');

const closeChat = document.getElementById('close-chat');

aiFloat.addEventListener('click',()=>{

    if(chatbot.style.display === 'block'){

        chatbot.style.display = 'none';

    }

    else{

        chatbot.style.display = 'block';

    }

});

closeChat.addEventListener('click',()=>{

    chatbot.style.display = 'none';

});