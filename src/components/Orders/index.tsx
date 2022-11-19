import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
	{
		"_id": "63793e9bdaf81ed18e5c1a96",
		"table": "1",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Pizza quadro queijos",
					"imagePath": "1668873403264-quatro-queijos.png",
					"price": 40,
				},
				"quantity": 2,
				"_id": "63793e9bdaf81ed18e5c1a97"
			}
		],
	}
];

export function Orders(){
	return (
		<Container>
			<OrdersBoard
				icon="🕑"
				title="Fila de espera"
				orders={orders}
			/>
			<OrdersBoard
				icon="👩‍🍳"
				title="Em produção"
				orders={[]}
			/>
			<OrdersBoard
				icon="✅"
				title="Pronto"
				orders={[]}
			/>
		</Container>
	);
}
