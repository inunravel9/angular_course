export const initArticleForm = () => {
  const btn = document.querySelector("#create-article-btn");
  const form = document.querySelector("#article-form");
  const close = document.querySelector("#cancel-button");
  const stub = document.querySelector("#zaglushka")
  const grid = document.querySelector(".articles-grid");

  btn.onclick = () => {
    form.classList.remove("form-hide");
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  close.onclick = () => {
    form.classList.add("form-hide");
    form.reset();
  };

  form.onsubmit = (event) => {
    event.preventDefault(); //отказ от перезагрузки страницы

    const grid = document.querySelector(".articles-grid");
    const temp = document.querySelector("#article-template");
    const newArticle = temp.content
      .cloneNode(true)
      .querySelector(".blog-article");
    stub.remove("#zaglushka");
    newArticle.classList.add("article-new");
    newArticle.querySelector("h3").textContent = "Новая запись";
    const time = newArticle.querySelector("time");
    time.textContent = new Date().toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    time.setAttribute("datetime", new Date().toISOString().split("T")[0]);

    grid.append(newArticle);
    setTimeout(() => {
      newArticle.classList.add("article-show");
    }, 10);
    form.classList.add("form-hide");
    setTimeout(() => {
      form.reset(); //чистим данные, когда форму уже не видно
    }, 1100);
  };
};
