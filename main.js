copyList = document.querySelectorAll(".copy")
copyList.forEach(
    (copy) => copy.addEventListener("click", function (event) {
        test = event

        var tempElem = document.createElement('textarea');
        tempElem.value = event.srcElement.innerText;
        document.body.appendChild(tempElem);

        tempElem.select();
        document.execCommand("copy");
        document.body.removeChild(tempElem);
    })
)
