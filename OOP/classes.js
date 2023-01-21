class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} written by ${this.author} in ${this.year}` 
    }
    getAge(){
        const currentAge = new Date().getFullYear() - this.year;
        return `"${this.title}" is ${currentAge}years old`
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }
}
let book1 = new Book('who will come when i die','Ansari Danish', '2003') ;
console.log(book1.getSummary());
console.log(book1.getAge())
book1.revise(1999)
console.log(book1.year);