function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];

    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}

let books = [];
let addInfo=(ev)=>{
  ev.preventDefault();

  let book = {
title : document.getElementById("title").value,
author : document.getElementById("author").value,
totalPages : document.getElementById("totalPages").value,
readPages : document.getElementById("readPages").value,
rating: getRadioVal(document.getElementById('form'), 'stars'),
lefPages : (document.getElementById("totalPages").value)-(document.getElementById("readPages").value)
}
books.push(book);
document.querySelector('form').reset();
console.warn('added', {books});
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addInfo)
});

books.forEach((item) => {
    let p = document.createElement('p');
    p.innerText = item;
    document.querySelector('#list').appendChild(p);
});
