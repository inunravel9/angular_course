const dialogOpenBtn = document.querySelector("#show-stats-btn");
const dialog = document.querySelector("#stats-dialog");
const dialogCloseBtn = document.querySelector("#close-stats");
const articleSection = document.querySelectorAll(".blog-article");
const articleCountSpan = document.querySelector("#article-count");

dialogOpenBtn.onclick = () => {
  dialog.showModal();
};

dialogCloseBtn.onclick = () => {
  dialog.close();
};

articleCountSpan.textContent=articleSection.length;
