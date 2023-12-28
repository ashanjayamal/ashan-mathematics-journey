window.onload = function() {
    var definitions = document.getElementsByClassName('definition');
    for (var i = 0; i < definitions.length; i++) {
        definitions[i].getElementsByClassName('def-number')[0].innerText = i + 1;
    }
    var theorems = document.getElementsByClassName('theorem');
    for (var i = 0; i < theorems.length; i++) {
        theorems[i].getElementsByClassName('thm-number')[0].innerText = definitions.length + i + 1;
    }
}
