
//declaration de Class

class Product{
    constructor(id, name, price){
        this.id = id;
        this.name=name;
        this.price=price;

    }
}

//Declaration de class ShopingCardItem

class ShopingCardItem{
    constructor(product ,quantity){
        this.product=product;
        this.quantity=quantity;
    }
}

//Tableau des Cards avec fonction de calcul total

class ShopingCard{
    constructor(){
        this.items=[];
    }

// fonction pour calculer la somme

    calculateTotalPrice(){
    return this.product.price * this.quantity;
}
}

//Ajouter un produit et son quantity

addItem(product, quantity=1){
    const existingitem = this.items.find(items => items.product.id === product.id);
    if (existingitem){
        existingitem.quantity += quantity;
    } else {
        const newItem = new ShopingCardItem(product, quantity);
        this.items.push(newItem);
    }
}

//Supprimer un produit

removeItem(productId){
    this.items=this.items.filter(item => item.product.id !== productId);
}