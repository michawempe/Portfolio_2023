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
  console.log(imageSections.children[index]);
  imageSections.children[index].classList.remove("closed");
  textSections.children[index].classList.remove("closed");
  currIndex = index;

  for (let i = 0; i < bodyChildren.length; i++) {
    const childElement = bodyChildren[i];

    if (childElement.id === "projectPopUpContainer" || childElement.id === "projectArrows") {
      continue;
    }
    childElement.style.opacity = 0.1;
    childElement.style.pointerEvents = "none";
  }
}

function closePopUp() {
  projectPopUpContainer.classList.add("closed");
  projectArrows.classList.add("closed");
  imageSections.children[currIndex].classList.add("closed");
  textSections.children[currIndex].classList.add("closed");

  for (let i = 0; i < bodyChildren.length; i++) {
    const childElement = bodyChildren[i];

    if (childElement.id === "projectPopUpContainer" || childElement.id === "projectArrows") {
      continue;
    }
    childElement.style.opacity = 1;
    childElement.style.pointerEvents = "auto";
  }
}

function nextProject() {
  if (currIndex < 5) {
    imageSections.children[currIndex].classList.add("closed");
    textSections.children[currIndex].classList.add("closed");
    currIndex++;
    imageSections.children[currIndex].classList.remove("closed");
    textSections.children[currIndex].classList.remove("closed");
  }
  else {
    currIndex = 5;
    imageSections.children[currIndex].classList.add("closed");
    textSections.children[currIndex].classList.add("closed");
    currIndex = 0;
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

  else {
    currIndex = 0;
    imageSections.children[currIndex].classList.add("closed");
    textSections.children[currIndex].classList.add("closed");
    currIndex = 5;
    imageSections.children[currIndex].classList.remove("closed");
    textSections.children[currIndex].classList.remove("closed");
  }
}

// Hovereffekt

document.addEventListener("mouseover", function (event) {
  if (projectButtonBox.contains(event.target)) {
    thumbnailImage.style.display = "block";
    if (event.target.classList.contains("projectBox")) {
      eventTarget = event.target;
    } else {
      eventTarget = event.target.closest("div");
    }
    hoverIndex = Array.prototype.slice.call(projectBoxContainer.children).indexOf(eventTarget);
  } else {
    thumbnailImage.style.display = "none";
  }

  updateActiveChild();
});

document.addEventListener("pointermove", function (event) {
  thumbnailImage.style.top = event.y + "px";
  thumbnailImage.style.left = event.x + "px";
});

const children = thumbnailImage.querySelectorAll(".thumbImage");

function updateActiveChild() {
  children.forEach(function (child) {
    child.classList.remove("active");
  });

  const child = thumbnailImage.children[hoverIndex];

  if (child) {
    child.classList.add("active");
  }
}