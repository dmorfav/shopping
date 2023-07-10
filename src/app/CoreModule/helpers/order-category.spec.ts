import {IProduct} from "../model/iproduct";
import {OrderCategory} from "./order-category";

describe('OrderCategory', () => {
  it('should create an instance', () => {
    expect(new OrderCategory()).toBeTruthy();
  });

  it('should have the correct properties and types', () => {
    const productList = [
      {
        id: 1,
        title: 'Producto 1',
        price: 1000,
        category: {
          id: 1,
          name: 'Category A',
        },
      } as IProduct,
      {
        id: 2,
        title: 'Producto 2',
        price: 2000,
        category: {
          id: 2,
          name: 'Category B',
        },
      } as IProduct,
      {
        id: 3,
        title: 'Producto 3',
        price: 1500,
        category: {
          id: 1,
          name: 'Category A',
        },
      } as IProduct,
      {
        id: 4,
        title: 'Producto 4',
        price: 3000,
        category: {
          id: 3,
          name: 'Category C',
        },
      } as IProduct,
    ];

    const sortedCategories = OrderCategory.sortCategoriesByPriceAverage(productList);
    console.log(sortedCategories);
    // Comprobar que las categorías están ordenadas correctamente
    expect(sortedCategories).toEqual([{id: 1, name: 'Category A'}, {id: 2, name: 'Category B'}, {
      id: 3,
      name: 'Category C'
    }]);
  });
});
