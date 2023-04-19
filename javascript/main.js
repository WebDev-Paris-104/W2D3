/**
 * How can I select an element from the HTML
 * and manipulate it in my JavaScript file??
 */
console.log("Is it ok?")
// aVariable = "Freeeee"
// console.log(aVariable)
console.log(document)

const h1Element = document.querySelector("h1")
console.log(h1Element)
console.log(h1Element.innerText)
// h1Element.innerText = "Wow, we can do that?"
/**
 * Let's modify my h1 text, where will my console.log
 * appear?
 */

/**
 * Two grand types of modifications:
 * - Automatic, after a certain delay
 * (Think setTimeout, setInterval)
 * - Due to an event
 * (The user clicked somewhere, moved the mouse, scrolled...)
 */

setTimeout(() => {
	h1Element.innerText = "Modified after 3 seconds"
}, 3000)

/**
 * Automatic counter
 */
const h2Element = document.querySelector("h2")

setInterval(() => {
	// h2Element.innerText++
	let value = parseInt(h2Element.innerText)
	value += 1
	h2Element.innerText = value
}, 1000)

/**
 * Reset the counter
 */

const resetButton = document.querySelector("#reset-counter")
const weirdWayOfAskingElement = document.querySelectorAll("#reset-counter")
console.log(resetButton)
resetButton.addEventListener("click", (event) => {
	// console.log("clickety click")
	// console.log(event.target)
	h2Element.innerText = 0
})

/**
 * querySelector, querySelectorAll loves CSS
 */
const allTheCards = document.querySelectorAll(".card")

/**
 * querySelectorAll create a NodeList which is an
 * Array-like Object.
 * We can access specific index like in an Array.
 * To loop over it we can use the old-for, for of and forEach
 */
console.log(allTheCards[0].innerText)
console.log(allTheCards[0])

allTheCards.forEach((cardElement) => {
	const nestedPTag = cardElement.querySelector("p")
	setInterval(() => {
		nestedPTag.style.color = randomColor()
	}, 100)
})
function randomColor() {
	// hsl(180, 50%, 50%)
	return `hsl(${Math.random() * 360}, 80%, 40%)`
}

/**
 * querySelector don't need to always start from the document.
 * They can start from an other element and search
 * within this element.
 */

/**
 * Older ways of accessing DOM elements.
 * The most important one is
 * querySelector querySelectorAll
 */

const selectedById = document.getElementById("first-paragraph")
console.log(selectedById)
const firstParagraphElement = document.querySelector(".text-element")
console.log(firstParagraphElement)
// getElementById
// getElementsByClassName
// GetElementByTagName

/**
 * When querying an element, we go down the HTML tree
 * How could we "climb up" ?? We will re-use that later.
 */
console.log(
	"Parent of the first-paragraph:",
	selectedById.parentElement.parentElement.parentElement
)
console.log(selectedById.closest("section"))

/**
 * We can modify / access any attributes from and HTML element
 * using the dot notation or the methods
 * getAttribute and setAttribute
 */

selectedById.id = "woooow"
console.log(selectedById.id)
selectedById.setAttribute("class", "added-class-via-js another-one")

/**
 * classes: className versus classList 🤺
 */

console.log(selectedById.className)
selectedById.classList.remove("added-class-via-js")

const allTextElements = document.querySelectorAll(".text-element")

allTextElements.forEach((element) => {
	element.classList.add("make-it-awesome")

	element.addEventListener("click", (event) => {
		console.log(event.target)
		element.classList.add("hidden")
		setTimeout(() => {
			element.classList.remove("hidden")
		}, 1000)
	})

	// element.style.backgroundColor = "black"
	// element.style.color = "dodgerblue"
	// element.style.textTransform = "lowercase"
	// element.style.fontFamily = "sans-serif"
	// element.style.fontWeight = 700
	// element.style.letterSpacing = "0.1rem"
})

/**
 * We can use JavaScript to create HTML Nodes and append them
 * somewhere in the HTML document!
 */

const bodyElement = document.querySelector("body")
const sectionElement = document.querySelector("section.section-one")
const myCreatedDiv = document.createElement("div")
myCreatedDiv.classList.add("container")
// sectionElement.append(myCreatedDiv)
// bodyElement.prepend(myCreatedDiv)

for (let i = 0; i < 10; i++) {
	const img = document.createElement("img")
	img.src = "https://picsum.photos/200/600?random=" + i
	myCreatedDiv.append(img)
}

bodyElement.append(myCreatedDiv)

/**
 * Appending should not be forgotten if you want your created
 * Elements to be seen :)
 */

/**
 * Now that's great but we would like to remove some elements!
 */

/**
 * Differences between innerHTML and innerText
 */

/**
 * Input, I value you, how can I get your value?
 */
const myInput = document.querySelector('input[type="text"]')
const myGroceryList = document.querySelector("#grocery-list")
const groceryButton = document.getElementById("grocery-list-button")
console.log(myInput.value)

groceryButton.addEventListener("click", () => {
	// Do the check
	// If the value does not match criterions
	// just return
	const itemToAdd = myInput.value
	const liElement = document.createElement("li")
	liElement.innerText = itemToAdd
	myGroceryList.append(liElement)
	myInput.value = ""
	liElement.addEventListener("click", (event) => {
		const element = event.target
		element.remove()
	})
	// myGroceryList.innerHTML += itemToAdd
})

// const list = `
// <li>Vege Poke-Bowl</li>
// <li>Tomatoes</li>
// <div style="height: 100vh">Surprise!</div>
// `
// myGroceryList.innerHTML = list
/**
 * Let's now talk about events
 * We're going to create:
 * - An empty list. When we click on a button one of you name is
 * going to be appended.
 * - A shopping list.
 * -A random idea?
 *
 * Available events:
 * - click
 * - dblclick
 * - mouseenter
 * - mouseleave
 * - focus
 * - blur // opposite of focus
 * - keydown
 * - keyup
 * - input
 */

const exercisesTitle = document.querySelector("h2.exercises")

exercisesTitle.addEventListener("mouseenter", modifyTheTitle)
exercisesTitle.addEventListener("mouseleave", resetTheTitle)

function resetTheTitle(event) {
	const element = event.target
	element.classList.remove("hovering")
	element.innerText = "Not hovering anymore"
}
function modifyTheTitle(event) {
	const element = event.target
	element.innerText = "We are hovering the title !"
	element.classList.add("hovering")
}

let i = 0

function call() {
	// Base condition in recursion
	if (i > 10000) {
		return
	}
	i++
	console.log(i)
	call()
}

call()
