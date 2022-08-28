const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //Accessing the user input:
    // 1. Access value from event object
    // console.log(event.target.children[1].value)
    //2. Access input value directly
    const inputValue = document.querySelector("input#searchByID");
    // console.log(inputValue.value);

    fetch(`http://localhost:3000/movies/${inputValue.value}`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
