class Products {
    name: string;
    image: string;
    price: number;
    post(){
        console.log('hello product')
    }
    getPrice(price: number, name: string, image: string){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}