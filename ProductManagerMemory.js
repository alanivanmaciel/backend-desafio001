class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("Todos los campos deben ser obligatorios.");
      return;
    }

    if (
      this.products.some(
        (existingProduct) => existingProduct.code === product.code
      )
    ) {
      console.log("El código del producto ya existe.");
      return;
    }

    product.id = this.productIdCounter++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log(`ID de producto (${id}) no encontrado.`);
      return null;
    }
  }
}

// Prueba de funciones
const productManager = new ProductManager();

productManager.addProduct({
  title: "Remera",
  description: "Remera Over Size.",
  price: 20.99,
  thumbnail: "/images/RemeraOS.jpg",
  code: "R001",
  stock: 10,
});

productManager.addProduct({
  title: "Short",
  description: "Short de futbol negro.",
  price: 15.5,
  thumbnail: "/images/ShortNegro.jpg",
  code: "S002",
  stock: 5,
});

productManager.addProduct({
  title: "Botines",
  description: "Botin Mercurial.",
  price: 50,
  thumbnail: "/images/BotinMercurial.jpg",
  code: "B010",
  stock: 8,
});

console.log(productManager.getProducts());

const productById = productManager.getProductById(4);
if (productById) {
  console.log("Producto encontrado:", productById);
}
