import React from "react";
import { ContentWrapper } from "../components/Containers";
import LambdaList from "../components/list/LambdaList";
import listItems from "../content/list.json";
import { codeSnippets } from "../content/codeSnippets";
import { CopyBlock, github } from "react-code-blocks";

const LambdaListView = () => (
  <ContentWrapper>
    <h1>List view example using lambda function in props of list item.</h1>
    <CopyBlock
      language="jsx"
      theme={github}
      text={codeSnippets.lambda}
      wrapLines={true}
      highlight="18"
      codeBlock
    />
    <LambdaList listItems={listItems} />
  </ContentWrapper>
);

export default LambdaListView;
