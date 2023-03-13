// const divA = document.createElement("div");
// const span = document.createElement("span");
// const img = document.createElement("img");
// const para = document.createElement("p");
// divA.id = "page";
// divA.className = "data";
// divA.style = "color: red";
// divA.innerText = "This is a paragraph A";
// document.body.appendChild(divA);



//  const div = document.querySelector("#page");
//  div.hasAttribute("data-number"); //true (atributo data-number existe) 
//  div.hasAttributes(); //true (tiene 3 atributos)
//  div.getAttributeNames(); //Retorna un array
//  div.getAttribute("id"); //retorna el atributo "page" de id
//  div.removeAttribute("id"); // remueve los atributos class=""
//  div.setAttribute("id","page"); //vuelve a configurar id="page"



// const fragment = document.createDocumentFragment();
// for (let i = 0; i < 10; i++){

//     const div = document.createElement("div");
//     div.textContent = `Item nùmero ${i}`;
//     fragment.appendChild(div);
// }
// document.body.appendChild(fragment);


// const divF = document.querySelector(".divF");
// divF.textContent = "Hola a todos los campers";
// divF.textContent;


const div01 = document.querySelector(".info");
// div01.innerHTML = "<strong> Importante </strong>";
// div01.textContent = "<strong> Importante </strong>";
const data = document.querySelector(".info");
data.innerHTML = "<h1>Tema 1</h1>"
data.outerHTML;
