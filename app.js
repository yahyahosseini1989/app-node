const { createInterface } = require('readline')
const { writeFileSync } = require('fs')

const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('Product Name: ', (product) => {
	console.log('product :>> ', product);
	writeFileSync('product.txt', product)
	rl.close()
})