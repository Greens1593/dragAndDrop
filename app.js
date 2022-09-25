const item = document.querySelector('.item')
const placeholderes = document.querySelectorAll('.placeholder')


const drugstart = (e) => {
    e.target.classList.add('hold');
    setTimeout(()=> e.target.classList.add('hide'), 0)    
}
const drugend =(e) => {
    e.target.className = 'item';
}



const dragover = (e) => {
    e.preventDefault()
}
const dragenter = (e) => {
    e.target.classList.add('hover')
}
const dragleave = (e) => {
    e.target.classList.remove('hover')
}
const dragdrop = (e) => {
    e.target.classList.remove('hover')
    e.target.append(item)
}



for(placeholder of placeholderes){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}


item.addEventListener('dragstart', drugstart)
item.addEventListener('dragend', drugend)

