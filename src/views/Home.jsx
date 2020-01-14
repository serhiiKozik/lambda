import React from "react";
import { ContentWrapper } from "../components/Containers";
import lambdaProfile from "../assets/lamda-profile.png";
import referenceProfile from "../assets/reference-profile.png";

const Home = () => (
  <div className="App section">
    <h1 className="App-header">
      Performance impact of "lambda" functions in props
    </h1>
    <ContentWrapper>
      <article className="content">
        <h3>What is this all about.</h3>
        <p>
          <code>
            {"<button onClick={"}
            <b style={{ color: "red" }}>{"() => doStuff()"}</b>
            {"}> Click me </button>"}
          </code>
        </p>
        <p>
          When we are using the anonymous (<strong>lambda</strong>) function as
          a component <strong>prop</strong>, it will create new function on
          every render.
        </p>

        <h4>Why should it bother us?</h4>

        <p>
          Because{" "}
          <code>
            <b>() => doStuff()</b> === <b>() => doStuff() </b>
            -> will always be <b style={{ color: "red" }}>false</b>{" "}
          </code>
        </p>
        <p>
          It means React will consider that we passed new prop and will rerender
          the component, even though nothing is changed.
        </p>
        <h3>Is it so bad?</h3>
        <p>
          Not necessarily. If the component is quite simple, and rendering is
          cheep - it won't create any harm. But imagine the infinite scroll list
          that uses anonymous function for the list item prop. It will render
          all the list items again and again and probably could cause
          performance issue.
        </p>
        <h3>Numbers please.</h3>
        <p>
          As an example we will take a list with around 30 items. The list-items
          can be collapsed or expanded. We will measure performance using
          profiler tool. Our target will be the render duration after triggering
          collapse or expand function on a list item.
        </p>

        <h3> 1. Case one. Using lambdas in render.</h3>
        <p>
          The profiler shows <strong>Render duration: 14.7ms</strong> on average
          for the collapse/expand event. <br />
          And it has a linear dependency on the number of list items. <br />
          We can see that all the list items were rendered even though only one
          has been changed.
          <img
            className="profiler-screen"
            src={lambdaProfile}
            alt="React dev tools Profiler screen showing test with duration rate 14.2ms."
          />
        </p>

        <h4> 2. Case two. Using reference instead of lambdas.</h4>
        <p>
          The profiler shows <strong>Render duration: 1.1ms</strong> on average
          for the collapse/expand event. <br />
          And it does not matter how many items is in the list. <br />
          We can see that only one list item has been re rendered.
          <img
            className="profiler-screen"
            src={referenceProfile}
            alt="React dev tools Profiler screen showing test with duration rate 1.1ms."
          />
        </p>
        <h3>Try it yourself</h3>

        <i>Preconditions:</i>
        <ul>
          <li>Node 8+</li>
          <li>yarn or npm</li>
          <li>Google chrome browser</li>
          <li>React Developer Tools for Google chrome</li>
        </ul>
        <p>
          <b>Get started</b> <br />
          - clone the project to your local machine <br />
          - in the terminal go to the project directory
          <br />- run <strong>yarn start</strong> or <strong>npm start</strong>
          <br />- open <strong>localhost:3000</strong> in chrome <br />- open{" "}
          <strong>React Developer Tools</strong> <br />
          - navigate thru the pages, click on the list items and buttons and
          measure performance with profiler. <br />
        </p>
        <h3>Conclusion</h3>
        <p>
          It is better to avoid using anonymous (lambda) functions in props.
          Even if the performance impact is not noticeable it seems not right to
          waste resources for rendering components that haven't changed. Note
          that Performance impact will differ between different devices depend
          on CPU power.
        </p>
      </article>
    </ContentWrapper>
  </div>
);

export default Home;
