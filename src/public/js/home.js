const socket = io()

socket.on("updatedProducts", (products) => {
    const productList = document.getElementById("products")
    productList.innerHTML = ""
    products.forEach((product) => {
      const listItem = document.createElement("li")
      listItem.textContent = product.title
      productList.appendChild(listItem)
    })
  })