function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummery = function(){
    return `${this.title} written by ${this.author} in ${this.year} `
}
let book1 = new Book('atomic habit', 'ansari danish', 2002);
// console.log(book1.getSummery());


function Magazine(title,author, year, month){
    Book.call(this, title,author,year);
    this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);

let mag1 = new Magazine('Bloomberg','tony', '2005', 'June');

Magazine.prototype.constructor = Magazine;
console.log(mag1);
console.log(mag1.getSummery());