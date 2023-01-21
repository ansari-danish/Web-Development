
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummery = function(){
        return `${this.title} written by ${this.author} on ${this.year}`
    }
}
const book1 = new Book('bookone', 'peter their', 2003);
const book2 = new Book('wings of fire', 'apj abdul kalam', 2005);

// console.log(book2);
console.log(book2.getSummery());