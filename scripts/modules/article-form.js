export const initArticleForm = () => {
  const createArticleBtn = document.querySelector("#create-article-btn");
  const articleForm = document.querySelector("#article-form");
  const closeArticleBtn = document.querySelector("#cancel-button");
  const blank = document.querySelector("#zaglushka");
  const grid = document.querySelector(".articles-grid");
  const templateArticle = document.querySelector("#article-template");
  let articlesArray = JSON.parse(localStorage.getItem("articles")) || [];

  const renderArticles = (title, text, date, isFirst) => {
    if (blank) blank.remove();

    const newArticle = templateArticle.content
      .cloneNode(true)
      .querySelector(".blog-article");
    const contentContainer = newArticle.querySelector(".article-content");

    newArticle.querySelector("h3").textContent = title;
    newArticle.querySelector("time").textContent = date;

    if (isFirst) {
      const description = document.createElement("p");
      description.textContent = text;
      contentContainer.append(description);
    }
    grid.append(newArticle);

    setTimeout(() => {
      newArticle.classList.add("article-show");
    }, 10);
  };

  articlesArray.forEach((item, index) => {
    renderArticles(item.title, item.text, item.date, index === 0);
  });

  grid.onclick = (event) => {
    const deleteBtn = event.target.closest(".delete-btn");
    if (deleteBtn) {
      const article = deleteBtn.closest(".blog-article");
      if (article) {
        const titleToDelete = article.querySelector("h3").textContent;

        article.classList.remove("article-show");

        setTimeout(() => {
          article.remove();
          let articlesArray =
            JSON.parse(localStorage.getItem("articles")) || [];
          articlesArray = articlesArray.filter(
            (item) => item.title !== titleToDelete,
          );
          localStorage.setItem("articles", JSON.stringify(articlesArray));
          if (articlesArray.length === 0) {
            location.reload();
          }
        }, 300);
      }
    }
  };

  createArticleBtn.onclick = () => {
    articleForm.classList.remove("form-hide");
    articleForm.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  closeArticleBtn.onclick = () => {
    articleForm.classList.add("form-hide");
    articleForm.reset();
  };

  articleForm.onsubmit = (event) => {
    event.preventDefault(); //отказ от перезагрузки страницы
    if (blank) blank.remove(); //убираем заглушку, если она есть

    const titleValue = articleForm.querySelector("#article-title").value;
    const textValue = articleForm.querySelector("#article-textarea").value;
    const isFirst = grid.querySelectorAll(".blog-article").length === 0;
    const articleTimeString = new Date().toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    renderArticles(titleValue, textValue, articleTimeString, isFirst);


    articlesArray.push({title:titleValue, text:textValue, date:articleTimeString})
    localStorage.setItem("articles", JSON.stringify(articlesArray));

    articleForm.classList.add("form-hide");
    setTimeout(() => {
      articleForm.reset(); //чистим данные, когда форму уже не видно
    }, 1100);
  };
};
