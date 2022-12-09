import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from '../src/components/Navbar/Navbar';
import DarkExample from './components/Main/Main';
import Footer from './components/Footer/Footer';


const App = () => {
  const Users = [
    {
      name: "Soska",
      lastName: "Uchiha",
      age: 22,
      id: 1,
    },
    {
      name: "Naruto",
      lastName: "Uzumaki",
      age: 24,
      id: 2,
    },
    {
      name: "Sakura",
      lastName: "Haruna",
      age: 26,
      id: 3,
    },
  ];
  return (
    <div>
     <ColorSchemesExample />
     {Users.map((item) => {
        return (
          <DarkExample
          name={item.name}
            lastName={item.lastName}
            age={item.age}
            id={item.id}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;