import React from "react";
import { buyIceCream } from "../redux/index";
import { useDispatch, useSelector } from "react-redux";

function IceCreamContainer() {
  const dispatch = useDispatch();
  const numberOfIceCreams = useSelector(
    (state) => state.icecream.numberOfIceCreams
  );
  return (
    <div>
      <h2>Number of IceCream - {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
    </div>
  );
}

export default IceCreamContainer;
