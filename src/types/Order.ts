import { OrderProduct } from "./OrderProduct";

export type Order = {
	_id: string;
	table: string;
	status: string;
	products: Array<OrderProduct>
}
