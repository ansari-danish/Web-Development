class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} written by ${this.author} in ${this.year}` 
    } 
}

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
} 
const mag1 = new Magazine('forbes','reported','1992','June');
console.log(mag1.getSummary());