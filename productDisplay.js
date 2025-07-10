function create_text_node (element, text_content) {
		let node = document.createElement(element)
			node.appendChild(document.createTextNode(text_content)); 
		return node; 
}
function create_image_node (img_url){
		let img_node = document.createElement('img');
		img_node.src = img_url;
		return img_node;
	
}
function process_product(product){
	let node = document.createElement('div'); 
	node.classList.add('box'); 
	node.appendChild(create_image_node(product.images[0])); 
	node.appendChild(create_text_node('h3',product.title));
	node.appendChild(create_text_node('h4',product.description));
	node.appendChild(create_text_node('h2',product.price));
	return node;
}; 
export { process_product }; 
