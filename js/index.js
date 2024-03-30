document.addEventListener("DOMContentLoaded", () => {
  console.log("Our js is linked to the html");

  const header = document.querySelector("h1");

  const paragraph = document.getElementById("my-paragraph");
  paragraph.innerText = "New text";

  console.log(paragraph);

  const headings = document.getElementsByClassName("heading");

  console.log(headings);

  const paragraphs = document.getElementsByClassName('para1')

  console.log(paragraphs);
});

// console.log("Our js is linked to the html");

// const header = document.querySelector("h1");

// const paragraph = document.getElementById("my-paragraph");
// paragraph.innerText = "New text";

// console.log(paragraph);

// const headings = document.getElementsByClassName("heading");

// console.log(headings);
