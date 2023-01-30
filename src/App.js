import { createContext, useState } from "react";
import PlayerList from "./components/player-list/player-list";

export const AppContext = createContext();

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <AppContext.Provider value={{players, setPlayers}}>
        <h1 className="main-header">UNO Counter</h1>
        <PlayerList/>
    </AppContext.Provider>
  );
}

export default App;
