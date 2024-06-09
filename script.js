document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.getElementById("itemList");
  const newItemInput = document.getElementById("newItem");
  const deleteButton = document.getElementById("deleteButton");

  // Array to store the list items
  let items = [];

  // Function to add a new item
  function addItem() {
    const itemText = newItemInput.value;
    if (!itemText.trim()) return; // Check if input is not empty
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    itemList.appendChild(listItem);

    // Add the new item to the items array
    items.push({ text: itemText, element: listItem });

    newItemInput.value = ""; // Clear input after adding
  }

  // Function to delete selected items
  function deleteSelectedItems() {
    const selectedItems = itemList.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    selectedItems.forEach((item) => {
      const itemData = items.find((i) => i.element === item.parentElement);
      if (itemData) {
        // Remove the item from the items array
        items = items.filter((i) => i !== itemData);
      }
      item.parentElement.remove();
    });
  }

  // Update the displayed list whenever an item is added or deleted
  function updateDisplayedList() {
    itemList.innerHTML = "";
    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.text;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      listItem.appendChild(checkbox);
      itemList.appendChild(listItem);
    });
  }

  // Event listeners
  document.getElementById("itemForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    addItem();
    updateDisplayedList(); // Update the displayed list after adding a new item
  });

  deleteButton.addEventListener("click", deleteSelectedItems);
  updateDisplayedList(); // Initial update to display the current items

  // Example initial items (optional)
  addItem();
  addItem();
});
