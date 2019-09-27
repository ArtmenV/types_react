import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { Store } from "./store";
import Counter from "./components/counter";

// interface IEpisode {
//   id: number;
//   name: string;
// }
const App: React.FC = () => {
  // const { state, dispatch } = React.useContext(Store);

  // React.useEffect(() => {
  //   state.episodes.lenght === 0 && fetchDataAction();
  // });

  // const fetchDataAction = async () => {
  //   const URL =
  //     "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  //   const data = await fetch(URL);
  //   const dataJSON = await data.json();
  //   return dispatch({
  //     type: "FETCH_DATA",
  //     payload: dataJSON._embedded.episodes
  //   });
  // };
  return (
    // <div className="App">
    //   {/* <Form /> */}
    //   {console.log(state)}
    //   <h1>Rick and Morty</h1>
    //   <p>Pick your favorite episode!!!</p>
    //   {/* <section> */}
    //     {/* {state.episodes.map((episode: any) => {
    //       return (
    //         <section key={episode.id}>
    //           <img
    //             src={episode.image.medium}
    //             alt={`Rick and Mort ${episode.name}`}
    //           />
    //           <div>{episode.name}</div>
    //         </section>
    //       );
    //     })}
    //   </section> */}
    //   {/* </div> */}
    <div>
      <Counter />
    </div>
  );
};

export default App;
