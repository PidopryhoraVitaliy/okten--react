import type {ProductsItemModel} from "./ProductsItemModel.ts";

export interface CartModel {
	discountedTotal: number;
	total: number;
	totalQuantity: number;
	totalProducts: number;
	id: number;
	userId: number;
	products: Array<ProductsItemModel>;
}