const fontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

fontSize.addEventListener("input", fontSizeControle);

function fontSizeControle(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}