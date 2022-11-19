import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "./styles";

type OrderBoardProps = {
	icon: string;
	title: string;
	orders: Array<Order>
}

export function OrdersBoard({ icon, title, orders }: OrderBoardProps){
	function handlerOpenModal(){
		alert("Modal foi aberto");
	}

	return (
		<Board>
			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>({orders.length})</span>
			</header>
			{
				orders.length > 0 && (
					<OrdersContainer>
						{
							orders.map(
								(order) => (
									<button type="button" key={order._id} onClick={handlerOpenModal}>
										<strong>Mesa {order.table}</strong>
										<span>{order.products.length} itens</span>
									</button>
								)
							)
						}
					</OrdersContainer>)
			}
		</Board>
	);
}
