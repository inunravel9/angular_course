export const initArticleForm = () => {
  const createArticleBtn = document.querySelector("#create-article-btn");
  const articleForm = document.querySelector("#article-form");
  const closeArticleBtn = document.querySelector("#cancel-button");
  const blank = document.querySelector("#zaglushka");
  const grid = document.querySelector(".articles-grid");
  const templateArticle = document.querySelector("#article-template");

  const savedArticlesData = localStorage.getItem("articles");
  let articlesArray = savedArticlesData ? JSON.parse(savedArticlesData) : [];

grid.onclick = (event) => {
    const deleteBtn = event.target.closest(".delete-btn");
    if (deleteBtn) {
      const article = deleteBtn.closest(".blog-article");
      if (article) {
        // 1. Находим заголовок статьи, которую хотим удалить
        const titleToDelete = article.querySelector("h3").textContent;

        article.classList.remove("article-show");
        
        setTimeout(() => {
          article.remove();
          let articlesArray = JSON.parse(localStorage.getItem("articles")) || [];
          articlesArray = articlesArray.filter(item => item.title !== titleToDelete);
          localStorage.setItem("articles", JSON.stringify(articlesArray));
          if (articlesArray.length === 0) {
             location.reload(); 
          }
        }, 300);
      }
    }
  };
  articlesArray.forEach((item, index) => {
    if (blank) blank.remove();

    const newArticle = templateArticle.content
      .cloneNode(true)
      .querySelector(".blog-article");
    const contentContainer = newArticle.querySelector(".article-content");

    newArticle.querySelector("h3").textContent = item.title;

    if (index === 0) {
      const description = document.createElement("p");
      description.textContent = item.text;
      contentContainer.append(description);
    }

    const articleTime = newArticle.querySelector("time");
    articleTime.textContent = item.date;

    grid.append(newArticle);

    setTimeout(() => {
      newArticle.classList.add("article-show");
    }, 10);
  });

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
    const newArticle = templateArticle.content
      .cloneNode(true)
      .querySelector(".blog-article");
    const contentContainer = newArticle.querySelector(".article-content");

    newArticle.classList.add("article-new");
    newArticle.querySelector("h3").textContent = titleValue; //тайтл

    const countCurrentArticles = grid.querySelectorAll(".blog-article").length; //считаем все
    if (countCurrentArticles === 0) {
      // берем самый первый
      const description = document.createElement("p");
      description.textContent = textValue; //описание для первого
      contentContainer.append(description);
    }

    const articleTimeString = new Date().toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const articleTime = newArticle.querySelector("time");
    articleTime.textContent = articleTimeString; //дата для статьи
    articleTime.setAttribute(
      "datetime",
      new Date().toISOString().split("T")[0],
    );
    articlesArray = JSON.parse(localStorage.getItem("articles")) || [];
    const newArticleObj = {
      //создаем объект для локасторадж
      title: titleValue,
      text: textValue,
      date: articleTimeString,
    };

    articlesArray.push(newArticleObj);
    localStorage.setItem("articles", JSON.stringify(articlesArray));

    grid.append(newArticle);
    setTimeout(() => {
      newArticle.classList.add("article-show");
    }, 10);
    articleForm.classList.add("form-hide");
    setTimeout(() => {
      articleForm.reset(); //чистим данные, когда форму уже не видно
    }, 1100);
  };
};
