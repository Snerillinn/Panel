// script.js

const usersData = document.getElementById('users-data');
const permissionsData = document.getElementById('permissions-data');

let users = [
    { id: 1, username: 'admin', email: 'admin@example.com', password: 'password123' },
    { id: 2, username: 'user1', email: 'user1@example.com', password: 'password456' }
];

let permissions = [
    { id: 1, name: 'viewUsers' },
    { id: 2, name: 'editUser' }
];

function renderUsers() {
    usersData.innerHTML = '';
    for (const user of users) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td><button class="edit-btn">Edit</button> | <button class="delete-btn">Delete</button></td>
        `;
        usersData.appendChild(row);
    }
}

function renderPermissions() {
    permissionsData.innerHTML = '';
    for (const permission of permissions) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${permission.name}</td>
            <td><button class="edit-btn">Edit</button> | <button class="delete-btn">Delete</button></td>
        `;
        permissionsData.appendChild(row);
    }
}

renderUsers();
renderPermissions();

// Add event listeners
const addUserBtn = document.querySelector('.add-user-btn');
const addPermissionBtn = document.querySelector('.add-permission-btn');

addUserBtn.addEventListener('click', () => {
    // Implement adding new user logic here
});

addPermissionBtn.addEventListener('click', () => {
    // Implement adding new permission logic here
});
