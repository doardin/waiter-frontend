export function formatCurrency(value: number){
	const response = new Intl.NumberFormat("pt-br", {
		style: "currency",
		currency: "BRL"
	}).format(value);

	return response;
}
