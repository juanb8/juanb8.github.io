import { loadHeader, counter_update } from './header/header.js'; 
import { process_product } from './productDisplay.js'; 
function handelDelete(){
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productBox = event.target.closest('.box');
  
  const productTitle = productBox.querySelector('h3').textContent.trim();
  
  console.log('Removing product: ${productTitle}');
  cart = cart.filter(item => item.title !== productTitle);
  
  localStorage.setItem("cart",JSON.stringify(cart));
  
	productBox.remove();
	counter_update(cart.length);
	load_total(cart);
}; 
function load_total( cart ){
	const totalNode = document.getElementById('total');
	let x =  cart.reduce((acc , curr)=>  curr.price + acc, 0);
	totalNode.textContent = "Total: "+x; 
};
 
async function load_cart(cart){
		const  conteiner = document.getElementById("containerClothing"); 
		cart.forEach( (product) =>{
			const product_node = process_product(product); 
			const button = document.createElement('button'); 
			button.classList.add('delete-btn');
			button.appendChild(document.createTextNode('Eliminar del carrito'));
			product_node.appendChild(button);
			conteiner.appendChild(product_node); 
		}
			);

	document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', handelDelete );
  });
};  

document.addEventListener("DOMContentLoaded", (event) => {
	loadHeader();
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	const delete_cart_handler = () => {
		localStorage.setItem('cart', JSON.stringify([])); 
		const boxes =  Array.from(document.querySelectorAll('.box')); 
		boxes.forEach((element)=> element.remove()); 
		counter_update(0);
		load_total([]); 
	};		
	counter_update(cart.length); 
	load_cart(cart);
	load_total(cart); 
	const empty_cart  = document.getElementById('buy'); 
	empty_cart.addEventListener('click', () => {  
		delete_cart_handler(); 
		window.location.href = './index.html'; 
	} );
	const buy_node = document.getElementById('empty-cart'); 
	buy_node.addEventListener('click',delete_cart_handler);


});
