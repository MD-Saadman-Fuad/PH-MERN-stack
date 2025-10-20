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

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishList');
    if(storedWishlist){
        const storedWishlistData = JSON.parse(storedWishlist);
        return storedWishlistData;
    } else {
        return [];
    }
}

const addToWishlistDB = (id) => {
    const storedWishlistData = getStoredWishlist();
    if(!storedWishlistData.includes(id)){
        storedWishlistData.push(id);
        localStorage.setItem('wishList', JSON.stringify(storedWishlistData));
    } else {
        alert('You have already added this book to wishlist');
    }
}

export { addToStoreDB, getStoredBook, addToWishlistDB, getStoredWishlist };