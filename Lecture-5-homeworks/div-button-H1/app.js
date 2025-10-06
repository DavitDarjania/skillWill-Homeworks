const someDiv = document.createElement("div");
someDiv.setAttribute("id", "unique_div");
someDiv.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem cumque alias, nulla minus harum? Placeat officiis amet, vel neque voluptas reiciendis, blanditiis cupiditate quos minima quae consectetur nulla id.";

const someBtn = document.createElement("button");
someBtn.setAttribute("id", "unique_btn");
someBtn.textContent = "Vanish Text";
someBtn.style.marginTop = "20px";

document.body.append(someDiv, someBtn);

someBtn.addEventListener("click", () => {
  someDiv.style.display = "none";
});
