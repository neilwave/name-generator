// main javascript
// XMLHttp Request GET
// helper function for XMLHttpRequest
const renderResponse = (res) => {
    // Handles if res is falsey
    if (!res) {
        alert(res.status);
    }
    if (!res.length) {
        alert("Try again! There were no suggestions found!");
        return;
    }
    // first Name
    let a = Math.floor(Math.random() * res.length);
    wordList = (res[a].word);
    document.getElementById('genfirst').innerHTML = `<h2>${wordList}</h2>`;
    // second Name
    let b = Math.floor(Math.random() * res.length);
    wordList = (res[b].word);
    document.getElementById('genmid').innerHTML = `<h2>${wordList}</h2>`;
    // third Name
    let c = Math.floor(Math.random() * res.length);
    wordList = (res[c].word);
    document.getElementById('genlast').innerHTML = `<h2>${wordList}</h2>`;
} 

// random list for api query ! a separate generator is needed here !
const ranList = ['beach', 'mountain', 'soup', 'beer', 'tree', 'bike', 'hair', 'blue', 'guitar', 'string', 'weather', 'drum', 'sue', 'joe', 'bird', 'dog', 'eagle', 'cat'];
let randomMyIndex = Math.floor(Math.random() * ranList.length);
let ranIndie = ranList[randomMyIndex];


// AJAX function
const xhr = new XMLHttpRequest();
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';

const getNames = () => {
    const endpoint = `${url}${queryParams}${ranIndie}`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response)
        }
    };
    xhr.open('GET', endpoint);
    xhr.send();
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
            transform: 'scale(1, -1)',
            // opacity: 1.8,
            // offset: 0.3
        },
        {
            transform: 'scale(1, 1)',
            // opacity: 0.6,
            // offset: 0.6
        },
        {
            transform: 'scale(1, -1)',
            // opacity: 0.7,
            // offset: 1
        }
    ], {
            duration: 60,
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
            transform: 'scale(1, -1)',
            // opacity: 1.8,
            // offset: 0.3
        },
        {
            transform: 'scale(1, 1)',
            // opacity: 0.6,
            // offset: 0.6
        },
        {
            transform: 'scale(1, -1)',
            // opacity: 0.7,
            // offset: 1
        }
    ], {
            duration: 60,
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
            transform: 'scale(1, -1)',
            // opacity: 1.8,
            // offset: 0.3
        },
        {
            transform: 'scale(1, 1)',
            // opacity: 0.6,
            // offset: 0.6
        },
        {
            transform: 'scale(1, -1)',
            // opacity: 0.7,
            // offset: 1
        }
    ], {
            duration: 60,
            easing: 'ease-in-out',
            delay: 10,
            iterations: 30,
            direction: 'alternate',
            fill: 'both'
        });
}
// color shaker version 1.1 object, colShaker function
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
    document.getElementById('wrap').style.background = `linear-gradient(to bottom left, rgb(${shaker.r_three},${shaker.g_three},${shaker.b_three}),rgb(${shaker.r_two},${shaker.g_two},${shaker.b_two}) )`;
}
// function click button
async function asyncFunc() {
    let anime = await anim();
    let nameGet = await getNames(anime);
    let colors = await colShaker(nameGet);
    console.log(colors);
}
buttonAction = () => {
    // // animation function, slot machine
    // anim();
    // // generate names with genNames through myFunc
    // getNames();
    // // generate a rgb color for each color
    // colShaker();
    asyncFunc();
} // end of button Action

