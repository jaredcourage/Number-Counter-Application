let countEl = document.getElementById('count-el');
console.log(countEl);




let save1 = document.getElementById('save-1');
console.log(save1);

let entryEl = document.getElementById('entry-el');
console.log(entryEl);


let increaseEl = document.getElementById('increase-el');
console.log(increaseEl);

let count = 0




function increment() {
    console.log('button was clicked');
     count += 1
     countEl.textContent = count
}



function save() {
    console.log('button was clicked');
    let add =  " - " + count
    entryEl.textContent += add
    countEl.textContent = 0
    
}









