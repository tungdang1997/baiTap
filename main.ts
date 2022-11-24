import {ProductManagement} from "./productManagement";
import {Product} from "./product";

// @ts-ignore
let newProductMana = new ProductManagement()
let product1 = new ProductManagement('note1',100,5,'sam sung');
let product2 = new ProductManagement('redmi2',200,5,'nokia');
let product3 = new ProductManagement('iphone3',150,5,'xiaomi');
let product4 = new ProductManagement('zfit4',300,5,'sony');

newProductMana.add(product1);
newProductMana.add(product2);
newProductMana.add(product3);
newProductMana.add(product4);


newProductMana.showAll()
newProductMana.findByName('note1')
newProductMana.remove('note1')
newProductMana.findByCheck('re')
newProductMana.sortMaxMin(400)
newProductMana.sortMinMax(100)
newProductMana.finbByBrand('nokia')
newProductMana.findByPrice(100,400)
newProductMana.edit('iphone')
newProductMana.findMintoMax()