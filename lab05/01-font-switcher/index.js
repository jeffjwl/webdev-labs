let scale = 0;

const makeBigger = () => {
   scale += .1
   document.querySelector("h1").style.fontSize = `${2 + scale}em`;
   document.querySelector(".content").style.fontSize = `${1.4 + scale}em`;
};

const makeSmaller = () => {
   scale -= .1
   document.querySelector("h1").style.fontSize = `${2 + scale}em`;
   document.querySelector(".content").style.fontSize = `${1.4 + scale}em`;
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

