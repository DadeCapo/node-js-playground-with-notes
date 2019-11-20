// object property shorthand

const name = 'Simon'
const userAge = 33

//shorthand if variable is the same as the property
const user = {
    //name: name, -- see below either one works
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// object destructuring

const product = {
    label: 'Red Book',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)