const sortbleList = document.querySelector('.sortble-list');
const items = document.querySelectorAll('.item');

const addlisners = (even)=>{
items.forEach(item => {
    item.addEventListener(`${even}start`,()=>{
        setTimeout(()=> item.classList.add("dragging"),0);
    })
    item.addEventListener(`${even}end`,()=> item.classList.remove("dragging"))
})
}
addlisners('touch');
addlisners('drag');


const initSortableList = (e)=>{
    e.preventDefault();
    const draggingItem = sortbleList.querySelector(".dragging");
    const siblings = [...sortbleList.querySelectorAll(".item:not(.dragging)")];
    let nextSibling;
    if(e.type === 'touchmove'){
         nextSibling = siblings.find(sibling =>{
            return e.changedTouches[0].pageY <= sibling.offsetTop + sibling.offsetHeight / 2;
        })
        //  let tope = e.target.offsetTop;
        // draggingItem.style.top = `${Math.abs(Math.floor((e.changedTouches[0].pageY) - tope))}px`;
        // console.log(Math.abs(Math.floor((e.changedTouches[0].pageY) - tope)));
        // console.log(e.target.offsetTop);
    }else{
         nextSibling = siblings.find(sibling =>{
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        })
    }
   
    sortbleList.insertBefore(draggingItem, nextSibling);
}

sortbleList.addEventListener("touchmove",initSortableList);
sortbleList.addEventListener("dragover",initSortableList);
sortbleList.addEventListener("dragenter",e => e.preventDefault());