import React, { useState } from 'react'
import "./App.css"

const Searchbar = () => {
  return (
    <div>
        <Autocomplete
        suggestions={["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]}
      />
    </div>
  )
}

const Autocomplete = (props) => {
    const [active, setActive] = useState(0);
    const [filtered, setFiltered] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [input, setInput] = useState("");
    
    const onChange = e => {
      const { suggestions } = props;
      const input = e.currentTarget.value;
      const newFilteredSuggestions = suggestions.filter(
        suggestion =>
          suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
      );
      setActive(0);
      setFiltered(newFilteredSuggestions);
      setIsShow(true);
      setInput(e.currentTarget.value)
    };
  const onClick = e => {
      setActive(0);
      setFiltered([]);
      setIsShow(false);
      setInput(e.currentTarget.innerText)
    };
  const onKeyDown = e => {
      if (e.keyCode === 13) { // enter key
        setActive(0);
        setIsShow(false);
        setInput(filtered[active])
      }
      else if (e.keyCode === 38) { // up arrow
        return (active === 0) ? null : setActive(active - 1);
      }
      else if (e.keyCode === 40) { // down arrow
        return (active - 1 === filtered.length) ? null : setActive(active + 1);
      }
    };
  const renderAutocomplete = () => {
      if (isShow && input) {
        if (filtered.length) {
          return (
            <ul className="autocomplete">
              {filtered.map((suggestion, index) => {
                let className;
                if (index === active) {
                  className = "active";
                }
                return (
                  <li className={className} key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          return (
            <div className="no-autocomplete">
              <em>Not found</em>
            </div>
          );
        }
      }
      return <></>;
    }
  return (
      <>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        {renderAutocomplete()}
      </>
    );
  }

export default Searchbar