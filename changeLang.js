// Sprache ändern

function changeLanguage(siteName, language) {

  document.querySelector("#languageButton").innerHTML = language;
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.documentElement.innerHTML = this.responseText;
    }
  };
  //xhttp.open("GET", siteName + language + ".html", true);
  window.open(siteName + language + ".html", "_self");
  //xhttp.send();
}
