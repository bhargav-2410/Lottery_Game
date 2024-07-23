import React from "react";
import Lottery from "./Lottery";
import TicketNum from "./Ticket";
import Ticket from "./Ticket";
import Form from "./Form";
import Joker from "./Joker";

function App() {
  return (
    <div>
      <Lottery n="3" winningSum="15" />
    </div>
  );
}

export default App;
