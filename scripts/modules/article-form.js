export const initArticleForm = () => {
  const aticleFormBtn = document.querySelector("#create-article-btn");
  const form = document.querySelector("#article-form");
  const closeBtn = document.querySelector("#cancel-button");

  aticleFormBtn.onclick = () => {
    form.classList.remove("form-hide");
    form.scrollIntoView({ block: "center" });
  };

  closeBtn.onclick = () => {
    form.classList.add("form-hide");
    form.reset();
  };
};
