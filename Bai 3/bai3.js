var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

function query(input) {
    return document.querySelector(input);
}

function appendList(list, data) {
    let listNode = document.createElement("li");
    let textNode = document.createTextNode(data);
    listNode.appendChild(textNode);
    list.appendChild(listNode);
}

function displayData() {
    const list = query('#list');
    library.forEach(book => {
        const data = `Here is the book : ${book.title} 
        and the author ${book.author} 
        which is ${(book.readingStatus) ? 'reading': 'not reading'}`;
        appendList(list, data);
    })
}
displayData();