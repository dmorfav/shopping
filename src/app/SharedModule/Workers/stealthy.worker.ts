import {IProduct} from "../../CoreModule/model/iproduct";
import {OrderCategory} from "../../CoreModule/helpers/order-category";

addEventListener('message', ({data}) => {
  const products: IProduct[] = data;
  const sortedCategories = OrderCategory.sortCategoriesByPriceAverage(products);
  self.postMessage(sortedCategories);
});
