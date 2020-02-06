const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Princy",
      animal: "Dog",
      breed: "Shepherd"
    }),
    React.createElement(Pet, { name: "Simba", animal: "Dog", breed: "Lab" }),
    React.createElement(Pet, { name: "Athena", animal: "Cat", breed: "Doink" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
