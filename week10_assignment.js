let id = 0;

document.getElementById('add').addEventListener('click',( =>{
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML =document.getElementById('new-request').ariaValueMax;
    row.insertCel(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate}
}))
