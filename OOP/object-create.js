const bookProto = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        let year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old`;
    } 
};

const book1 = Object.create(bookProto);
book1.title = 'do what u love what u do';
book1.author = 'Chetan bhagat';
book1.year = '1999'; 

console.log(book1);