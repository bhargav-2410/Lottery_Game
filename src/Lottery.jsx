import React from "react";
import { useState } from "react";
import "./App.css";
import "./helper.js";
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import "./Lottery.css";

function Lottery({ n, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === 15;
  const buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />

      <button onClick={buyTicket} className="button">
        Buy New Ticket
      </button>
      <h2>{isWinning && "Congratulations! you won."}</h2>
    </div>
  );
}

export default Lottery;
