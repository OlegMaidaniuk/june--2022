const postContainer = document.getElementsByClassName('post')[0];

const url = new URL(location.href);
console.log(url);

const id = JSON.parse(url.searchParams.get('data'));
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`).then(value => value.json()
    .then(value => {
    function createUser(value) {
        for (const userElement in value) {
            if (typeof value[userElement] !== 'object') {
                const userDivElement = document.createElement('div');
                userDivElement.innerText = `${userElement} -- ${value[userElement]}`;
                userDivElement.classList.add('userElement');
                postContainer.appendChild(userDivElement);
            } else {
                // const userDivElement = document.createElement('div');
                // userDivElement.innerText = `${user[userElement]}`;
                createUser(value[userElement]);
            }
        }
    }
    createUser(value);
    const commentsDiv = document.createElement('div');
    document.body.appendChild(commentsDiv);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json()
            .then(comments => {
                for (const item of comments) {
                    const comment = document.createElement('div');
                    comment.innerText = `${item.postId} -- ${item.id} -- ${item.name} -- ${item.email} -- ${item.body}`;
                    commentsDiv.appendChild(comment);
                }
            }));
    }));
