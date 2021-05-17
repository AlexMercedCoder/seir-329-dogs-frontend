import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

function App() {

  // URL in a variable
  const url = "http://localhost:4500"

  // State to hold the list of dogs
  const [dogs, setDogs] = React.useState([])

  // Function to get list of Dogs
  const getDogs = () => {
  // make a get a request to this url
  fetch(url + "/dog/")
  // use .then to take action when the response comes in
  // convert data into js object
  .then((response) => response.json())
  // use the data from the response
  .then((data) => {
    setDogs(data)
  })
  }

  // useEffect, to get the data right away
  React.useEffect(() => {
    getDogs()
  }, [])


  return (
    <div className="App">
      <h1>DOG LISTING SITE</h1>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Display {...rp} dogs={dogs}/>} />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" dog={{}} handleSubmit={() => {}} />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" dog={{}} handleSubmit={() => {}} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
