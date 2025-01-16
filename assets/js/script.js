// Change background
const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#8d8cc4";
});


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         console.log('Original Data:', users);
//         // Locate user with ID = 1
//         const userIdToEdit = 1;
//         const userToEdit = users.find(user => user.id === userIdToEdit);

//         if (userToEdit) {
//             userToEdit.name = 'Suhaib Muhammad';
//             userToEdit.username = 'NewUsername';
//         }

//         console.log('Edited User:', userToEdit);
//     });

