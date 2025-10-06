const card = document.createElement("div");
card.setAttribute("id", "card");

const title = document.createElement("h2");
title.textContent = "Gandalf";

const link = document.createElement("a");
link.setAttribute("href", "#");
link.textContent = "Go to profile";

card.append(title, link);

document.body.append(card);
