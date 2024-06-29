// ----- Varianta 1 - manuala ------
// const input = document.querySelector('.keyboard-input');
// const tastaA = document.querySelector(".tasta-a");
// const tastaB = document.querySelector(".tasta-b");

// const insereazaTastaA = () => {
//     input.value = input.value + 'A';
// };

// tastaA.addEventListener("click", insereazaTastaA);

// const insereazaTastaB = () => {
//     input.value = input.value + 'B';
// };

// tastaB.addEventListener("click", insereazaTastaB);

// ----- Varianta 2 - automata ------
const input = document.querySelector('.keyboard-input');
const taste = document.querySelectorAll('.tasta');

const buttonReset = document.querySelector(".reset-button");

const buttonBackspace = document.querySelector(".backspace-button");

console.log(taste);

taste.forEach((tasta) => {
    const insereazaTasta = (e) => {
        const continutulButonului = e.srcElement.innerText;

        input.value = input.value + continutulButonului;
    }

    tasta.addEventListener("click", insereazaTasta);
});


//               Buton reset

const resetButtonAlfabet = () => {
    input.value="";

}

buttonReset.addEventListener("click",resetButtonAlfabet);


//                Backspace button

const buttonBackspaceToOne = () => {

}

buttonBackspace.addEventListener("click",buttonBackspaceToOne);


/* tema

de pus imagine de fundal
butoanele de celtrat max with 1200 px
un buton de sters

*/
