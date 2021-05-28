function getRadioVal(form, name) {      // f-ja ivertinimo balo (zvaigzduciu) reiksmei gauti
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

class Book {
  constructor (title, author, totalPages, readPages, rating) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.readPages = readPages;
    this.rating = rating;
    this.leftPages = leftPages;
  }
}

var table = document.getElementById("the-table");

var form = document.getElementById("form");

form.onsubmit = function(){

    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    totalPages = document.getElementById("totalPages").value;
    readPages = document.getElementById("readPages").value;
    rating = getRadioVal(document.getElementById('form'), 'stars');
    leftPages = totalPages-readPages;

    bookObj = new Book(title, author, totalPages, readPages, rating);

    var row = document.getElementById("the-table").insertRow();

    var cell1 = row.insertCell();
    cell1.innerHTML = bookObj.title;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = bookObj.author;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = bookObj.leftPages;

    var cell4 = row.insertCell(3);
    cell4.innerHTML = bookObj.rating;

    var button1 = document.createElement("button");

    button1.classList.add("btn");
    button1.innerHTML='<i class="fa fa-trash"></i>';
    cell4.appendChild(button1);

    form.reset();
    console.warn('added', {bookObj});
}
//
//  button1.addEventListener("click", removeFunction); // FUNKCIJA ISTRINTI EILUTIE (NEVEIKIA)
// removeFunction.preventDefault();
//  function removeFunction() {
//    row.remove(0);
//  }

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
});
