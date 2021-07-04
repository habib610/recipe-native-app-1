class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affordability,
		imageUrl,
		steps,
		duration,
		ingredients,
		complexity,
		isGlutenFree,
		isVegan,
		isVegetarian,
		isLactoseFree
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordability = affordability;
		this.steps = steps;
		this.imageUrl = imageUrl;
		this.duration = duration;
		this.ingredients = ingredients;
		this.complexity = complexity;
		
		this.isGlutenFree = isGlutenFree;
		this.isVegan = isVegan;
		this.isVegetarian = isVegetarian;
		this.isLactoseFree = isLactoseFree;
	}
}
export default Meal;