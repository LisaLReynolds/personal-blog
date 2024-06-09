//call function to get from storage object

//render info
//loop for all stored objects
document.addEventListener("DOMContentLoaded", function () {
  const storedData = localStorage.getItem("entries");

  //parse JSON
  if (storedData) {
    const entries = JSON.parse(storedData);

    // Loop through each entry in the array and display the content
    entries.forEach(function (entry) {
      // Create elements to display the content
      const entryDiv = document.createElement("div");
      entryDiv.classList.add("entry");

      const userName = document.createElement("h3");
      userName.textContent = "Posted by: " + entry.userName;

      const blogTitle = document.createElement("h2");
      blogTitle.textContent = entry.blogTitle;

      const blogContent = document.createElement("p");
      blogContent.textContent = entry.blogContent;

      // Append elements to the entry div
      entryDiv.appendChild(userName);
      entryDiv.appendChild(blogTitle);
      entryDiv.appendChild(blogContent);

      // Append the entry div to the document body
      const blogEntries = document.getElementById("blog-entries");
      blogEntries.appendChild(entryDiv);
    });
  }
});

function goBack() {
  window.location.href = "./index.html";
}
