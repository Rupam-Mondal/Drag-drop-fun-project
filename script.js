class Paper{
    init(paper){
        paper.addEventListener('mousedown' , (e) => {
            console.log("Selected");
        })

        document.addEventListener('mousemove' , (e) => {
            console.log("Mouse is moving");
        })

        window.addEventListener('mouseup' , (e) => {
            console.log("realeased");
        })
    }
}

const papers = Array.from(document.querySelectorAll('.paper'))

papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
})