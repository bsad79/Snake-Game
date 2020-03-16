const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){
    snake = new Snake();
    apple = new Apple();
    apple.pickLocation(snake);
    document.querySelector('.score').innerText = "Score: " + snake.total;

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        apple.draw();
        snake.update();
        snake.checkCollision(apple);
        snake.draw();

        if(snake.eat(apple)){
            apple.pickLocation(snake);
        }
    }, 100);
}());

window.addEventListener("keydown", ((e) => {
    const direction = e.key.replace("Arrow", "");
    snake.changeDirection(direction);
}));