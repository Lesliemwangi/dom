document.addEventListener("DOMContentLoaded", () => {
  console.log("Our js is linked to the html");

  const header = document.querySelector("h1");

  // Selecting a couple of tags
  // Returns a collection of elements (in short array)
  const h1Tags = document.getElementsByTagName("h1");

  /**
   * The point of using backticks when using innerHTML is that
   * we might need to dynamicallt inject values
   */
  h1Tags[1].inn = "Clarisse";
  h1Tags[1].innerHTML = `
   <span style="color: blueviolet;">This is an inner HTML </span>`;
  // `<span style="color: blueviolet;">Todays date is ${new Date().toDateString()} </span>`;
  // // console.log(h1Tags[1]);

  const paragraph = document.getElementById("my-paragraph");
  // paragraph.innerText = "New text";

  // console.log(paragraph);
  // Select paragreph using query selector
  const sameParagraph = document.quertSelector("#my-paragraph");

  sameParagraph.innerHTML = "Some new text";

  console.log(sameParagraph);

  const headings = document.getElementsByClassName("heading");

  console.log(headings);

  const paragraphs = document.getElementsByClassName("para1");

  console.log(paragraphs);


  // 1. Select the element to append thr new HTML
  const div = document.querySelector('dom-manipulation')
  // 2. use innerHTML to append the new html content
  // div.innerHTML = `
  // <a href='https://en.wikipedia.org/wiki/Ada_Lovelace' target="_blank"> Ada Lovelace </a>
  // <p class = "title">A new paragraph </p>
  // `;

  const link = document.createElement('a')
  link.innerTEXT = 'Ada Lovelace'
  link.href = "https://en.wikipedia.org/wiki/Ada_Lovelace";
  link.target = `_blank`
  link.className = 'title'
  link.style.color = 'red'

  const newParagraph = document.createElement
  div.append(link)
});

// console.log("Our js is linked to the html");

// const header = document.querySelector("h1");

// const paragraph = document.getElementById("my-paragraph");
// paragraph.innerText = "New text";

// console.log(paragraph);

// const headings = document.getElementsByClassName("heading");

// console.log(headings);
