import { loadHeader, counter_update   } from './header/header.js'; 
import { process_product } from './productDisplay.js'; 

document.addEventListener("DOMContentLoaded", (event) => {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	loadHeader(); 
	counter_update(cart.length);

	const add_to_cart_handler = (product) => {
		cart.push(product); 
		localStorage.setItem("cart",JSON.stringify(cart));
		console.log("Se guarda"+product.title+" al carrito");			
		counter_update(cart.length); 
	}; 
	const add_to_cart_button = (product) => {
		let button = document.createElement('button');
		button.addEventListener( "click", () => add_to_cart_handler(product));
		button.appendChild(document.createTextNode("Agregar al carrito"));	
		return button; 
	}; 
	const product_render = () => {
		fetch('https://dummyjson.com/products')
			.then(res => res.json())
				.then(data => {
					console.log("API get");
					const conteiner = document.getElementById('containerClothing'); 
					data.products.forEach((product) =>{
								let product_node = process_product(product); 
								product_node.appendChild(add_to_cart_button(product)); 
								conteiner.appendChild(product_node); 
							});
						});

	};
	product_render(); 
	counter_update(cart.length); 
});
