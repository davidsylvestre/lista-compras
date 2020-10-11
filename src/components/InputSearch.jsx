import React, { useEffect, useState, useRef } from "react";
import "./InputSearch.css";

const InputSearch = ({ search, setSearch, loadOptions }) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    loadOptions().then((optionsResult) => setOptions(optionsResult));
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateSearch = (option) => {
    setSearch(option);
    setDisplay(false);
  };

  const rederOptions = (options) => {
    return (
      <div className="autocomplete">
        <div id="myInputautocomplete-list" className="autocomplete-items">
          {options
            .filter(({ option }) => option.indexOf(search.toLowerCase()) > -1)
            .slice(0, 15)
            .map(({ option }, index) => {
              return (
                <div
                  onClick={() => updateSearch(option)}
                  className="option"
                  key={index}
                  tabIndex="0"
                >
                  <span>{option}</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <div ref={wrapperRef} className="col">
      <input
        type="text"
        className="form-control"
        placeholder="Produto"
        onClick={() => setDisplay(!display)}
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      {display && rederOptions(options)}
    </div>
  );
};

export default InputSearch;
