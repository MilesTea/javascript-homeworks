class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    set setAvailable(available) {
        if (typeof available == 'boolean') {
            this.available = available
        } else {
            throw 'Can\'t set availability to non boolean'
        }
    }
}



class GoodsList{
    #goods;
    constructor(goods, filter, sortPrice=true, sortDir=true) {
        this.#goods = goods;
        this.filter = filter;
        this.sortPrice = sortPrice;
        if (this.sortPrice) {
            if (sortDir) {
                this.sorting = (good1, good2) => (good1.price >= good2.price) ? 1 : -1;
            } else {
                this.sorting = (good1, good2) => (good1.price <= good2.price) ? 1 : -1;
            }
        }

    }
    get list() {
        const filtered = this.#goods.filter(good => (this.filter.test(good.name)) ? 1 : -1)
        if (this.sortPrice) {
            let result = filtered.sort(this.sorting);
            return result;
        } else {return filtered}
    }
    add(good) {
        if (good instanceof Good) {
            this.#goods.push(good);
        } else throw 'Can\'t add: not instance of class \'Good\''
    }
    remove(id) {
        for(let i = 0; i < this.#goods.length; i++) {
            if (this.#goods[i].id === id) {
                this.#goods.splice(i, 1);
                return
            }
        }
    }

}


class BasketGood extends Good {
    constructor(amount, ...args) {
        super(...args);
        this.amount = amount;
    }
}

class Basket {
    constructor(goods) {
        this.goods = goods;
    }
    get totalAmount() {
        let amount = 0;
        this.goods.forEach((element, index) => (amount += element.price * element.amount));
        return amount
    }
    get totalSum() {
        let sum = 0;

        return this.goods.reduce((total, element) => (total += element.amount), 0);
    }
    add(good, amount) {
        for(let i = 0; i < this.goods.length; i++) {
            if (good.id == this.goods[i].id) {
                this.goods.amount += amount;
                return
            }
        }
        let basketGood = new BasketGood(amount, good.id, good.name, good.description, good.sizes, good.price, good.available)
        this.goods.push(basketGood);
    }
    remove(good, amount) {
        for(let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                this.goods[i].amount -= amount;
                if (this.goods[i].amount === 0)
                {
                    this.goods.splice(i, 1);
                }
                return
            }
        }
    }
    clear() {
        this.goods.length = 0
    }
    removeUnavailable() {
        for(let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].available === false)
            {
                this.goods.splice(i, 1);
            }
        return
        }
    }
}

good1 = new Good(1, 'Джинсы', 'Описание', [1,2,3], 40, true);
good2 = new Good(2, 'Майка', 'Описание', [1,2,3], 30, true);
good3 = new Good(3, 'Носки', 'Описание', [1,2,3], 5, true);
good4 = new Good(4, 'Рубашка', 'Описание', [1,2,3], 50, false);
good5 = new Good(5, 'Кепка', 'Описание', [1,2,3], 20, true);
good6 = new Good(6, 'Шорты', 'Описание', [1,2,3], 25, true);

goodsList = new GoodsList([good1,good2,good3,good4,good5,good6], /\w*/);

basket = new Basket([]);

basket.add(goodsList.list[1], 2);
basket.add(goodsList.list[2], 6);
basket.add(good4, 1);
basket.add(good2, 5);
basket.add(good6, 1)

console.log(goodsList.list)
console.log(`кол-во: ${basket.totalSum}`)
console.log(`цена: ${basket.totalAmount}`)