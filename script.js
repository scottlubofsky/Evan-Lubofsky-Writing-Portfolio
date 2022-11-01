let writer = "    Writer";
let heading = document.getElementById("sub-heading");
let i = 0, howManyTimes = writer.length;
function makeSubheading() {

    if (heading.innerHTML == "    Writer") {
        return;
    }

    heading.innerHTML += `${writer[i]}`;
    i++;

    if (i < howManyTimes) {
        setTimeout(makeSubheading, 250);
    }

}

