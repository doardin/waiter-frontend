import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { ModalBody, OrderDetails, Overlay } from "./styles";


type OrderModalProps  = {
	visible: boolean;
	order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps){
	if(!visible || !order) {
		return null;
	}

	return (
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa {order.table}</strong>
					<button type="button">
						<img src={closeIcon} alt="Ícone de fechar" />
					</button>
				</header>
				<div className="status-container">
					<small>Status do pedido</small>
					<div>
						<span>
							{ order.status === "WAITING" && "🕑"}
							{ order.status === "IN_PRODUCTION" && "👩‍🍳"}
							{ order.status === "DONE" && "✅"}
						</span>
						<strong>
							{ order.status === "WAITING" && "Fila de espera"}
							{ order.status === "IN_PRODUCTION" && "Em preparação"}
							{ order.status === "DONE" && "Pronto"}
						</strong>
					</div>
				</div>

				<OrderDetails>
					<strong>Itens</strong>
					<div className="order-items">
						{
							order.products.map(
								({_id, product, quantity}) => (
									<div className="item" key={_id}>
										<img
											src={`http://localhost:9000/uploads/${product.imagePath}`}
											alt={product.name}
											width="56"
											height="28.51"
										/>

										<span className="quantity">{quantity}x</span>
										<div className="product-details">
											<strong>{product.name}</strong>
											<span>{formatCurrency(product.price)}</span>
										</div>
									</div>
								)
							)
						}
					</div>
				</OrderDetails>
			</ModalBody>
		</Overlay>
	);
}