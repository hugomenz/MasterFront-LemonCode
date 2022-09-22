function isBookRead(books: {title: string, isRead: boolean }[], titleToSearch: string) {
    const filteredBook: { title: string, isRead: boolean }[] = books.filter(book => book.title == titleToSearch);

    if (filteredBook.length != 0 ){
        return filteredBook[0].isRead
    } else{
        return false;
    }
}

const books: { title: string, isRead: boolean }[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false