const getStoredBook = () => {
    const storedBook = localStorage.getItem('readList');
    if(storedBook){
        const storedBookData = JSON.parse(storedBook);
        return storedBookData;

}
else{
        return [];
    }
}

const addToStoreDB = (id) => {
    const storedBookData = getStoredBook();
    if(!storedBookData.includes(id)){
        storedBookData.push(id);
        console.log(storedBookData);
        localStorage.setItem('readList', JSON.stringify(storedBookData));
    }else{
        alert('You have already added this book');
    }
}

export { addToStoreDB, getStoredBook };