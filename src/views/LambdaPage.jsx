import React, { useState } from "react";
import LambdaList from "../components/list/LambdaList";
import { ContentWrapper } from "../components/Containers";
import listItems from "../content/list.json";
import "./page.css";

const LambdaPageView = () => {
  const [state, updateState] = useState({ listItems, isOn: false });
  return (
    <ContentWrapper>
      <h1>Example of using anonymous (lambda) functions in props for different components on the page.</h1>
        <p>While clicking the button, only button state gets updated, but still, all list items have been re-rendered.</p>
      <button
        type="button"
        className="switch-button"
        onClick={() => updateState({ ...state, isOn: !state.isOn })}
        style={{ background: state.isOn ? "#16a085" : "gray" }}
      >
        Click me
      </button>
      <h3>{`The state is "${state.isOn ? "ON" : "OFF"}"`}</h3>
      <LambdaList listItems={listItems} />
    </ContentWrapper>
  );
};

export default LambdaPageView;
