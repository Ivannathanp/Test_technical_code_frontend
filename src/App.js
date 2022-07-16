import logo from "./logo.svg";
import react, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [number, setNumber] = useState();
  const [data, setData] = useState([]);

  async function GetPrime() {
    console.log(number)
    axios({
      method: "post",
      url: "http://localhost:5000/api/prime",
      data: {
        number: number,
      },
    }).then((response) => {
      console.log(response.data.data);
      setData([response.data.data]);
    });
  }

  async function GetOdd() {
    console.log(number)
    axios({
      method: "post",
      url: "http://localhost:5000/api/ganjil",
      data: {
        number: number,
      },
    }).then((response) => {
      console.log(response.data.data);
      setData([response.data.data]);
    });
  }

  // async function GetTriangle() {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:5000/api/triangle",
  //     data: {
  //       number: number,
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     setData([response]);
  //   });
  // }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div>
          {/* <button type="button" onClick={GetTriangle}>
            Generate Segitiga
          </button> */}
          <button type="button" onClick={GetOdd}>
            Generate Bilangan Ganjil
          </button>
          <button type="button" onClick={GetPrime}>
            Generate Bilangan Prima
          </button>
        </div>
      </form>

      <div>
        <div>Result:</div>
        {data.map((post, index) => {
      console.log(post)
   
          return <div>{post}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
