//import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);

  useEffect(() => {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  });

  return <h1>Hello</h1>;
}

function App() {
  /*const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run every time");
  useEffect(() => {
    console.log("i run only once");
  });
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("run when counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes");
  }, [keyword, counter]); */
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    /*<div>
      <h1 className={styles.title}>Hello World</h1>
      <input
        value={keyword}
        onChagne={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      </div> */
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
