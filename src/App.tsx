import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import Icons from "./icons";

import "./global.css";

import { ExpensesPage } from "../src/pages/ExpensesPage";

library.add(Icons);

function App() {
  return <ExpensesPage />;
}

export default App;
