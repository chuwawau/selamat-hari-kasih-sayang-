const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YIPPEEEE!!!!";
  gif.src =
    "https://media4.giphy.com/media/EOuHX9jbmwz01RBQj2/giphy.gif?cid=6c09b9524u3sdlplnhg4or8vbzcnghpmys6k2vkk2tcb9vzq&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
