export const productsList : Product [] =[
 {id:1, name:'Lavandina', price:10, description: 'Botella de vidrio'},
 {id:2, name:'Detergente', price:5, description:'Para 120 lavados'},
 {id:3, name:'Limpia vidrios', price:7, description:'Vidrios transparentes'},
 {id:4, name:'Quita grasa', price:8, description:'Todo limpio'},
 {id:5, name:'Perfumina', price:2, description: 'Aroma del mar'},
 
]

export interface Product {
    id:number | string;
    name: string;
    price: number;
    description: string;
}