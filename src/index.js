document.addEventListener('DOMContentLoaded', main);

function main() {
  displayPosts();
  addNewPostListener();
}

function displayPosts() {
  fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(posts => {
      const postList = document.getElementById('post-list');
      postList.innerHTML = '';
      
      posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.dataset.id = post.id;
        
        postItem.innerHTML = `
        <h3>${post.title}</h3>
         <img src="${post.image}" alt="${post.title}" onerror="this.src='./images/benz2.png';   this.onerror=null;" style="width: 100px; height: 100px">
`;
        
        
        postItem.addEventListener('click', () => handlePostClick(post.id));
        postList.appendChild(postItem);
      });
    })
    .catch(error => console.error('Error fetching posts:', error));
}

function handlePostClick(postId) {
  fetch(`http://localhost:3000/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
  const postDetail = document.getElementById('post-detail');
  postDetail.innerHTML = `
    <h2>${post.title}</h2>
    <img src="${post.image}" alt="${post.title}" onerror="this.src='./images/benz2.png'; this.onerror=null;" style="width: 200px; height: 200px">
    <p>${post.content}</p>
    <p><strong>Author:</strong> ${post.author}</p>
  `;
})
.catch(error => console.error('Error fetching post details:', error));
}

function addNewPostListener() {
  const form = document.getElementById('new-post-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    
    const newPost = {
      title: form.title.value,
      content: form.content.value,
      author: form.author.value,
      image: form.image.value || undefined
    };
    
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
    .then(response => response.json())
    .then(() => {
      form.reset();
      displayPosts();
    })
    .catch(error => console.error('Error creating new post:', error));
  });
}
