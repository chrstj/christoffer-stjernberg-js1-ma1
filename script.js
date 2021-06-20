const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}
cat.complain();


// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated subheading";


// Question 3

heading.style.fontSize = "2em"


// Question 4

heading.classList.add("subheading");


// Question 5

const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}
// Lowercase "p" did not work with querySelectorAll for me. Got the message: Cannot set property 'color'
// Both lowercase and uppercase worked on JSFiddle however. 


// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7

function listName (list) {
    for (let i = 0; i < list.length; i++) {
        console.log(cats[i].name);
}
}

listName(cats);


// Question 8

function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++) {

        html += `<div class="cat-container">
        <h5>${cats[i].name}</h5>
        <p>${cats[i].age}</p>
    </div>`;
    }
    return html;
}

const newHTML = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;

