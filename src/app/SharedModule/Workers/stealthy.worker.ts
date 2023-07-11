import {IProduct} from "../../CoreModule/model/iproduct";
import {OrderCategory} from "../../CoreModule/helpers/order-category";

addEventListener('message', ({data}) => {
  const products: IProduct[] = data;
  const sortedCategories = OrderCategory.sortCategoriesByPriceAverage(products);
  console.log("he terminado")
  self.postMessage(sortedCategories);
});
