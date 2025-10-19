const input = document.getElementById('todoInput');
const add = document.getElementById('add');
const list = document.getElementById('todoList');

function addTodo() {
    const text = input.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;

    li.addEventListener('click', function () {
        span.classList.toggle('done');
    });

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<img src="https://img.icons8.com/?size=100&id=bzhSoL6t5jbL&format=png&color=000000" alt="delete" width="20" height="20">';
    delBtn.className = 'delete';
    delBtn.addEventListener ('click', function (e) {
        e.stopPropagation();
        li.remove ();
    });
    
    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);

    input.value = '';
}
add.addEventListener('click', addTodo);
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
} );