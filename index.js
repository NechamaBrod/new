// Generated by CoffeeScript 2.5.1
(function() {
	var all, author, awardMedals, contenders, courses, cube, dish, eat, food, foods, gold, i, j, k, kids, l, len, len1, len2, menu, popular, quote, ref, rest, sentence, silver, square, unwanted;

	square = function(x) {
		return x * x;
	};

	cube = function(x) {
		return square(x) * x;
	};

	console.log(cube(12));

	author = "Wittgenstein";

	quote = `A picture is a fact. -- ${author}`;

	sentence = `${22 / 7} is a decent approximation of π`;

	console.log(`Call me Ishmael. Some years ago --
never mind how long precisely -- having little
or no money in my purse, and nothing particular
to interest me on shore, I thought I would sail
about a little and see the watery part of the
world...`);

	kids = {
		brother: {
			name: "Menachen",
			age: 20
		},
		sister: {
			name: "Yehudit",
			age: 4
		}
	};

	console.log(kids);

	console.log(kids && kids.brother ? kids.brother : "null");

	gold = silver = rest = "unknown";

	awardMedals = function(first, second, ...others) {
		gold = first;
		silver = second;
		return rest = others;
	};

	contenders = ["Michael Phelps", "Liu Xiang", "Yao Ming", "Allyson Felix", "Shawn Johnson", "Roman Sebrle", "Guo Jingjing", "Tyson Gay", "Asafa Powell", "Usain Bolt"];

	awardMedals(...contenders);

	console.log(`Gold: ${gold}
Silver: ${silver}
The Field: ${rest.join(', ')}`);

	popular = ['pepperoni', 'sausage', 'cheese'];

	unwanted = ['anchovies', 'olives'];

	all = [...popular, ...unwanted, 'mushrooms'];

	console.log(all);

	// Eat lunch.
	eat = function(food) {
		return `${food} eaten.`;
	};

	ref = ['toast', 'cheese', 'wine'];
	for (j = 0, len = ref.length; j < len; j++) {
		food = ref[j];
		eat(food);
	}

	// Fine five course dining.
	courses = ['greens', 'caviar', 'truffles', 'roast', 'cake'];

	menu = function(i, dish) {
		return `Menu Item ${i}: ${dish}`;
	};

	for (i = k = 0, len1 = courses.length; k < len1; i = ++k) {
		dish = courses[i];
		console.log(menu(i + 1, dish));
	}

	// Health conscious meal.
	foods = ['broccoli', 'spinach', 'chocolate'];

	for (l = 0, len2 = foods.length; l < len2; l++) {
		food = foods[l];
		if (food !== 'chocolate') {
			console.log(eat(food));
		}
	}

	console.log('1234');

}).call(this);


foo = "23"
bar = 23

console.log((foo==bar)+" "+(foo===bar))
console.log(typeof(foo)+" "+typeof(bar))
