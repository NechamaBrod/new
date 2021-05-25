square = (x) -> x * x
cube = (x) -> square(x) * x


console.log cube(12)


author = "Wittgenstein"
quote = "A picture is a fact. -- #{ author }"

sentence = "#{ 22 / 7 } is a decent approximation of π"

console.log """Call me Ishmael. Some years ago --
            never mind how long precisely -- having little
            or no money in my purse, and nothing particular
            to interest me on shore, I thought I would sail
            about a little and see the watery part of the
            world...""";

kids = 
	brother:
		name: "Menachen"
		age:20
	sister:
		name:"Yehudit"
		age:4
console.log kids

console.log if kids and kids.brother then kids.brother else "null"

gold = silver = rest = "unknown"

awardMedals = (first, second, others...) ->
  gold   = first
  silver = second
  rest   = others

contenders = [
  "Michael Phelps"
  "Liu Xiang"
  "Yao Ming"
  "Allyson Felix"
  "Shawn Johnson"
  "Roman Sebrle"
  "Guo Jingjing"
  "Tyson Gay"
  "Asafa Powell"
  "Usain Bolt"
]

awardMedals contenders...

console.log """
Gold: #{gold}
Silver: #{silver}
The Field: #{rest.join ', '}
"""

popular  = ['pepperoni', 'sausage', 'cheese']
unwanted = ['anchovies', 'olives']

all = [popular..., unwanted..., 'mushrooms']
console.log all

# Eat lunch.
eat = (food) -> "#{food} eaten."
eat food for food in ['toast', 'cheese', 'wine']

# Fine five course dining.
courses = ['greens', 'caviar', 'truffles', 'roast', 'cake']
menu = (i, dish) -> "Menu Item #{i}: #{dish}" 

console.log menu i + 1, dish for dish, i in courses

# Health conscious meal.
foods = ['broccoli', 'spinach', 'chocolate']
console.log eat food for food in foods when food isnt 'chocolate'

console.log '1234'