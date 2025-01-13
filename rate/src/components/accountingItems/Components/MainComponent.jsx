import React, { useState } from "react";
import style from "../accItems.module.css";
import TableItems from "./tableItems";
import FormCreateItem from "./FormCreateItem";

function MainComponent() {
  return (
    <div className={style.content}>
      <FormCreateItem />
      <TableItems />
    </div>
  );
}

export default MainComponent;
