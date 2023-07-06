import {IProduct} from "./iproduct";

describe("IProduct", () => {
  it("should have the correct properties and types", () => {
    const product: IProduct = {
      id: 1,
      title: "Product Title",
      price: 10.99,
      description: "Product Description",
      category: {
        id: 1,
        name: "Category Name",
        image: "category.jpg",
      },
      images: ["image1.jpg", "image2.jpg"],
    };

    expect(product.id).toBe(1);
    expect(product.title).toBe("Product Title");
    expect(product.price).toBe(10.99);
    expect(product.description).toBe("Product Description");

    expect(product.category.id).toBe(1);
    expect(product.category.name).toBe("Category Name");
    expect(product.category.image).toBe("category.jpg");

    expect(product.images).toEqual(["image1.jpg", "image2.jpg"]);
  });
});
