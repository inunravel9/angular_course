const dialogOpenBtn = document.querySelector("#show-stats-btn");
const dialog = document.querySelector("#stats-dialog");
const dialogCloseBtn = document.querySelector("#close-stats");

dialogOpenBtn.onclick = () => {
  dialog.showModal();
};

dialogCloseBtn.onclick = () => {
  dialog.close();
};
