export function loadHeader() {
  const headerHTML = `
    <header>
      <section>
        <div id="container">
          <!-- SHOP NAME -->
          <div id="shopName"><a href="index.html"> <b>SHOP</b>NAME </a></div>
          <!-- COLLECTIONS ON WEBSITE -->
		  <!-- 
          <div id="collection">
            <div id="clothing"><a href="clothing.html"> CLOTHING </a></div>
            <div id="accessories"><a href="accessories.html"> ACCESSORIES </a></div>
          </div>
		  -->
          <!-- SEARCH SECTION -->
          <div id="search">
            <i class="fas fa-search search"></i>
            <input type="text" id="input" name="searchBox" placeholder="search for something (it wont work)">
          </div>
          <!-- USER SECTION (CART AND USER ICON) -->
            <a href="cart.html" class="cart-link"> 
				<div id="badge"> 0 </div> 
			</a>
        </div>
      </section>
    </header>
  `;

 const headerElement = document.getElementById('header'); 
	headerElement.innerHTML = headerHTML; 

 loadHeaderResources();
}

function loadHeaderResources() {
  const headerCSS = document.createElement('link');
  headerCSS.rel = 'stylesheet';
  headerCSS.href = '/header/header.css';
  document.head.appendChild(headerCSS);

  const fontAwesome = document.createElement('script');
  fontAwesome.src = 'https://kit.fontawesome.com/4a3b1f73a2.js';
  document.head.appendChild(fontAwesome);

  const googleFonts = document.createElement('link');
  googleFonts.href = 'https://fonts.googleapis.com/css?family=Lato&display=swap';
  googleFonts.rel = 'stylesheet';
  document.head.appendChild(googleFonts);
}

export function counter_update(cartLength){
	document.getElementById("badge").textContent = cartLength;
}

