const usersContainer = document.getElementsByClassName('usersContainer')[0];

let key = 'key';

fetch(`https://jsonplaceholder.typicode.com/users`).then(value => value.json()).then(users => {
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.innerText = `${user.id} -- ${user.name}`;
        userDiv.classList.add('userDiv');
        usersContainer.appendChild(userDiv);

        const userButton = document.createElement('button');
        userButton.innerText = 'Click';
        userButton.classList.add('userButton')
        userDiv.appendChild(userButton);


        userButton.onclick = (e) => {
            e.preventDefault()

            userButton.onclick = (e) => {
                e.preventDefault();
                localStorage.setItem(key, JSON.stringify(user));
                location.href = `../user-details/user-details.html`;
            }

        }
    }
});

// 1. не спрацьовую fetch в першому main.js незрозуміло чому, може ви вже базу даних вимкнули на доступ чи ні?
//     все ніби то як у ментора на консультації.



























