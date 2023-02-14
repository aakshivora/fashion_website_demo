let namasteButton = document.querySelector('button');
namasteButton.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt("Enter Name of the student");
    namasteButton.textContent = 'Roll No. 1:' + name;
}