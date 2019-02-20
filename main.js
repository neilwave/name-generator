// main javascript
buttonAction = () => {
    // document.getElementsByClassName('card-output').style.visibility = 'visible';

    // generate random Names
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

    // color shaker - ! muss noch richtige hex Zahlen auswerfen = 35b16c
    myHex = () => {
    let randomHex = [];
    for (let i = 0; i < 6; i++) {
        randomHex.push(color[i]);
        console.log(randomHex);
    }
    // let randomHex = Math.floor((Math.random() * 256) + 100 );
    return randomHex;
    }
    const myNewHex = myHex();
    console.log(myNewHex);
    // document.getElementsByClassName('co-1').style.backgrpound = `#${myNewHex}`;    
} // end of button Action


// buttonActionRev = () => {
//     document.getElementsByClassName('card-output').style.visibility = 'hidden';
// }
// Name lists
const first = ['blues', 'sugar', 'pepp', 'small', 'big', 'handsome', 'thin'];
const middle = ['Regular', 'Guitar', 'String', 'Stumpy', 'drumroll'];
const last = ['sue', 'joe', 'bird', 'dan', 'dog', 'eagle', 'cat'];
const color = ['0','1','2','3','4','5','6','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];