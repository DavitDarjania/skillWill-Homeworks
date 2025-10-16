const mainContainer = document.querySelector(".main_container");
async function fetchData(callback) {
  try {
    const fetch_data = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (!fetch_data.ok) {
      throw new Error("Incorrect Url");
    }
    const actual_data = await fetch_data.json();
    callback(actual_data);
  } catch (error) {
    console.log(error.message);
  }
}
fetchData((data) => {
  data.forEach(({ title, body }) => {
    const post = document.createElement("article");
    post.classList.add("post");
    const postTitle = document.createElement("h4");
    postTitle.classList.add("post_title");
    postTitle.textContent = title;
    const postBody = document.createElement("p");
    postBody.classList.add("post_body");
    postBody.textContent = body;
    post.append(postTitle, postBody);
    mainContainer.appendChild(post);
  });
});
