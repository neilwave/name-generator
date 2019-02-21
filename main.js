// main javascript

buttonAction = () => {
    // document.getElementsByClassName('card-output').style.visibility = 'visible';

    // function - generate random name
    genNames = (name) => {

        if (name === first) {
            let randomIndex = Math.floor(Math.random() * first.length);
            let firstN = first[randomIndex];
            return firstN;
        }
        if (name === middle) {
            let randomIndex = Math.floor(Math.random() * middle.length);
            let midN = middle[randomIndex];
            return midN;
        }
        if (name === last) {
            let randomIndex = Math.floor(Math.random() * last.length);
            let lastN = last[randomIndex];
            return lastN;
        };

    } // genNames
    // call function and generate random name
    const firstN = genNames(first);
    const midN = genNames(middle);
    const lastN = genNames(last);
    // reveal generated names    
    document.getElementById('genfirst').innerHTML = `<h2>${firstN}</h2>`;
    document.getElementById('genmid').innerHTML = `<h2>${midN}</h2>`;
    document.getElementById('genlast').innerHTML = `<h2>${lastN}</h2>`;

    // function - RGB color shaker
    const randomRGB = [];
    myHex = () => {
        for (let i = 0; i < 3; i++) {
            let x = Math.floor(Math.random()* 255);
            let y =+ x;    
            randomRGB.push(y);                
            }
        return randomRGB   
    }
   myHex();
    // variable to take the string for RGB colors
    let rgb = randomRGB.join(','); 

    // set the RGB colors to the background
    document.getElementById('genfirst').style.background = `rgb(${rgb})`;
    document.getElementById('genmid').style.background = `rgb(${rgb})`;
    document.getElementById('genlast').style.background = `rgb(${rgb})`;





} // end of button Action

// buttonActionRev = () => {
//     document.getElementsByClassName('card-output').style.visibility = 'hidden';
// }
// Name lists
const first = ['blues', 'sugar', 'pepp', 'small', 'big', 'handsome', 'thin'];
const middle = ['Regular', 'Guitar', 'String', 'Stumpy', 'drumroll'];
const last = ['sue', 'joe', 'bird', 'dan', 'dog', 'eagle', 'cat'];

// Animations
    'use strict';
    function init() {
        let animation = document.getElementById('ani').animate([
            {
                transform: 'scale(1, 1.5)',
                opacity: 1,
                // offset: 0
            },
            {
                transform: 'scale(1, 0.5)',
                opacity: 0.8,
                // offset: 0.3
            },
            {
                transform: 'scale(1, 1)',
                opacity: 0.6,
                // offset: 0.6
            },
            {
                transform: 'scale(1, 0.5)',
                opacity: 0.7,
                // offset: 1
            }
        ],{
            duration: 100,
            easing: 'ease-in-out',
            delay: 10,
            iterations: 50,
            direction: 'alternate',
            fill: 'both'
        });
    }
    document.addEventListener('DOMContentLoaded', init);