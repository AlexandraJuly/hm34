const products = [
    {
        category: 'Кофе',
        idCategory: 'category1',
        list: [
            {
                productName: 'Эспрессо',
                idProduct: '1',
                img: 'img/esp.jpg',
                price: '30',
                specification: {
                volume: '15мл',
                interrelation: 'воды и кофе 1:1',
                description: `Напиток приготовленный с помощью рожковой эспрессо-машины. Принципиальные различия во вкусе достигаются благодаря более длительному времени экстракции, за которое в чашку (крое эфирных масел) попадает и большее количество кофеина.`,
                }

            },
            {
                productName: 'Макиато',
                idProduct: '2',
                img: 'img/makiato.jpg',
                price: '35',
                specification: {
                volume: '30мл',
                interrelation: 'эспрессо и молочной пенки 1:0,3',
                description: `Шот эспрессо с небольшой дозой вспененного молока. Пенка буквально на мизинец покрывает поверхность кофе. Некоторые рецепты указывают еще меньший объем пенки (15мл), которую кладут чайной ложечкой по центру эспрессо.`,
                }
            },
            {
                productName: 'Капучино',
                idProduct: '3',
                img: 'img/cap.jpg',
                price: '40',
                specification: {
                volume: '150мл',
                interrelation: 'частей эспрессо, молока и пенки 1:1:1',
                description: `Эспрессо со вспененным молоком. Название происходит от ит. слова “капуцин” – отсылка к характерному красно-коричневому цвету роб у монашеского ордена капуцинов. В отличие от латте, подается, как и эспрессо, в предварительно прогретой кофейной чашке на 150–180 мл. Если сравнивать латте и капучино – молока больше в латте, о нём дальше.`,
                }
            },
            {
                productName: 'Латте',
                idProduct: '4',
                img: 'img/lat.jpg',
                price: '40',
                specification: {
                volume: '180мл',
                interrelation: 'эспрессо, молока и пенки 1:3-5:1',
                description: `Международный напиток из эспрессо со вспененным молоком. В 240 мл стакан добавляют шот эспрессо, который заливают молоком с молочной пенкой. Толщина пенки 12мм. В отличие от капучино, в латте кроме пенки есть еще и слой молока. Будьте внимательн, когда заказываете напиток в Европе. Сказав просто “Латте” – в Италии вам подадут молоко, во Франции – кофе с молоком.`,
                }
            },
            {
                productName: 'Меланж',
                idProduct: '5',
                img: 'img/mel.jpg',
                price: '45',
                specification: {
                volume: '150мл',
                interrelation: 'эспрессо, молока и пенки 1:1:0,3',
                description: `Что-то среднее между латте и капучино. Имеет равное соотношение молока и кофе. Сверху добавляют молочную пенку. Подается в большой кофейной чаше, по типу капучино. В самой Вене называют просто Меланж.`,
                }
            },
            {
                productName: 'Кофе по-ирландски',
                idProduct: '6',
                img: 'img/irl.jpg',
                price: '50',
                specification: {
                volume: '70мл',
                interrelation: 'эспрессо, виски, молочная пенка 2:1:2',
                description: `Горячий коктейль на основе ирландского виски и эспрессо. Порядок приготовления: сахар растворить в эспрессо, долить виски, сверху покрыть шапочкой из взбитого молока. Вот хороший вариант кофе для этого напитка.`,
                }
            }
        ]
    },
    {
        category: 'Чай',
        idCategory: 'category2',
        list: [
            {
                productName: 'Белый',
                idProduct: '1',
                img: 'img/white.jpg',
                price: '50',
                specification: {
                volume: '500мл',
                interrelation: '5гр',
                description: `Увядший и не окисленный. Производят из молодых листьев и нераспустившихся почек. Подвергают минимальной обработке, но он имеет достаточно высокую степень окисления, а значит, его настой будет темнее, чем желтого или зеленого чая.`,
                }

            },
            {
                productName: 'Зеленый',
                idProduct: '2',
                img: 'img/green.jpg',
                price: '50',
                specification: {
                volume: '500мл',
                interrelation: '5гр',
                description: `Не увядший и не окисленный. Наименьшая степень окисления собранного чая. Особенность обработки: нагревая чайное сырье, быстро останавливают процесс ферментации (не позднее двух дней). А уже в зависимости от способа нагрева – обжариванием или паром – будут отличаться вкус и цвет готового напитка.`,
                }
            },
            {
                productName: 'Желтый',
                idProduct: '3',
                img: 'img/yel.jpg',
                price: '50',
                specification: {
                volume: '500мл',
                interrelation: '5гр',
                description: `Не увядший и не окисленный, но его «томят». Изготавливают так же, как и зеленый, но вместо быстрого нагрева листья томят во влажной среде, что придает чаю желтоватый оттенок.`,
                }
            },
            {
                productName: 'Улун',
                idProduct: '4',
                img: 'img/lun.jpg',
                price: '50',
                specification: {
                volume: '500мл',
                interrelation: '5гр',
                description: `Увядший, смятый и частично окисленный. Чай средней ферментации, имеющий особый неповторимый вкус. Его обработка занимает всего два-три дня, поэтому малоокисленный улун больше похож на зеленый чай. Однако листья могут подвергаться и более сильному окислению, тогда чай становиться по своим характеристикам ближе к черному.`,
                }
            },
            {
                productName: 'Черный (красный)',
                idProduct: '5',
                img: 'img/bl.jpg',
                price: '50',
                specification: {
                volume: '500мл',
                interrelation: '5гр',
                description: `Увядший, иногда раздробленный и полностью окисленный. Чайные листья почти полностью окисляются в течение длительного времени. После чего проходят дальнейшую обработку.`,
                }
            },
            {
                productName: 'Пуэр',
                idProduct: '6',
                img: 'img/pu.jpg',
                price: '50',
                specification: {
                volume: '500мл',
                interrelation: '5гр',
                description: ` Зеленый чай, который подвергается повторному циклу окисления. Изготавливается, как правило, из почек и листьев старых чайных кустов. Различают пуэр шу (состаренный, готовый) и пуэр шен (молодой, зеленый).`,
                }
            }
        ]
    }
]

const categoryBlock = document.querySelector('.category_block');
const productBlock = document.querySelector('.product_block');
const specificationBlock = document.querySelector('.specification_block');
const basketButton = document.querySelector('.basket__button');
const orderCounter = document.querySelector('.basket__order_counter');

function creatingCategoriesList () {
    categoryBlock.innerHTML = '';
    productBlock.innerHTML = '';
    categoryBlock.insertAdjacentHTML('beforeend', `<ul class="category_list"></ul>`);
    const categoryList = document.querySelector('.category_list');
    for (let el of products){
        categoryList.insertAdjacentHTML('beforeend', `<li class="category_element" id="${el.idCategory}"> ${el.category}</li>`);
    }
}

function eventCreatingProductList (event) {
    if (Array.from(event.target.classList).includes("category_element")){
        productBlock.innerHTML = '';
        specificationBlock.innerHTML = '';
        productBlock.dataset.idCategory = event.target.id;
        let productList = '';
        const requestedCategories = products.find(element => element.idCategory === (event.target.id)).list;
        for (let element of requestedCategories) {
            productList += `<div class='product_card' id='${element.idProduct}'>  
                <img class="product_card__img" src="${element.img}"> 
                <h2 class="product_card__title">${element.productName}</h2>  
                <p class="product_card__price"> ${element.price} грн.</p></div>`
        }
        productBlock.insertAdjacentHTML('beforeend', productList);
        return requestedCategories;
    }
}

function eventCreatingSpecificationProduct(event) {
    if (Array.from((event.target.parentNode).classList).includes("product_card")){
        specificationBlock.innerHTML = '';
        let requestedCategories = products.find(element => element.idCategory === (productBlock.dataset.idCategory)).list;
        let requestedProduct = requestedCategories.find(element => element.idProduct === ((event.target.parentElement).id));
        let specification = `<img class="specification_block__img" src="${requestedProduct.img}"> 
                <h2 class="specification_block__title">${requestedProduct.productName}</h2>  
                <p class="specification_block__price"> ${requestedProduct.price} грн.</p> 
                <p class="specification_block__specification"> 
                <b>*объем:</b>   ${requestedProduct.specification.volume}<br>
                <b>*соотношение:</b>  ${requestedProduct.specification.interrelation} <br>
                <b>*описание:</b>   ${requestedProduct.specification.description}</p> 
                <button class="specification_block__button"> BUY </button>`;
        specificationBlock.insertAdjacentHTML('beforeend', specification);
        const byu = document.querySelector('.specification_block__button');
        byu.addEventListener('click', addOrderInBasket.bind(requestedProduct));
    }
}

function message (){
    document.body.insertAdjacentHTML('afterbegin', `<div class="message_block"> Товар Преобретен </div>`);
    let messageBlock = document.querySelector('.message_block');
    setTimeout(()=>{messageBlock.remove();
        specificationBlock.innerHTML = "";
        productBlock.innerHTML = '';}, 2000);
}

function recordDate () {
    let date = new Date();
    return date.toLocaleString()
}

function checkOrderInBasket () {
    if (window.localStorage.basket) {
        let localBasket = JSON.parse(window.localStorage.getItem('basket'))
        orderCounter.innerText = localBasket.length
    } else {
        orderCounter.innerText = '0'
    }
}

function addOrderInBasket (){
    let order = {
        img: this.img,
        idProduct: this.idProduct,
        productName: this.productName,
        price: this.price,
        date: recordDate(),
        delivery: 'Нова Пошта',
        deliveryAddress: 'м.Одесса, відділення №13'
    }
    if (!window.localStorage.basket){
        window.localStorage.setItem('basket', '[]')
        addOrderInBasket.bind(this)()
    } else {
        let localBasket = JSON.parse(window.localStorage.getItem('basket'));
        localBasket.push(order);
        window.localStorage.setItem('basket', JSON.stringify(localBasket))
        checkOrderInBasket()
        message ()
    }
}

function eventCreatingBasketList () {
    if(!window.localStorage.basket) {
        alert('У вас немає замовлень')
    } else {
        categoryBlock.innerHTML = "";
        let localBasket = JSON.parse(window.localStorage.getItem('basket'));
        let BasketList = `<div class='basket_block'>
        <button class="basket_block__button"> Повернутися до категорій</button>
        <ol class="basket_block__list">`
        for (let element of localBasket) {
            BasketList += `
                <li class="basket_block__element" data-index-basket="${localBasket.indexOf(element)}">
                    <h3 class="basket_block__title">${element.productName}</h3>
                    <p class="basket_block__prise">${element.price} грн.</p>
                    <p class="basket_block__date">${element.date}</p>
                    <img class="basket_block__del"  src="img/del.png">
                </li>`
        }
        BasketList += '</ol></div>'
        categoryBlock.insertAdjacentHTML('beforeend', BasketList)
        let buttonReturnCategory = document.querySelector('.basket_block__button')
        buttonReturnCategory.addEventListener('click', creatingCategoriesList)
        let listBasket = document.querySelector('.basket_block__list')
        listBasket.addEventListener('click', eventDelOrderAndCreatingOrderInfo)
    }
}

function eventDelOrderAndCreatingOrderInfo (event){
    if (Array.from((event.target).classList).includes("basket_block__del")) {
        let localBasket = JSON.parse(window.localStorage.getItem('basket'));
        localBasket.splice((event.target.parentNode.dataset.indexBasket), 1)
        if (localBasket.length===0) {
            window.localStorage.removeItem('basket');
            productBlock.innerHTML = '';
            creatingCategoriesList();
        } else {
            window.localStorage.setItem('basket', JSON.stringify(localBasket));
            eventCreatingBasketList()
        }
        checkOrderInBasket ()
    }
    let localBasket = JSON.parse(window.localStorage.getItem('basket'));
    let orderBasket = localBasket[event.target.parentNode.dataset.indexBasket];
    productBlock.innerHTML = '';
    let orderDetails = `<div class="order" >
            <div class="order__body">
                <h3 class="order__title">${orderBasket.productName}</h3>
                <p class="order__date">Дата оформлення: ${orderBasket.date}</p>
                <p class="order__prise">Вартість: ${orderBasket.price} грн.</p>
                <p class="order__info">Спосіб доставки: ${orderBasket.delivery}</p>
                <p class="order__info">Адреса доставки: ${orderBasket.deliveryAddress}</p></div></div>`
    productBlock.insertAdjacentHTML('beforeend', orderDetails)
}

creatingCategoriesList ();
categoryBlock.addEventListener('click', eventCreatingProductList);
productBlock.addEventListener('click', eventCreatingSpecificationProduct);
basketButton.addEventListener('click', eventCreatingBasketList);
checkOrderInBasket();