const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  let position = 0;

  isJumping = true;

  //setInterval define intervalos
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      });
    } else {
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  cactus.classList.add('cactus');
  cactus.style.left = cactusPosition + 'px';
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {

    if (cactusPosition < -60){
      clearInterval(leftInterval);
      background.removeChild(cactus);//esse tratamento evita processamento desne
      //cessario
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';//aqui seria o lugar ideal para al
      //mentar a dificuldade do jogo
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);

