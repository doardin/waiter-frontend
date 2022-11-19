import { Product } from "./Product";

export type OrderProduct = {
	_id: string,
	quantity: number
	product: Product;
}
