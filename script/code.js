// Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products =
    JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products'))
        : localStorage.setItem('products',
            JSON.stringify(
                [
                    {
                        id: 1,
                        productName: "Gemstone",
                        category: "Ring",
                        Material: "Gold",
                        Amount: 1000,
                        img_url: "https://leahbasson.github.io/MyImages/jsProject/circle1.jpg"
                    },
                    {
                        id: 2,
                        productName : "Chunky Silver",
                        category: "Bracelet",
                        Material: "Silver",
                        Amount: 300,
                        img_url: "https://leahbasson.github.io/MyImages/jsProject/circle2.png"
                    },
                    {
                        id: 3,
                        productName: "Chain Necklace",
                        category: "Necklace",
                        Material: "Gold",
                        Amount: 600,
                        img_url: "https://leahbasson.github.io/MyImages/jsProject/circle3.jpg"
                    },
                    {
                        id: 4,
                        productName: "Pear Shaped Pearls",
                        category: "Earrings",
                        Material: "Pearls, Gold",
                        Amount: 300,
                        img_url: "https://leahbasson.github.io/MyImages/jsProject/circle4.jpg"
                    },
                    {
                        id: 5,
                        productName: "Heart Shaped Earrings",
                        category: "Earrings",
                        Material: "Gold, Diamond",
                        Amount: 500,
                        img_url: "https://leahbasson.github.io/MyImages/jsProject/homeLimited.jpg"
                    }
                ]
            )
        )
// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()
function recentProducts() {
    try {
        let arrSize = products.length
        let latestProducts = products.reverse().slice(0, arrSize >> 1)
        latestProducts.forEach(product => {
            wrapper.innerHTML += `
        <div class="card">
            <img src="${[product.img_url]}" class="card-img-top" alt="${product.productName}">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.Material}</p>
            </div>
        </div>
    `
        })
    } catch (e) {
        wrapper.textContent = "Please contact our administrator"
        setTimeout(() => {
            location.reload()
        },
            2000
        )
    }
}
recentProducts()
// Counter
window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0
}