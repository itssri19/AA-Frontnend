// script.js

console.log("JavaScript is working!");

const heading = document.getElementById("heading");

heading.addEventListener("mouseover", function() {
  heading.style.color = "blue";
});

heading.addEventListener("mouseout", function() {
  heading.style.color = "black";
});

const ipoList = document.getElementById("ipo-list");
const ipoDescription = document.getElementById("ipo-description");

ipoList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    const ipoName = event.target.textContent;
    ipoDescription.textContent = `You selected ${ipoName}. Here are its details...`;
  }
});