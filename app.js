// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables globales para almacenar la lista de amigos y el elemento HTML donde se mostrará la lista.
let friendList = [];
let friendListElement = document.getElementById("listaAmigos");

// Función para agregar un amigo a la lista.
function addFriend(name) {

    // Validar que el nombre no esté vacío y no tenga espacios al inicio o al final.
    friendList.push(name.trim());
}

// Función para manejar el evento de clic en el botón "Agregar Amigo".
function agregarAmigo() {
    // Obtener el valor del campo de entrada de amigo.
    let newFriendName = document.getElementById("amigo").value;
    
    // Validar que el nombre no esté vacío en caso contrario mostrar un mensaje de alerta.
    if (newFriendName.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nuevo amigo a la lista.
    addFriend(newFriendName);

    // Actualizar la vista de la lista de amigos.
    updateViewFriendList(friendListElement);

    // Limpiar el campo de entrada de amigo.
    clearInputFriend();
}

// Función para actualizar la vista de la lista de amigos.
function updateViewFriendList(friendListElement) {
    friendListElement.innerHTML = "";
    friendList.forEach((friend, index) => {
        let listItem = `<li>${friend}</li>`;
        friendListElement.innerHTML += listItem;
    });
}

// Función para manejar el evento de clic en el botón "Sortear Amigo".
function sortearAmigo() {
    // Validar que haya amigos en la lista antes de sortear.
    if (friendList.length === 0) {
        return;
    }

    // Seleccionar un amigo al azar de la lista.
    let selectedFriend = selectRandomFriend();

    // Actualizar la vista con los amigos secretos a sortear.
    updateViewResultList(selectedFriend);
}

// Función para seleccionar un amigo al azar de la lista.
function selectRandomFriend() {
    let randomIndex = Math.floor(Math.random() * friendList.length);
    return friendList[randomIndex];
}

// Funcion para actualizar la vista de resultados con el amigo secreto sorteado.
function updateViewResultList(selectedFriend) {
    // Limpiar el contenido previo del elemento de resultados HTML.
    clearFriendList();

    // Actualizar la vista HTML con la lista de amigos.
    updateViewFriendList(friendListElement);

    // Actualizar el elemento de resultados con el amigo secreto sorteado.
    let resultListElement = document.getElementById("resultado");
    resultListElement.innerHTML = `El amigo secreto sorteado es: ${selectedFriend}`;
}

// Funciones para limpiar los campos de entrada de amigo.
function clearInputFriend() {
    document.getElementById("amigo").value = "";
}

// Función para limpiar la lista de amigos.
function clearFriendList() {
    friendList = [];
}
