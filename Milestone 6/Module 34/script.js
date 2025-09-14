console.log("Connected to script.js");

// let loadingCount = 0;

const loadTrees = () => {
    loadingSpinner(true);
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => {
            displayAllTrees(data.plants);
            loadingSpinner(false);
        })
        .catch(error => {
            console.error('Error loading trees:', error);
            loadingSpinner(false);
        });
}

const loadCategories = () => {
    loadingSpinner(true);
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => {
            displayAllCategories(data.categories);
            loadingSpinner(false);
        })
        .catch(error => {
            console.error('Error loading categories:', error);
            loadingSpinner(false);
        });
}

const displayByCategory = (id) => {
    loadingSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => {
            removeActive();
            addActive(id);
            displayAllTrees(data.plants);
            loadingSpinner(false);
        })
        .catch(error => {
            console.error('Error loading category:', error);
            loadingSpinner(false);
        });
}

displayAllTrees = (trees) => {
    const treeContainer = document.getElementById('tree-container');
    treeContainer.innerHTML = '';

    if (trees.length === 0) {
        treeContainer.innerHTML = '<p class="text-center col-span-3">No trees found in this category.</p>';
        return;
    }

    for(const tree of trees) {
        const treeCard = document.createElement('div');
        treeCard.innerHTML = `
            <div class="bg-white rounded-lg p-4 shadow text-left flex flex-col">
                <div class="bg-gray-200 h-32 rounded mb-4"><img src="${tree.image}" alt="${tree.name}" class="w-full h-full object-cover rounded"></div>
                <h3 onclick="showTreeDetails(${tree.id})" class="font-bold">${tree.name}</h3>
                <p class="text-sm mb-2">${tree.description}</p>
                <div class="flex items-center justify-between">
                    <span class="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-xl text-xs mb-2">${tree.category}</span>
                    <span class="font-bold ">৳${tree.price}</span>
                </div>
                <div class="flex items-center justify-between mt-auto">
                    <button onclick="addToCart(${tree.id})" class="btn btn-success bg-green-800 btn-sm rounded-full w-full text-white">Add to Cart</button>
                </div>
            </div>
        `;
        treeContainer.appendChild(treeCard);
    }
}

displayAllCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';
    categoryContainer.innerHTML = `<button onclick="loadTrees();removeActive(); addActive(0);" id="category-id-all" class="tree-category flex items-left w-full text-left font-semibold hover:bg-green-500 active rounded-lg p-2 pl-2">All Trees</button>`;
    
    for (const category of categories) {
        const categoryItem = document.createElement('div');
        categoryItem.innerHTML = `<button onclick="displayByCategory(${category.id})" id="category-id-${category.id}" class="tree-category font-md flex items-left w-full text-left font-semibold text-lg hover:bg-green-500 rounded-lg p-2 pl-2">${category.category_name}</button>`;
        categoryContainer.appendChild(categoryItem);
    }
}

const removeActive = () => {
    const allBtn = document.querySelectorAll('.tree-category');
    allBtn.forEach(btn => btn.classList.remove('active'));
}

const addActive = (id) => {
    if(id === 0){
        const selectedBtn = document.getElementById('category-id-all');
        selectedBtn.classList.add('active');
        return;
    }
    const selectedBtn = document.getElementById(`category-id-${id}`);
    selectedBtn.classList.add('active');
}

const addToCart = (id) => {
    
    const cartContainer = document.getElementById('cart-container');
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(data => {
            totalCost(data.plants.price);
            const categoryItem = document.createElement('div');
            categoryItem.setAttribute('data-id', data.plants.id);
            categoryItem.className = "bg-[#F0FDF4] space-y-2 text-gray-500 flex items-center justify-between mb-2 text-left p-2 rounded w-full gap-6";
            categoryItem.innerHTML = `
                <div class="m-3 space-y-2">
                    <h1 class="font-bold text-md text-black">${data.plants.name}</h1>
                    <p>${data.plants.price} x 1</p>
                </div>
                <div>
                    <i onclick="removeFromCart(${data.plants.id})" class="fa-solid fa-xmark cursor-pointer"></i>
                </div>
            `;
            cartContainer.appendChild(categoryItem);
        });
        alert("Item added to cart");
}

const totalCost = (price) => {
    let total = document.getElementById('cart-total-value').innerText;
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('cart-total-value').innerText = total;
}

const removeFromCart = (id) => {
    const cartContainer = document.getElementById('cart-container');
    const itemToRemove = cartContainer.querySelector(`div[data-id="${id}"]`);
    if (itemToRemove) {
        const itemPrice = parseFloat(itemToRemove.querySelector('p').innerText.split(' ')[0]);
        cartContainer.removeChild(itemToRemove);
        totalCost(-itemPrice);
    }
}

const loadingSpinner = (isLoading) => {
    const loadingElement = document.getElementById('loading');
    const treeSection = document.getElementById('tree-section');
    
    if (isLoading) {
        loadingElement.classList.remove('hidden');
        treeSection.classList.add('hidden');
    } else {
        loadingElement.classList.add('hidden');
        treeSection.classList.remove('hidden');
    }
}


const showTreeDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(data => displayModal(data.plants));
}

const displayModal = (tree) => {
    const modalContainer = document.getElementById('tree-details-modal');
    modalContainer.innerHTML = `
        <h1 class="text-lg font-extrabold">${tree.name}</h1>
        <img class="w-auto h-auto rounded-lg" src="${tree.image}" alt="">
        <p class="py-2"><span class="font-bold">Category: </span> ${tree.category}</p>
        <p class="py-2"><span class="font-bold">Price: ৳</span> ${tree.price}</p>
        <p class="py-2"><span class="font-bold">Description: </span> ${tree.description}</p>
    `;
    document.getElementById('my_modal_5').showModal()
}

// Load spinner bug fixed by initializing both categories and trees on page load
const initializePage = () => {
    loadingSpinner(true);
    
    // Load categories first
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(categoriesData => {
            displayAllCategories(categoriesData.categories);
            
            // Then load trees
            return fetch('https://openapi.programming-hero.com/api/plants');
        })
        .then(res => res.json())
        .then(treesData => {
            displayAllTrees(treesData.plants);
            loadingSpinner(false);
        })
        .catch(error => {
            console.error('Error initializing page:', error);
            loadingSpinner(false);
        });
}

// Start the page
initializePage();