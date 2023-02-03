const addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click',add)

function add(e){
    const currentBtn = e.currentTarget;
    const currentIn = currentBtn.previousElementSibling;
    const cuttentchapter = currentIn.value

    // console.log(currentIn.value)

     const newlist = document.createElement('list')
    //  newlist.classList.add('list-group-item')
    newlist.className = "list-group-item d-flex justify-content-center"
     newlist.innerHTML = `<h3 class="flex-grow-1">${cuttentchapter}</h3>
     <button class="btn btn-warning mx-3">edit</button>
     <button class="btn btn-danger mx-1">remove</button>`

     const parentlist = document.getElementById('parentlist')
     parentlist.appendChild(newlist)

    }