const getTheTitles = function (books) {
    let bookTitles = books.map(book => book.title)
    return bookTitles;
};

getTheTitles([
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
])

// Do not edit below this line
module.exports = getTheTitles;
