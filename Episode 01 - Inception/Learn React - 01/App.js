const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
