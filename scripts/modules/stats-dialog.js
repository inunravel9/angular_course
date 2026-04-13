export const initStatsDialog = () => {
  const dialogOpenBtn = document.querySelector("#show-stats-btn");
  const dialog = document.querySelector("#stats-dialog");
  const dialogCloseBtn = document.querySelector("#close-stats");
  const articleCountSpan = document.querySelector("#article-count");

  const updateStats = () => {
    const articles = document.querySelectorAll(".blog-article");
    if (articleCountSpan) {
      articleCountSpan.textContent = articles.length;
    }
  };

  dialogOpenBtn.onclick = () => {
    updateStats();
    dialog.showModal();
  };

  dialogCloseBtn.onclick = () => {
    dialog.close();
  };

  dialog.onclick = (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  };
};