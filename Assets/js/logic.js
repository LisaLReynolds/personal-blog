//declare values
const userName = document.getElementById("#user-name");
const blogTitle = document.getElementById("#blog-title");
const blogContent = document.getElementById("#blog-content");

//add event listener for submit button
document
  .getElementById("submitButton")
  .addEventlistener("click", function (event) {
    event.preventDefault(); //prevent default form submission
    //create object
    //username: declared value
    //title: declared value
    //content: declared value
    const userInput = {
      userName: userName.value,
      blogTitle: blogTitle.value,
      blogContent: blogContent.value,
    };

    //store object in local storage as JSON stringify
    //save as array, push to array new entries
    localStorage.setItem("userInput", JSON.stringify(userInput));

    redirectToNewPage();
  });
//event listener for submit button redirect to new page and store object
//reset values??
function redirectToNewPage() {
  window.location.href = "blog.html";
}
//In blog.js
//second page
//call function to get from storage object
//parse JSON
//render info
//loop for all stored objects
