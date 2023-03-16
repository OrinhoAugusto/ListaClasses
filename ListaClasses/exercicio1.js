class Product {
    constructor(nome, price) {
        this.nome = nome;
        this.price = price;
    }

    priceTag() {
        console.log('Este produto custa ' + this.price + ' reais.')
    }
}

class ImportedProduct extends Product {
    constructor(nome, price, taxaAlf) {
        super(nome, price)
        this.taxaAlf = taxaAlf
        this.precoTotal = this.price + this.taxaAlf
    }

    priceTag() {
        console.log('Este produto custa ' + this.price + ' reais.')
    }

    totalPrice() {
        console.log(parseFloat(this.precoTotal))
    }
}

class UsedProduct extends Product {
    constructor(nome, price, dataFab) {
        super(nome, price)
        this.manufactureDate = dataFab
    }

    priceTag() {
        console.log('Este produto custa ' + this.price + ' reais.')
    }
}

let a = new Product('Notebook', 1100)
console.log('Nome: ' + a.nome +'.')
a.priceTag()
console.log('\n')

let b = new ImportedProduct('Tablet', 260, 20)
console.log('Nome: ' + b.nome +'.')
b.priceTag()
console.log('Taxa aduaneira: ' + b.taxaAlf + '.')
console.log('\n')

let c = new UsedProduct('Iphone', 400,  new Date().toDateString())
console.log('Nome: ' + c.nome +'.')
c.priceTag()
console.log('Data de fabricação: ' + c.manufactureDate)
