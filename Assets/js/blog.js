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

      const blogTitle = document.createElement("h2");
      blogTitle.textContent = entry.blogTitle;

      const blogContent = document.createElement("p");
      blogContent.textContent = entry.blogContent;

      const userName = document.createElement("h3");
      userName.textContent = "Posted by: " + entry.userName;

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        // Remove the entry div when the delete button is clicked
        entryDiv.remove();
        // Update the local storage with the modified data
        localStorage.setItem("entries", JSON.stringify(entries));
      });

      // Append elements to the entry div
      entryDiv.appendChild(blogTitle);
      entryDiv.appendChild(blogContent);
      entryDiv.appendChild(userName);
      entryDiv.appendChild(deleteButton);
      // Append the entry div to the document body
      const blogEntries = document.getElementById("blog-entries");
      blogEntries.appendChild(entryDiv);
    });
  }
});

function goBack() {
  window.location.href = "./index.html";
}
