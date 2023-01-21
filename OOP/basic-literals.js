const book1 = {
    title:'Rich Dad Por Dad',
    author: 'Robert Kwosaki',
    year:'2003',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
const book2 = {
    title: 'Psycology of money',
    author: 'Morgan Housel',
    year: '2022',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
// console.log(book1.getSummary());
// console.log(book2.getSummary())

