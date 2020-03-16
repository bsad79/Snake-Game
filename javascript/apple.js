function Apple(){
    this.x;
    this.y;

    this.pickLocation = function(snake){
        this.x = (Math.floor(Math.random() * rows - 1) +1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) +1) * scale;
        if(snake !== undefined){
            for(let i = 0; i < snake.tail.length; i++){
                if(this.x == snake.tail[i].x && this.y == snake.tail[i].y){
                    this.retry(snake);
                }
            }
            if(this.x == snake.x && this.y == snake.y){
                this.retry(snake);
            }
        } 
    }

    this.retry = function(snake){
        this.pickLocation(snake);
    }

    this.draw = function(){
        ctx.fillStyle = "#df0707";
        ctx.fillRect(this.x, this.y, scale, scale);;
    }

    this.update = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0){
            this.x = 15;
            this.y = 15;
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
        }
    }
}