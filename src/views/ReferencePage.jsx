import React, { useState } from "react";
import ListNoLambda from "../components/list/ReferenceList";
import { ContentWrapper } from "../components/Containers";
import listItems from "../content/list.json";
import "./page.css";

const LambdaPageView = () => {
  const [state, updateState] = useState({ listItems, isOn: false });
  console.log("button state: ",state.isOn);
  return (
    <ContentWrapper>
      <h1>Example of using function reference in props.</h1>
        <p>While clicking the button, only the button state gets updated, and the list has not been re-rendered.</p>
      <button
        type="button"
        className="switch-button"
        onClick={() => updateState({ ...state, isOn: !state.isOn })}
        style={{ background: state.isOn ? "#16a085" : "gray" }}
      >
        Click me
      </button>
      <h3>{`The state is "${state.isOn ? "ON" : "OFF"}"`}</h3>
      <ListNoLambda listItems={listItems} />
    </ContentWrapper>
  );
};

export default LambdaPageView;
