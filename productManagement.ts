import {Product} from "./product";

export class ProductManagement extends Product {
    Productlist: Product[] = [];

    add(product: Product): void {
        console.log(this.Productlist.push(product))

    }

    showAll() {
        // return this.Productlist;
        console.log(this.Productlist)
    }


    edit(name: string): void | Product {
        let index = this.findByName(name);
        // @ts-ignore
        if (index === -1) {
            console.log('khong co')
        } else {
            // @ts-ignore
            this.Productlist[index] = Product;
            console.log('sua thanh cong')
        }
    }

    findByName(name: string): string | Product {
        for (let i = 0; i < this.Productlist.length; i++) {
            if (name === this.Productlist[i].name) {
                console.log(this.Productlist[i]);
            }
        }
        return 'not';
    }

    remove(name: string): void | Product {
        let a = this.Productlist.filter((e) => e.name === name)
        console.log(a);
    }

    // @ts-ignore
    findByPrice(priceMin: number, priceMax: number): Product | number {
        let b = this.Productlist.filter((p) => {
            if (p.price >= priceMin && p.price <= priceMax) {
                return true
            } else {
                return false
            }
        });
        console.log(b)

    }

    findMintoMax() {
        for (let i = 0; i < this.Productlist.length; i++) {
            for (let j = 0; j < this.Productlist.length - i - 1; j++) {
                if (this.Productlist[j].price > this.Productlist[j + 1].price) {
                    let temp = this.Productlist[j]
                    this.Productlist[j] = this.Productlist[j + 1]
                    this.Productlist[j + 1] = temp
                }

            }

        }
        console.log()
    }

    finbByBrand(brand: string): string | Product {
        for (let i = 0; i < this.Productlist.length; i++) {
            if (brand === this.Productlist[i].brand) {
                return this.Productlist[i];
            }
        }
        return 'not';
    }

    sortMaxMin(price: number): void | Product {
        console.log(this.Productlist.sort((a, b) => a.price - b.price));
    }

    sortMinMax(price: number): void | Product {
        console.log(this.Productlist.sort((a, b) => a.price - b.price).reverse());
    }

    // findByCheck(): void{
    //     // @ts-ignore
    //     let p = /[n]/g
    //     console.log(p);
    // }

     findByCheck(name){
        let listFind = this.Productlist.filter((pro)=>{
            return pro.name.includes(name)
        });
         console.log(listFind);
     }
}