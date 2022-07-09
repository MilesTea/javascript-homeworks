const sizesTemplate = ['S','M','L'];
const sizesTemplateAlt = ['1', '2', '3'];

const catalog = [
    {
        id: 1,
        name: 'Ботинки',
        description: 'Описание ботинок',
        sizes: sizesTemplate,
        price: 100,
        available: true,
    },
]

const basket = [
    {
        good: 1,
        amount: 1,
    }
]


function addToCatalog(name, description, sizes, price, available = true) {
    let item = {
        id: catalog.length + 1,
        name: name, 
        description: description,
        sizes: sizes,
        price: price,
        available: available
    }
    catalog.push(item);
}

function addToBasket(id, amount = 1) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good == id) {
            basket[i].amount += amount;
            return
        }
    }
    if (catalog[id - 1].available == false) {
        console.log('не могу добавить товар: нет в наличии')
        return
    }
    let item = {
        good: id,
        amount: amount,
    }
    basket.push(item);
}

function removeFromBasketOne(id) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good == id) {
            basket.splice(i, 1);
            return
        }
    }
}

function removeFromBasketAll() {
    basket.length = 0
} 

function checkout() {
    let totalAmmount = 0;
    let totalSumm = 0;
    for (let i = 0; i < basket.length; i++) {
        totalAmmount += basket[i].amount
        totalSumm += catalog[basket[i].good - 1].price * basket[i].amount
    }
    let checkout = {
        totalAmmount: totalAmmount,
        totalSumm: totalSumm,
    }
    return checkout
}

// добавление това
addToCatalog('Рубашка', 'Описание рубашки', sizesTemplate, 170);
addToCatalog('Кофта', 'Описание кофты', sizesTemplate, 200);
addToCatalog('Джинсы', 'Описание джинс', sizesTemplate, 159);
addToCatalog('Майка', 'Описание майки', sizesTemplate, 150);
addToCatalog('Носки', 'Описание носков  ', sizesTemplateAlt, 25);
addToCatalog('Шорты', 'Описание шорт', sizesTemplate, 73);
addToCatalog('Кепка', 'Описание кепки', sizesTemplate,51 , false);
addToBasket(4, 1);
addToBasket(6, 4);
addToBasket(7)

// проверка подсчёта суммы
result = checkout()
console.log(`кол-во товаров: ${result.totalAmmount}`)
console.log(`общая сумма:    ${result.totalSumm}\n`)

// проверка удаления из корзины одного товара
removeFromBasketOne(4)
result = checkout()
console.log(`кол-во товаров: ${result.totalAmmount}`)
console.log(`общая сумма:    ${result.totalSumm}\n`)

// проверка удаления из корзины всех товаров
removeFromBasketAll()
result = checkout()
console.log(`кол-во товаров: ${result.totalAmmount}`)
console.log(`общая сумма:    ${result.totalSumm}`)