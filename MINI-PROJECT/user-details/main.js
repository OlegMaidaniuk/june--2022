const userDiv = document.getElementsByClassName('user')[0];

let key = 'key';

const user = JSON.parse(localStorage.getItem(key));

function createUser(user) {
    for (const userElement in user) {
        if (typeof user[userElement] !== 'object') {
            const userDivElement = document.createElement('div');
            userDivElement.innerText = `${userElement} -- ${user[userElement]}`;
            userDivElement.classList.add('userElement');
            userDiv.appendChild(userDivElement);
        } else {
            // const userDivElement = document.createElement('div');
            // userDivElement.innerText = `${user[userElement]}`;
            createUser(user[userElement]);
        }
    }
}

createUser(user);

const postsButton = document.createElement('Button');
postsButton.innerText = 'All posts';
postsButton.classList.add('postsButton');
userDiv.appendChild(postsButton);

const postsDiv = document.createElement('div');
postsDiv.classList.add('postsDiv');
document.body.appendChild(postsDiv);


postsButton.onclick = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${uer.id}/posts`)
        .then(value => value.json())
        .then(post => {
            for (const posts of post) {
                const postDiv = document.createElement('div');
                postDiv.innerText = `${post.id} -- ${post.title}`;
                postDiv.classList.add(`postDiv`);
                postsDiv.appendChild(postDiv);

                // const postButton = document.createElement(`button`);
                // postButton.innerText = 'Click me';
                // postButton.classList.add('postButton');
                // postDiv.appendChild(postButton);

                const a = document.createElement('a');
                // postButton.appendChild('a');
                a.innerText = 'Go to post details'
                // a.href = `../post-details/post-details.html?data=${JSON.stringify(post)}`;
                a.href = `../post-details/post-details.html?data=${user.id}`;
                postDiv.appendChild(a);
            }
        });
}