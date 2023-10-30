// Create Elements
let header = document.createElement("header");
let logo = document.createElement("a");
let menu = document.createElement("ul");
let home = document.createElement("li");
let about = document.createElement("li");
let services = document.createElement("li");
let contact = document.createElement("li");
let main = document.createElement("main");
let footer = document.createElement("footer");

for (let i = 0; i < 15; i++) {
let products = document.createElement("div");
let product = document.createElement("span");

products.classList.add("product");

products.style.cssText ="border: 1px solid rgb(211, 211, 211); width: calc((100% - 40px) / 3); box-sizing:border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px; background-color: white;";
product.style.cssText ="font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";

product.textContent = i + 1;

products.appendChild(product);
products.append("product");
main.appendChild(products);
}

// Add Classes to Element
header.classList.add("website-head");
logo.classList.add("website-logo");
menu.classList.add("menu");
main.classList.add("content");
footer.classList.add("footer");

// Elements Styling
header.style.cssText = "display: flex; align-items: center; justify-content: space-between; height:71px;";
logo.style.cssText = "color: rgb(35, 169, 110); font-weight: bold; font-size: 26px;";
menu.style.cssText = "list-style: none; padding: 0; margin: 0; display: flex;";
home.style.cssText = "margin-right: 20px; color: #ccc;";
about.style.cssText = "margin-right: 20px; color: #ccc;";
services.style.cssText = "margin-right: 20px; color: #ccc;";
contact.style.cssText = "margin-right: 20px; color: #ccc;";
main.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box; background-color: #eee";
footer.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: white;"

// Create Elements Text
let logoText = document.createTextNode("Elzero");
let homeText = document.createTextNode("Home");
let aboutText = document.createTextNode("About");
let servicesText = document.createTextNode("Services");
let contactText = document.createTextNode("Contact");
let footerText = document.createTextNode("Copyright 2023");

// Add Text To Elements
logo.append(logoText);
home.append(homeText);
about.append(aboutText);
services.append(servicesText);
contact.append(contactText);
footer.append(footerText);


// Add Elements To Page
header.appendChild(logo);
menu.append(home, about, services, contact);
header.appendChild(menu);
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);