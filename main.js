// main javascript
// Name lists
const first = ['blues', 'sugar', 'pepp', 'small', 'big', 'handsome', 'thin'];
const middle = ['Regular', 'Guitar', 'String', 'Stumpy', 'Drumroll'];
const last = ['sue', 'joe', 'bird', 'dan', 'dog', 'eagle', 'cat'];

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

} // end of genNames 
myFunc = () => {
    // genNames function, generate random name, save to variable
    const firstN = genNames(first);
    const midN = genNames(middle);
    const lastN = genNames(last);
    // reveal generated names    
    document.getElementById('genfirst').innerHTML = `<h2>${firstN}</h2>`;
    document.getElementById('genmid').innerHTML = `<h2>${midN}</h2>`;
    document.getElementById('genlast').innerHTML = `<h2>${lastN}</h2>`;
}
// Animations
'use strict';
anim = () => {
    document.getElementById('anim-first').animate([
        {
            transform: 'scale(1, 1)',
            // opacity: 1.0,

        },
        {
            transform: 'scale(1, 0.0)',
            // opacity: 1.8,
            // offset: 0.3
        },
        {
            transform: 'scale(1, 1)',
            // opacity: 0.6,
            // offset: 0.6
        },
        {
            transform: 'scale(1, 0)',
            // opacity: 0.7,
            // offset: 1
        }
    ], {
            duration: 55,
            easing: 'ease-in-out',
            delay: 10,
            iterations: 10,
            direction: 'alternate',
            fill: 'both'
        });
    document.getElementById('anim-sec').animate([
        {
            transform: 'scale(1, 1)',
            // opacity: 1.0,

        },
        {
            transform: 'scale(1, 0.0)',
            // opacity: 1.8,
            // offset: 0.3
        },
        {
            transform: 'scale(1, 1)',
            // opacity: 0.6,
            // offset: 0.6
        },
        {
            transform: 'scale(1, 0)',
            // opacity: 0.7,
            // offset: 1
        }
    ], {
            duration: 55,
            easing: 'ease-in-out',
            delay: 10,
            iterations: 20,
            direction: 'alternate',
            fill: 'both'
        });
    document.getElementById('anim-third').animate([
        {
            transform: 'scale(1, 1)',
            // opacity: 1.0,

        },
        {
            transform: 'scale(1, 0.0)',
            // opacity: 1.8,
            // offset: 0.3
        },
        {
            transform: 'scale(1, 1)',
            // opacity: 0.6,
            // offset: 0.6
        },
        {
            transform: 'scale(1, 0)',
            // opacity: 0.7,
            // offset: 1
        }
    ], {
            duration: 55,
            easing: 'ease-in-out',
            delay: 10,
            iterations: 30,
            direction: 'alternate',
            fill: 'both'
        });
}
// color shaker version 1.1 Object, colShaker function
const shaker = {
    r_one: '',
    g_one: '',
    b_one: '',
    r_two: '',
    g_two: '',
    b_two: '',
    r_three: '',
    g_three: '',
    b_three: '',
};
colShaker = () => {
    Object.keys(shaker).forEach(color => {
        shaker[color] = Math.floor(Math.random() * 255);
    });
    document.getElementById('genfirst').style.background = `rgb(${shaker.r_one},${shaker.g_one},${shaker.b_one})`;
    document.getElementById('genmid').style.background = `rgb(${shaker.r_two},${shaker.g_two},${shaker.b_two})`;
    document.getElementById('genlast').style.background = `rgb(${shaker.r_three},${shaker.g_three},${shaker.b_three})`;
}
// function click button
buttonAction = () => {
    // animation function, slot machine
    anim();
    // generate names with genNames through myFunc
    myFunc();
    // generate a rgb color for each color
    colShaker();
} // end of button Action



