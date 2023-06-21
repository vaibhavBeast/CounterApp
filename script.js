const countValue = document.getElementById('counter');

function increment(){
    let count = parseInt(countValue.innerText);
    count++;
    countValue.innerText = count;
}

function decrement(){
    let count = parseInt(countValue.innerText);
    count--;
    countValue.innerText = count;
}



