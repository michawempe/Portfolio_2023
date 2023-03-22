var projectButtonBox = document.querySelector("#projectsContainer");

var imageSections = document.querySelector("#projectPopUpLeft");
var textSections = document.querySelector("#projectPopUpRight");

var thumbnailImage = document.querySelector("#thumbnailImage");

var projectBoxContainer = document.querySelector("#projectBoxContainer");

var projectPopUpContainer = document.querySelector("#projectPopUpContainer");

var currIndex = 0;
var hoverIndex = 0;
var oldHoverIndex = 0;

var projectArrows = document.querySelector("#projectArrows");

const bodyChildren = document.body.children;

document.addEventListener("click", function (event) {
  if (projectButtonBox.contains(event.target)) {
    if (event.target.classList.contains("projectBox")) {
      eventTarget = event.target;
    } else {
      eventTarget = event.target.closest("div");
    }
    const index = Array.prototype.slice.call(projectBoxContainer.children).indexOf(eventTarget);
    display(index);
  }
});

function display(index) {
  projectPopUpContainer.classList.remove("closed");
  projectArrows.classList.remove("closed");
  imageSections.children[index].classList.remove("closed");
  textSections.children[index].classList.remove("closed");
  currIndex = index;

  for (let i = 0; i < bodyChildren.length; i++) {
    const childElement = bodyChildren[i];

    if (childElement.id === "projectPopUpContainer" || childElement.id === "nav" || childElement.id === "projectArrows") {
      continue;
    }
    childElement.style.opacity = 0.1;
  }
}

function closePopUp() {
  projectPopUpContainer.classList.add("closed");
  projectArrows.classList.add("closed");
  imageSections.children[currIndex].classList.add("closed");
  textSections.children[currIndex].classList.add("closed");

  for (let i = 0; i < bodyChildren.length; i++) {
    const childElement = bodyChildren[i];

    if (childElement.id === "projectPopUpContainer" || childElement.id === "nav" || childElement.id === "projectArrows") {
      continue;
    }
    childElement.style.opacity = 1;
  }
}

function nextProject() {
  if (currIndex < 6) {
    imageSections.children[currIndex].classList.add("closed");
    textSections.children[currIndex].classList.add("closed");
    currIndex++;
    imageSections.children[currIndex].classList.remove("closed");
    textSections.children[currIndex].classList.remove("closed");
  }
}

function lastProject() {
  if (currIndex > 0) {
    imageSections.children[currIndex].classList.add("closed");
    textSections.children[currIndex].classList.add("closed");
    currIndex--;
    imageSections.children[currIndex].classList.remove("closed");
    textSections.children[currIndex].classList.remove("closed");
  }
}

// Hovereffekt

var hoverImageElement = thumbnailImage.children[hoverIndex];

document.addEventListener("pointermove", function (event) {
  hoverImageElement = thumbnailImage.children[hoverIndex];
  hoverImageElement.style.top = event.y + "px";
  hoverImageElement.style.left = event.x + "px";
});

document.addEventListener("mouseover", function (event) {
  if (projectButtonBox.contains(event.target) && event.target.classList.contains("projectBox")) {
    if (event.target.classList.contains("projectBox")) {
      eventTarget = event.target;
    } else {
      eventTarget = event.target.closest("div");
    }
    oldHoverIndex = hoverIndex;
    hoverIndex = Array.prototype.slice.call(projectBoxContainer.children).indexOf(eventTarget);
    if (oldHoverIndex == hoverIndex) {
      hoverImageElement.style.display = "block";
      console.log("block");
    } else {
      thumbnailImage.children[oldHoverIndex].style.display = "none";
      console.log("none");
    }
    oldHoverIndex = hoverIndex;
    
  }
  if (!projectButtonBox.contains(event.target)) {
    hoverImageElement.style.display = "none";
  }
});


