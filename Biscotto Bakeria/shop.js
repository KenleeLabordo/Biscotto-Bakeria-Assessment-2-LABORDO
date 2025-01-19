// Path to the JSON file
const jsonFilePath = "bakeryItems.json";

// Function to fetch JSON data and dynamically populate the product container
async function fetchBakeryItems() {
    try {
        const response = await fetch(jsonFilePath);
        const data = await response.json();
        const bakeryItems = data.bakeryItems;
        const shopContainer = document.getElementById("shop");

        // Apply styles to the container
        shopContainer.classList.add("shop-container");

        bakeryItems.forEach(item => {
            // Create a card for each item
            const card = document.createElement("div");
            card.className = "item-card"; // Updated to match the CSS class name

            // Populate the card with item details
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>Category: ${item.category}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p class="${item.available ? 'in-stock' : 'out-of-stock'}">
                    ${item.available ? "In Stock" : "Out of Stock"}
                </p>
            `;

            // Append the card to the container
            shopContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching the bakery items JSON:", error);
    }
}

// Call the function to fetch and display items
fetchBakeryItems();
