const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const ul = document.querySelector('ul');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');

descriptionButton.addEventListener('click', () => {
  const inputValue = descriptionInput.value;
  descriptionP.innerHTML = `${inputValue}:`;
  descriptionP.title = "List description";
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
