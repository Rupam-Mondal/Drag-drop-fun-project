let maxz = 1;


class Paper{
    holdpaper = false;
    premouseX = 0;
    premouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currPaperX = 0;
    currPaperY = 0;


    init(paper){
        paper.addEventListener('mousedown' , (e) => {
            this.holdpaper = true;

            paper.style.zIndex = maxz;
            maxz = maxz + 1;

            if(e.button == 0){
                this.premouseX = this.mouseX;
                this.premouseY = this.mouseY;

                console.log(this.premouseX);
                console.log(this.premouseY);
            }
        })

        document.addEventListener('mousemove' , (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;


            this.velocityX = this.mouseX - this.premouseX;
            this.velocityY = this.mouseY - this.premouseY;

            if(this.holdpaper == true){
                this.currPaperX = this.currPaperX + this.velocityX;
                this.currPaperY = this.currPaperY + this.velocityY;


                this.premouseX = this.mouseX;
                this.premouseY = this.mouseY;

                paper.style.transform = `translateX(${this.currPaperX}px) translateY(${this.currPaperY}px)`;
            }
        })

        window.addEventListener('mouseup' , (e) => {
            this.holdpaper = false;
        })
    }
}

const papers = Array.from(document.querySelectorAll('.paper'))

papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
})