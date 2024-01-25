class Food {
	constructor(name) {
		this.name = name;
		this.brands = [];
	}
	addBrand(brand) {
		this.brands.push(brand);
	}
	print() {
		console.log(`${this.name}을/를 파는 음식점들:`);
		console.log(this.brands.join(', '));
	}
}

class Pizza extends Food {
	constructor(name) {
		super(name);
	}	
}

class Chicken extends Food {
	constructor(name) {
		super(name);
	}	
}
pizza = new Pizza('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노피자');

chicken = new Chicken('치킨');
chicken.addBrand('BBQ');
chicken.addBrand('BHC');

pizza.print();
chicken.print();
