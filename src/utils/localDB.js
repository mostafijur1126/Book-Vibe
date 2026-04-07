

const getAllReadlistFormLocalDB = () => {
    const allReadList = localStorage.getItem("readList");
    if(allReadList) return JSON.parse(allReadList);
    return [];
}


const addReadlistFormLocalDB = (book) => {
    const allBooks = getAllReadlistFormLocalDB();
    const isAlreadyExsist = allBooks.find(bk => bk.bookId === book.bookId);
    if(!isAlreadyExsist){
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks))
    }
}

export{getAllReadlistFormLocalDB, addReadlistFormLocalDB};