'use strict';

/**
 * Основи роботи з DOM (2)
 * @author Miroslav
 */

/**
 * localStorage
 */

// const settings = {
//     backgroundColor: '#fff',
//     color: '#111',
//     theme: 'light'
// };
//
// localStorage.setItem('settings', JSON.stringify(settings));
//
// console.log(localStorage.getItem('settings'));

/**
 * sessionStorage
 */

// const settings2 = {
//     backgroundColor: '#fff',
//     color: '#111',
//     theme: 'light'
// };
//
// sessionStorage.setItem('settings2', JSON.stringify(settings));
//
// console.log(sessionStorage.getItem('settings2'));

/**
 * Кастомні атрибути
 */

// let elem = document.querySelector('body');
// console.log(elem.dataset);

/**
 * Основні властивості
 */

// let textElement = document.querySelector('p.text');
// textElement.hidden = true;

// let divElement = document.querySelector('div');
// divElement.innerHTML = '<section>Новий чудовий елемент</section>';

// console.log(divElement.nodeValue);

// elem.textContent = 'Щось нове';

/**
 * Події
 * приклад 1
 */

// let redBtn = document.querySelector('.redBtn');
// let counter = localStorage.getItem('counterLevel') || 0;
// let hatredLevel = document.querySelector('.hatredLevelCounter');
// hatredLevel.textContent = counter + '👿';
//
// function updateAndShowCounterLevel(event) {
// 	counter++;
//     console.log(`Current counter level: ${counter}`);
//     console.log(`It is not high enough! 👿`);
//     localStorage.setItem('counterLevel', counter);
//     hatredLevel.textContent = counter+'👿';
// }
//
// redBtn.addEventListener('click', updateAndShowCounterLevel);

/**
 * Події
 * приклад 2
 */

// let link = document.querySelector('a');

// link.addEventListener('click',function(event) {
//     console.log('clicked');
//     console.log(event);
//     event.preventDefault();
// });

// let redBtn = document.querySelector('.redBtn');

// redBtn.addEventListener('click', function(event) {
//     console.log(`It is not high enough! 👿`);
//     // event.stopPropagation();
// });

// document.body.addEventListener('click',function(event) {
//     console.log('The body was clicked!');
//     console.log(`It is not high enough! 👿`);
// });

/**
 * dispatchEvent
 */

// let btn = document.querySelector('.redBtn');
//
// btn.addEventListener('click', function (event) {
//     console.log('Mouse Clicked');
//     console.log('event is Trusted -->', event.isTrusted);
// });
//
// let clickEvent = new Event('click');
// btn.dispatchEvent(clickEvent);

/**
 * Кастомні події
 */

function highlight(elem) {
    const bgColor = 'blue';
    elem.style.backgroundColor = bgColor;

    let event = new CustomEvent('highlight', { // create the event
        detail: {
            backgroundColor: bgColor
        }
    });
    elem.dispatchEvent(event); // dispatch the event
}

let redBtn = document.querySelector('.redBtn'); // Select the button element

// Add border style
function addBorder(elem) {
    elem.style.border = "solid 1px red";
}

redBtn.addEventListener('highlight', function (e) { // Listen to the highlight event
    addBorder(this);

    console.log(e.detail); // examine the background
});

highlight(redBtn); // highlight redBtn element
