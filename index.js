const nested = document.querySelectorAll(".drop");

for (let li of nested) {
  li.addEventListener("mouseenter", handleMouseEnter);
  li.addEventListener("mouseleave", handleMouseLeave);
}

function changeColor(e, color) {
  let svg = e.target.children[1];
  let path = svg.children[0];

  path.style.stroke = color;
}

function handleMouseEnter(e) {
  changeColor(e, "black");
}

function handleMouseLeave(e) {
  changeColor(e, "#696969");
}
