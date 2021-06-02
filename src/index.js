import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "hike",
  "Intagram",
  "Telegram",
  "whatsApp",
  "signal",
  "Netflix"
];
function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <h1 className="h1">Enter Items to Search</h1>
      <span className="search-bar">
        
      <input 
        className="input-class "
        placeholder="Search.."
        type="text"
        value={searchTerm}
        onChange={handleChange}
        
      />
      </span>
      
      <div className="array-items">
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
