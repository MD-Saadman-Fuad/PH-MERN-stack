const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        displayPost(data);
})
}

const displayPost = (posts) =>{
    // console.log(posts);
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    // console.log(postContainer);

    posts.forEach(post => {
        console.log(post.title);

        const postCard = document.createElement('div');
        postCard.innerHTML = `
        <div class="post-card">
            <h1>${post.title}</h1>
            <p>${post.body}</p>

        </div>
        `;
        // console.log(li);
        postContainer.appendChild(postCard);
    });
}