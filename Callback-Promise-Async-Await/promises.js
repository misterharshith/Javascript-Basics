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
    document.getElementById('promises').innerHTML = output;
  }, 2000);
}

function createPost(post, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error occured while fetching the data');
      }
    }, 1000);
  });
}

// createPost({ title: 'Third Post', body: 'This is third post' })
//   .then(getPost)
//   .catch(err => console.log(err));

// Async / Await

async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}
fetchUser();

// Promise all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, 'GoodBye')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
//   res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//   console.log(values)
// );
