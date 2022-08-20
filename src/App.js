import "./App.css"
// import FetchApi from "./fetch-api-demos/FetchApi"
import FetchApi2ndDemo from "./fetch-api-demos/FetchApi2ndDemo"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import FetchApi from "./fetch-api-demos/FetchApi"
import UseEffect1Component from "./use-effect-demos/UseEffect1Component"
import UseEffect2Component from "./use-effect-demos/UseEffect2Component"

const fetchApiDemoItem = {
  path: "/fetch-api-demo-random-user-profile",
  title: "Fetch Api Demo - Random User Profile",
}

const fetchApiDemoItem2 = {
  path: "/fetch-api-demo-product-list",
  title: "Fetch Api Demo - Product List",
}

const useEffectBasicDemo = {
  path: "/use-effect-basic-demo",
  title: "Use Effect Basic Demo",
}

const useEffectBasicDemo2 = {
  path: "/use-effect-with-dependencies-demo",
  title: "Use Effect with Dependencies Demo",
}

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-uppercase">My React App</h1>
        <p>Checkout the following demos:</p>
        <ul className="list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={fetchApiDemoItem.path}>{fetchApiDemoItem.title}</Link>
          </li>
          <li>
            <Link to={fetchApiDemoItem2.path}>{fetchApiDemoItem2.title}</Link>
          </li>
          <li>
            <Link to={useEffectBasicDemo.path}>{useEffectBasicDemo.title}</Link>
          </li>
          <li>
            <Link to={useEffectBasicDemo2.path}>{useEffectBasicDemo2.title}</Link>
          </li>
          <li>
            <Link to="/new-page">new page</Link>
          </li>
          <li>
            <a href="/new-page">New Page with anchor tag</a>
          </li>
        </ul>

        <Routes>
          <Route path={fetchApiDemoItem.path} element={<FetchApi />}></Route>
          <Route path={fetchApiDemoItem2.path} element={<FetchApi2ndDemo />}></Route>
          <Route path={useEffectBasicDemo.path} element={<UseEffect1Component />}></Route>
          <Route path={useEffectBasicDemo2.path} element={<UseEffect2Component />}></Route>
          {/* this is how we create new page */}
          <Route
            path="/new-page"
            element={
              <>
                <h1>This is my new page</h1>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

function About() {
  return <h2>About</h2>
}

export default App
