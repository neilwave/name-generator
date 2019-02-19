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
            let midN = first[randomIndex];
            return midN;
        }
        if (name === last) {
            let randomIndex = Math.floor(Math.random() * last.length);
            let lastN = first[randomIndex];
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
    // fooMid.innerHTML = `<h2>${midN}</h2>`;
} // end of button Action


// buttonActionRev = () => {
//     document.getElementsByClassName('card-output').style.visibility = 'hidden';
// }
// Name lists
const first = ['blues', 'sugar', 'pepp', 'small', 'big', 'handsome', 'thin'];
const middle = ['Regular', 'Guitar', 'String', 'Stumpy', 'drumroll'];
const last = ['sue', 'joe', 'bird', 'dan', 'dog', 'eagle', 'cat'];