export const initArticleForm = () => {
  const createArticleBtn = document.querySelector("#create-article-btn");
  const articleForm = document.querySelector("#article-form");
  const closeArticleBtn = document.querySelector("#cancel-button");
  const blank = document.querySelector("#zaglushka");
  const grid = document.querySelector(".articles-grid");
  const templateArticle = document.querySelector("#article-template");

  let articlesArray = JSON.parse(localStorage.getItem("articles")) || [];

  const toggleLoader = (isLoading) => {
    const loader = document.querySelector(".loader");
    const allButtons = document.querySelectorAll("button");

    if (isLoading) {
      loader.classList.remove("hide");
      if (articlesArray.length > 0) {
        grid.classList.add("grid-loading");
      }
      blank.classList.add("hide");
      allButtons.forEach((btn) => (btn.disabled = true));
    } else {
      loader.classList.add("hide");
      grid.classList.remove("grid-loading");

      if (articlesArray.length > 0) {
        grid.classList.remove("hide");
        blank.classList.add("hide");
      } else {
        grid.classList.add("hide");
        blank.classList.remove("hide");
      }

      allButtons.forEach((btn) => (btn.disabled = false));
    }
  };

  const renderArticles = (title, text, date, isFirst) => {
    if (blank) blank.classList.add("hide");

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

  toggleLoader(true);
  setTimeout(() => {
    if (articlesArray.length > 0) {
      articlesArray.forEach((item, index) => {
        renderArticles(item.title, item.text, item.date, index === 0);
      });
    }
    toggleLoader(false);
  }, 1000);

  grid.onclick = (event) => {
    const deleteBtn = event.target.closest(".delete-btn");
    if (deleteBtn) {
      const article = deleteBtn.closest(".blog-article");
      if (article) {
        const titleToDelete = article.querySelector("h3").textContent;
        article.classList.remove("article-show");

        setTimeout(() => {
          toggleLoader(true);

          setTimeout(() => {
            article.remove();
            articlesArray = articlesArray.filter(
              (item) => item.title !== titleToDelete,
            );
            localStorage.setItem("articles", JSON.stringify(articlesArray));

            if (articlesArray.length === 0) {
              location.reload();
            } else {
              toggleLoader(false);
            }
          }, 400);
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
    event.preventDefault();

    const submitBtn = articleForm.querySelector("button[type='submit']");
    submitBtn.disabled = true;

    const titleValue = articleForm.querySelector("#article-title").value;
    const textValue = articleForm.querySelector("#article-textarea").value;
    const isFirst = articlesArray.length === 0;
    const articleTimeString = new Date().toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    setTimeout(() => {
      articlesArray.push({
        title: titleValue,
        text: textValue,
        date: articleTimeString,
      });
      localStorage.setItem("articles", JSON.stringify(articlesArray));

      renderArticles(titleValue, textValue, articleTimeString, isFirst);

      toggleLoader(false);

      articleForm.classList.add("form-hide");
      setTimeout(() => {
        articleForm.reset();
        submitBtn.disabled = false;
      }, 1100);
    }, 500);
  };
};
