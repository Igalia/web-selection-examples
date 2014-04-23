function select(fromId, toId) {
    var from = document.getElementById(fromId);
    var to = document.getElementById(toId);

    var selection = getSelection();
    selection.collapse(from, 0);
    selection.extend(to, 1);

    console.log("Selection: " + selection);
}
