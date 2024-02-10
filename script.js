class paper{
    init(paper){
        
    }
}

const papers = Array.from(document.querySelectorAll('.paper'))

papers.forEach(paper => {
    const p = new paper();
    p.init(paper);
})