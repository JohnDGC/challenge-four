const unreadMessages = document.querySelector(".unread");
// const unreadMessages = document.getElementsByClassName(".unread");
const markAllRead = document.querySelector("#mark_all_read");
const notifications = document.querySelector('.notifications__index');

unreadMessages.addEventListener('click', readMessage);
markAllRead.addEventListener('click', markAll);


function readMessage() {

  unreadMessages.classList.remove("unread");

}

function markAll() {
  unreadMessages.classList.remove("unread");
  notifications.innerText = "0";
}