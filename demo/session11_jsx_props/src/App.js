import "./App.css";
import "./components/AddJob";
import AddJob from "./components/AddJob";
import JobDetail from "./components/JobDetail";
import UpdateJob from "./components/UpdateJob";

function App() {
  const randomAge = Math.floor(Math.random() * 10);
  const imgSrc =
    " https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg ";
  return (
    <div>
      <h1> Your age is {randomAge}</h1>
      <img alt="" src={imgSrc} />
      <AddJob />
      <UpdateJob />
      <JobDetail />
    </div>
  );
}

export default App;
