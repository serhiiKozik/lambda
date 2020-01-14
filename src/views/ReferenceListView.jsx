import React from "react";
import ListNotUsingLambda from "../components/list/ReferenceList";
import listItems from "../content/list.json";
import { ContentWrapper } from "../components/Containers";
import { CopyBlock, github } from "react-code-blocks";
import { codeSnippets } from "../content/codeSnippets";

const ReferenceListView = () => (
  <ContentWrapper>
    <h1>List example using reference instead of lambda function.</h1>
    <CopyBlock
      theme={github}
      language="jsx"
      text={codeSnippets.reference}
      highlight="4,5,16"
      wrapLines
      codeBlock
    />
    <ListNotUsingLambda listItems={listItems} />
  </ContentWrapper>
);

export default ReferenceListView;
