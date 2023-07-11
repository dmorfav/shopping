import {IProduct} from "../model/iproduct";

interface CategoryAverage {
  totalPrice: number;
  totalCount: number;
  averagePrice?: number;
  name: string; // Modificamos la interfaz para asegurarnos de que name no sea undefined
}

export class OrderCategory {
  static sortCategoriesByPriceAverage(products: Array<IProduct>): Array<{ id: number; name: string }> {
    const categoryAverages: Record<number, CategoryAverage> = {};

    products.forEach((product) => {
      const categoryId = product.category?.id;

      if (categoryId) {
        if (categoryAverages.hasOwnProperty(categoryId)) {
          categoryAverages[categoryId].totalPrice += product.price;
          categoryAverages[categoryId].totalCount++;
        } else {
          categoryAverages[categoryId] = {
            totalPrice: product.price,
            totalCount: 1,
            name: product.category.name ?? "Undefined"
          };
        }
      }
    });

    for (const categoryId in categoryAverages) {
      if (categoryAverages.hasOwnProperty(categoryId)) {
        categoryAverages[categoryId].averagePrice =
          categoryAverages[categoryId].totalPrice /
          categoryAverages[categoryId].totalCount;
      }
    }

    const sortedCategories = Object.keys(categoryAverages).sort(
      (a, b) => categoryAverages[Number(a)].averagePrice! - categoryAverages[Number(b)].averagePrice!
    );

    return sortedCategories.map((categoryId) => ({
      id: Number(categoryId),
      name: categoryAverages[Number(categoryId)].name,
    }));
  }

}
