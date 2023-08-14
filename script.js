const apiUrl = 'https://random-data-api.com/api/v2/beers?size=9';

// Function to fetch data from the API and populate the grid
async function populateGrid() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    const gridContainer = document.getElementById('gridContainer');

    data.forEach(item => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const name = document.createElement('p');
    name.textContent = item.name;

    gridItem.appendChild(name);

    gridContainer.appendChild(gridItem);
    });
}

// Call the function to populate the grid
populateGrid();
