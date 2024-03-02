import React, { useState } from 'react'
import data from './data';
import './styles.css';

const Accordian = () => {
  const [multiSelection, setMultiSelection] = useState(false);
  const [selections, setSelections] = useState([]);

  const handleSelection = (currentId) => {
    if (!multiSelection){
      setSelections(selections.includes(currentId) ? [] : [currentId]);
      return;
    }
    const index = selections.indexOf(currentId);
    const newSelections = [...selections];
    index === -1 ? newSelections.push(currentId) : newSelections.splice(index, 1);
    setSelections(newSelections);
    console.log(selections);
  };

  return (
    <div className="wrapper">
      <button onClick={()=> setMultiSelection(!multiSelection)} className={multiSelection && "toggled"}>Enable Multi-Selection</button>
      <div className="accordian">
        {
          data && data.length > 0 ? 
          data.map(item => (
            <div key={item.id} onClick={()=>handleSelection(item.id)} className="item">
              <div className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selections.includes(item.id) && <div className="content">{item.answer}</div>}
            </div>
          ))
          : <p>No data found!</p>
        }
      </div>
    </div>
  )
}

export default Accordian;