export function kata() {
  const destinations = [
    {
      title: "Trip Planning for Total Beginners",
      category: "travel",
      image: "https://picsum.photos/id/28/800/300",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet reprehenderit nesciunt repellendus dolorem ipsa eaque repudiandae odit aperiam est assumenda, impedit alias doloremque temporibus eligendi neque, qui quas esse."
    },
    {
      title: "7 ways to survive in the desert",
      category: "travel",
      image: "https://picsum.photos/id/35/800/300",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet reprehenderit nesciunt repellendus dolorem ipsa eaque repudiandae odit aperiam est assumenda, impedit alias doloremque temporibus eligendi neque, qui quas esse."
    },
    {
      title: "5 amazing travel destinations",
      category: "travel",
      image: "https://picsum.photos/id/37/800/300",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet reprehenderit nesciunt repellendus dolorem ipsa eaque repudiandae odit aperiam est assumenda, impedit alias doloremque temporibus eligendi neque, qui quas esse."
    }
  ]

  document.body.innerHTML = renderMain(destinations.map(renderArticle).join("\n"));
}

function renderMain(articles) {
  return `<main>${articles}</main>`;
}

function renderArticle({image, category, title, content}) {
  return `<article>
            <img src="${image}">
            <div class="content">
                ${(renderContent(category, title, content))}
            </div>
        </article>`;
}

function renderContent(category, title, content) {
  return `<p class="category">${category}</p>
          <h2>${title}</h2>
          <p>${content}</p>`;
}
