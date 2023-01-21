
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummery = function(){
    return `${this.title} written by ${this.author} on ${this.year}`
}
Book.prototype.getAge = function(){
    const year = new Date().getFullYear() - this.year;
    return `${this.title} is ${year}years old`;
}
Book.prototype.revise = function(newYears){
    this.year = newYears;
    this.revised = true; 
}
const book1 = new Book('bookone', 'peter their', 2003);
const book2 = new Book('wings of fire', 'apj abdul kalam', 1999);

// console.log(book2);
console.log(book2.getSummery());
console.log(book2.getAge());
book2.revise('2020');
console.log(book2)