const posts = [
  {
    title: 'First Post',
    body: 'This is first post'
  },
  {
    title: 'Second Post',
    body: 'This is Second post'
  }
];

function getPost() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('callback').innerHTML = output;
  }, 2000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 1000);
}

// getPost();

createPost({ title: 'Third Post', body: 'this is third Post' }, getPost);
