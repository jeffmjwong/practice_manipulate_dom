const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const ul = document.querySelector('ul');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');

button.addEventListener('click', () => {
  const inputValue = input.value;
  p.innerHTML = `${inputValue}:`;
  p.title = "List description";
});

toggleList.addEventListener('click', evt => {
  if (listDiv.style.display === "none") {
    listDiv.style.display = "block";
    evt.target.textContent = "Hide list";
  } else {
    listDiv.style.display = "none";
    evt.target.textContent = "Show list";
  }
});

addItemButton.addEventListener('click', () => {
  const inputItem = addItemInput.value;
  let li = document.createElement('li');
  li.textContent = inputItem;
  ul.appendChild(li);
});
