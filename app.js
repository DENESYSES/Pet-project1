const col = document.querySelectorAll('.column')

document.addEventListener('keydown', event => {
    event.preventDefault()
    if (event.code === 'Space') {
        randomColors()
    }
   
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type
    if (type === 'lock') {
        const node = 
            event.target.tagName.toLowerCase () === 'i'
            ? event.target
            : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }   else if (type === 'copy') {
        copyColor(event.target.textContent)
    }

    

})


function generateRandomColor() {
    const hexCods = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCods[Math.floor(Math.random() * hexCods.length)]  
    }
    return '#' + color

}

function copyColor(text) {
    return navigator.clipboard.writeText(text)
}



function randomColors(){
    col.forEach((column) => {
        const locked = column.querySelector('i').classList.contains('fa-lock')
        const text = column.querySelector('h2')
        const but = column.querySelector('button')
        const color = generateRandomColor()

        if (locked){
            return
        }

        text.textContent = color
        column.style.background = color

        textColor(text, color)
        textColor(but, color)
    })
}

function textColor(text, color) {
    const lum = chroma(color).luminance()
    text.style.color = lum > 0.5 ? 'black' : 'white'
}
randomColors()
