import MyCounter from "./components/MyCounter";
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        Travis Brase - m63r576
      </h2>

      <hr />
      <MyCounter incBy={1}/><hr />
      <MyCounter incBy={2} decBy={3}/><hr />
      <MyGitHub /><hr />

    </div>
  );
}

export default App;
