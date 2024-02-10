const taskElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const ul = document.querySelector('ul');

buttonElement.addEventListener('click', function (e) {
    if (taskElement.value === "") {
        alert("Please enter a task!");
    }
    else {
        const list = document.createElement("li");
        const link = document.createElement("a");
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        link.setAttribute("href", "#");
        const linkText = document.createTextNode("done");
        link.appendChild(linkText);
        list.innerText = taskElement.value;
        list.appendChild(link);
        list.insertAdjacentElement('afterbegin', input);
        ul.appendChild(list);
        taskElement.value = "";
    }
});

taskElement.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (taskElement.value === "") {
            alert("Please enter a task!");
        }
        else {
            const list = document.createElement("li");
            const link = document.createElement("a");
            const input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            link.setAttribute("href", "#");
            const linkText = document.createTextNode("done");
            link.appendChild(linkText);
            list.innerText = taskElement.value;
            list.appendChild(link);
            list.insertAdjacentElement('afterbegin', input);
            ul.appendChild(list);
            taskElement.value = "";
        }
    }
});

ul.addEventListener('click', function (e) {
    if (e.target.nodeName === 'A') {
        e.target.parentElement.remove();
    };
})
