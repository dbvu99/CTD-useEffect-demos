import "./App.css"
// import FetchApi from "./fetch-api-demos/FetchApi"
import FetchApi2ndDemo from "./fetch-api-demos/FetchApi2ndDemo"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import FetchApi from "./fetch-api-demos/FetchApi"
import UseEffect1Component from "./use-effect-demos/UseEffect1Component"
import UseEffect2Component from "./use-effect-demos/UseEffect2Component"
import UseEffectWithCleanUp from "./use-effect-demos/UseEffectWithCleanUp"
import DynamicRoutesDemo from "./react-router-demos/DynamicRoutesDemo"
import SocialMediaClone from "./react-router-demos/SocialMediaClone"
import AllComments from "./react-router-demos/AllComments"

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

const useEffectWithCleanUp = {
  path: "/use-effect-with-clean-up-demo",
  title: "Use Effect with Clean Up Demo",
}

const dynamicRouteDemo = {
  path: "/dynamic-route-app",
  title: "Social Media Clone - Dynamic Route Demo",
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
            <Link to={useEffectWithCleanUp.path}>{useEffectWithCleanUp.title}</Link>
          </li>
          <li>
            <Link to="/new-page">new page</Link>
          </li>
          <li>
            <a href="/new-page">New Page with anchor tag</a>
          </li>
          <li>
            <Link to={dynamicRouteDemo.path}>{dynamicRouteDemo.title}</Link>
          </li>
        </ul>

        <Routes>
          <Route path={fetchApiDemoItem.path} element={<FetchApi />}></Route>
          <Route path={fetchApiDemoItem2.path} element={<FetchApi2ndDemo />}></Route>
          <Route path={useEffectBasicDemo.path} element={<UseEffect1Component />}></Route>
          <Route path={useEffectBasicDemo2.path} element={<UseEffect2Component />}></Route>
          <Route path={useEffectWithCleanUp.path} element={<UseEffectWithCleanUp />}></Route>
          <Route path=":dynamicRoute" element={<DynamicRoutesDemo />}></Route>
          <Route
            path="/new-page"
            element={
              <>
                <h1>This is my new page</h1>
              </>
            }
          ></Route>
          <Route path={dynamicRouteDemo.path} element={<SocialMediaClone />}></Route>
          <Route path={"/dynamic-route-app/:id"} element={<AllComments />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

function About() {
  return <h2>About</h2>
}

export default App
