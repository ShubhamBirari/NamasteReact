# Episode 1 - Inception

1. Learnt how to create an HTML file and run it inside a browser.
2. Add React into the HTML file using the [CDN links](https://legacy.reactjs.org/docs/cdn-links.html).
3. The CDN has two scripts `React` and `ReactDOM`.
   1. React - This is the root javascript library that is used to add React and create elements in our application.
   2. ReactDOM - This library is used to inject the react code into out HTML file.
4. `createElement` : This is a method of React library that returns an object of the element that we want to display. For example if we want to create an element of `h1` tag the syntax will be as follows

```
const heading = React.createElement("h1", {}, "Hello World");

// h1 - This is the name of html tag
// {} - It is an attributes object where we can mentions all the attributes we want. to give to this html element. Eg. id, class, style, etc.
// "Hello World" - This param contains what exactly we want to display inside the element. It could be a simple text or an another html element.
```

5. `createRoot`: This method is used to inject the React element in our HTML file. It is the method of ReactDOM library. This method gives us the flexibility of adding react wherever we want in the html code. The syntax of this is as follows

```
// `injectReact` is nothing but an id of an html element
// in our HTML code where we want to add React.

const root = ReactDOM.createRoot(document.getElementById('injectReact'));
root.render(heading)
```

6. We can separate out javascript code by creating a `.js` file and add all our javascript in it instead of writing every thing in the HTML file. We will have to include this file in the HTML.
7. We can add nested elements as well

```
<div>
	<h1>Hello World</h1>
<div>
```

The syntax to create above element is as follows

```
const container =
	React.createElement(
		"div",
		{},
		React.createElement("h1", {}, "Hello World");
	);
```

8. If we want to add multiple child elements then we have to pass the objects in a form of an array. The syntax would be

```
<div>
	<h1>H1 tag</h1>
	<h2>H2 tag</h2>
<div>
```

```
const container =
	React.createElement(
		"div",
		{},
		[
			React.createElement("h1", {}, "H1 tag"),
			React.createElement("h2", {}, "H2 tag"),
		];
	);
```
