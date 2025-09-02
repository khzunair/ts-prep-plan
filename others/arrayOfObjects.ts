const products = [
  { name: 'Laptop', price: 1200, isAvailable: true },
  { name: 'Mouse', price: 25, isAvailable: false },
  { name: 'Keyboard', price: 75, isAvailable: true },
  { name: 'Monitor', price: 300, isAvailable: false },
];

// [
//   { name: 'Laptop', price: 1200, isAvailable: true },
//   { name: 'Keyboard', price: 75, isAvailable: true },
// ]
interface IProduct {
    name: string, 
    price: number, 
    isAvailable: boolean
}
function getAvailableProducts(products: IProduct[]): IProduct[]{
    console.log("running.."); 
    let availableProducts: IProduct[] =  products.filter(product => (product.isAvailable));
    
    return availableProducts; 
}
// function getAvailableProducts(products: IProduct[]): IProduct[]{
//     // console.log("running..")
//     let array: IProduct[] = []; 
//     for(let item of products){
//         if(item.isAvailable){
//             // console.log(item.name)
//             array.push(item)
//         }
//     }
//     return array
// }
    
    
//     return array; 
// }


console.log(getAvailableProducts(products))


