import React, { useState } from "react";
import ToDoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
            <h1> ToDo List </h1>
              <br />
                <input type="text" placeholder="Add A Items" 
                value={inputList}   
                onChange={itemEvents}/>
                  <button onClick={listOfItems}> + </button>

                  <ol>
                    {Items.map((itemValues, index) => {
                      return <ToDoList 
                      key={index} 
                      id={index} 
                      text={itemValues}
                      onSelect={deleteItems} 
                      />
                    })}
                  </ol>
        </div>
      </div>
    </>
  )
}

export default App;
