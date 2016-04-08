// Impure. Mutates existing cart
const addToCart = (cart, item, quantity) => {
	cart.items.push({
		item,
		quanitity
	});
	return cart;
};
