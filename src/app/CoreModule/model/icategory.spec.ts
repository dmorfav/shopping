import {ICategory} from "./icategory";

describe("ICategory", () => {
  it("should have the correct properties and types", () => {
    const category: ICategory = {
      id: 1,
      name: "Category Name",
      image: "category.jpg",
    };

    expect(category.id).toBe(1);
    expect(category.name).toBe("Category Name");
    expect(category.image).toBe("category.jpg");
  });
});
