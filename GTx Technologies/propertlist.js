import React from 'react';
const list = [
  {
    id: 'a',
    Name: 'Robin',
    property: 'Blue Sky Reality', 
    Registered year: 1988,
    
  },
  {
    id: 'b',
    Name: 'Dave',
    Registeredyear: 1990,
  },
];
 
const nestedLists = [list, list];
 
const NestedList = () => (
  <ul>
    {nestedLists.map((nestedList, index) => (
      <ul key={index}>
        <h4>List {index + 1}</h4>
        {nestedList.map(item => (
          <li key={item.id}>
            <div>{item.Name}</div>
            <div>{item.RegisteredYear}</div>
          </li>
        ))}
      </ul>
    ))}
  </ul>
);

