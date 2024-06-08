//declare values
const userName = document.getElementById("user-name");
const blogTitle = document.getElementById("blog-title");
const blogContent = document.getElementById("blog-content");
const submitButton = document.getElementById("submit-button");

//add event listener for submit button

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); //prevent default form submission
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  //create object
  //username: declared value
  //title: declared value
  //content: declared value
  const userInput = {
    userName: userName.value,
    blogTitle: blogTitle.value,
    blogContent: blogContent.value,
  };

  entries.push(userInput);
  //store object in local storage as JSON stringify
  //save as array, push to array new entries
  localStorage.setItem("entries", JSON.stringify(entries));

  redirectToNewPage();
});
//event listener for submit button redirect to new page and store object

function redirectToNewPage() {
  window.location.href = "./blog.html";
}
