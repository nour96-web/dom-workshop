var plus_btns = document.querySelectorAll(".plus")
var min_btns = document.querySelectorAll(".minus")
var prices = document.querySelectorAll(".price")
var supp = document.querySelectorAll(".delete")
var wish = document.querySelectorAll(".like")



function inc(e) {
    var clickbouton = e.target;
    var parentDiv = clickbouton.parentElement;
    var parag = parentDiv.querySelector("p");
    var quantity = Number(parag.innerHTML);
    quantity++;  
    parag.innerHTML = quantity;

    var parent_td = parentDiv.parentElement;
    var parent_tr = parent_td.parentElement;
    var u_price = parent_tr.querySelector(".unitPrice");
    var t_price = parent_tr.querySelector(".price");
    var price_unit = Number(u_price.innerHTML);
    var price_tot = Number(t_price.innerHTML);
    t_price.innerHTML = price_unit * quantity;
    somme();



}

function dec(e) {
    var clickbouton = e.target;
    var parentDiv = clickbouton.parentElement;
    var parag = parentDiv.querySelector("p");
    var quantity = Number(parag.innerHTML);
    if (quantity > 0)
    {
        quantity--; 
    }
    parag.innerHTML = quantity;

    var parent_td = parentDiv.parentElement;
    var parent_tr = parent_td.parentElement;
    var u_price = parent_tr.querySelector(".unitPrice");
    var t_price = parent_tr.querySelector(".price");
    var price_unit = Number(u_price.innerHTML);
    var price_tot = Number(t_price.innerHTML);
    t_price.innerHTML = price_unit * quantity;
    somme();

}

function somme() {
    var somme=0;
    var Total = document.querySelector("#total");
for (let i = 0; i < prices.length; i++) {
    somme += Number(prices[i].innerHTML)
} 
Total.innerHTML = somme;
}



function delet(e) {
    var clickdel = e.target;
    var row = clickdel.parentElement.parentElement.parentElement.parentElement;
    var pricereset = row.querySelector(".price");
    pricereset.innerHTML = "0";
    somme();
    row.remove();
  
    }
    
    
    
function changecolor(e) {
        var col = e.target;
        if (col.style.color !="red") {
            col.style.color = "red";
        }
        else {
        col.style.color = "#424242";
         }

}


for (let i = 0; i < plus_btns.length; i++) {
    plus_btns[i].addEventListener("click", inc)
}

for (let i = 0; i < min_btns.length; i++) {
    min_btns[i].addEventListener("click", dec)
}

for (let i = 0; i < supp.length; i++) {
    supp[i].addEventListener("click", delet)
    
}
for (let i = 0; i < wish.length; i++) {
    wish[i].addEventListener("click", changecolor)
    
}

