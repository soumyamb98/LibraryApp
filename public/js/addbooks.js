let titlebooks = document.getElementById("titlebooks");
let authorbook = document.getElementById("authorbook");
let genrebook = document.getElementById("genrebook");
let imagebook = document.getElementById("imagebook");
function validate() {
    if (titlebooks.value == "" || authorbook.value == "" || genrebook.value == "" || imagebook.value == "") {
        alert("fields cant be empty");
        return false;
    } else {
        return true;
    }
}
