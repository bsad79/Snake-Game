function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.actualDirection = "right";
    this.total = 0;
    this.tail = [];

    this.draw = function(){
        ctx.fillStyle = "#15ff00";
        for (let i = 0; i < this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.checkCollision = function(apple){
        for(let i = 0; i < this.tail.length; i++){
            if(snake.x == this.tail[i].x && snake.y == this.tail[i].y){
                this.death(apple);
            }
        }
        if(this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0){
            this.death(apple);
        }
    }

    this.eat = function(apple){
        if(snake.x == apple.x && snake.y == apple.y){
            this.total ++;
            document.querySelector('.score').innerText = "Score: " + snake.total;
            return true;
        }
        return false;
    }

    this.death = function(apple){
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.total = 0;
        document.querySelector('.score').innerText = "Score: " + snake.total;
        this.tail = [];
        apple.pickLocation();
        this.actualDirection = "right";
    }

    this.update = function(apple){
        for (let i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    this.changeDirection = function(direction){
        switch (direction) {
            case "Up":
                if(this.actualDirection == "down"){
                    break;
                }
                this.ySpeed = scale * -1;
                this.xSpeed = 0;
                this.actualDirection = "up";
                break;
            case "Down":
                if(this.actualDirection == "up"){
                    break;
                }
                this.ySpeed = scale * 1;
                this.xSpeed = 0;
                this.actualDirection = "down";
                break;
            case "Left":
                if(this.actualDirection == "right"){
                    break;
                }
                this.xSpeed = scale * -1;
                this.ySpeed = 0;
                this.actualDirection = "left";
                break;
            case "Right":
                if(this.actualDirection == "left"){
                    break;
                }
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                this.actualDirection = "right";
                break;
        }
    }
}