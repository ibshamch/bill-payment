import Body from "./Components/Body/body.component";
import Header from "./Components/Header/header.component";
import "./App.css";
const navigationList = ["Products", "Solutions", "Pricing"];
const bodyData = {
  heading: "The Future of Subscriptions",
  description: "Now View all of your recurring subscriptions in one place!",
  subdesc: "Bills Online & get up to 100% Cash Back",
  caution: "No personal gurantee or personal credit check required",
};
function App() {
  return (
    <div className="app">
      <Header navigationList={navigationList} />
      <Body {...bodyData} />
    </div>
  );
}

export default App;
