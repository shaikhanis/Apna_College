const addbtn = document.getElementById('addbtn')
const parentlist = document.getElementById('parentlist')
addbtn.addEventListener('click',add)

function add(e){
    if(parentlist.children[0].className == "emptymasege"){
        parentlist.children[0].remove()
    }
    const currentBtn = e.currentTarget;
    const currentIn = currentBtn.previousElementSibling;
    const cuttentchapter = currentIn.value

    // console.log(currentIn.value)

     const newlist = document.createElement('list')
    //  newlist.classList.add('list-group-item')
    newlist.className = "list-group-item d-flex justify-content-center"
     newlist.innerHTML = `<h3 class="flex-grow-1">${cuttentchapter}</h3>
     <button class="btn btn-warning mx-3" onclick="editChapter(this)">edit</button>
     <button class="btn btn-danger mx-1" onclick="removeChapter(this)">remove</button>`

     parentlist.appendChild(newlist)

    }

    function removeChapter(element){
        element.parentElement.remove()
     const parentlist = document.getElementById('parentlist')
         if(parentlist.children.length<=0){
            let newmasege = document.createElement('h3')
            newmasege.classList.add('emptymasege')
            newmasege.textContent="Nothing is here please add something you whant"
            parentlist.appendChild(newmasege)
         }
    }

    function editChapter(element){
        if(element.textContent == "Done"){
            element.textContent = "edit"
            const currentchaptername = element.previousElementSibling.value
            const editheading = document.createElement('h3');
            editheading.className = "flex-grow-1"
            editheading.textContent = currentchaptername
            element.parentElement.replaceChild(editheading, element.previousElementSibling)
        }else{
        element.textContent = "Done"
        const currentchaptername = element.previousElementSibling.textContent
        const editInput = document.createElement('input');
        editInput.type ="text"
        editInput.placeholder = "Chapter Name"
        editInput.className = "form-control"
        editInput.value = currentchaptername;

        element.parentElement.replaceChild(editInput, element.previousElementSibling)
        }
    }