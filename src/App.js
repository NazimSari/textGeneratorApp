import "./App.css";
import Form from "./components/Form";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Text Generator App</h1>
      </div>
      <Form />
      <Paragraph />
    </div>
  );
}

export default App;
