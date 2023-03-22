
var projectButtonBox = document.querySelector('#projectsContainer');

var imageSections = document.querySelector('#projectPopUpLeft');
var textSections = document.querySelector('#projectPopUpRight');


document.addEventListener('click', function (event) {
    if (projectButtonBox.contains(event.target)) {
        if (event.target.classList.contains('projectBox')) {
            //var className = event.target.id.toString() + "Section"
            var className = "aaarea" + "Section"
            console.log(className);
            document.querySelector("#projectPopUpContainer").classList.remove("closed");
            document.getElementsByClassName("aaareaSection").classList.toggle("closed");
        } else {
            //event.target.closest('div').id;
        }
    } else {
        console.log('clicked outside');
    }
});