// const coding = ["js", "ruby", "java", "pythoon", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
    
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) =>  {
//     return num > 4
// })

// console.log(newNums);

// const newNums= []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genere: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genere: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genere: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genere: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genere: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genere: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genere: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genere: 'Science', publish: 2011, edition: 2016},  
];

let userBooks = books.filter((bk) => bk.genere === 'History')

// userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genere === "History"
// })

userBooks = books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genere === "Science"
})

console.log(userBooks);




