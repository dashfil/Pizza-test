import { useReducer, useState } from "react";
import AddBtn from "../AddBtn/AddBtn";
import Nav from "../Nav/Nav";
import Tabel from "../Tabel/Tabel";
import context from '../context'
import { reducer } from "../reducer";

const pizzasList = [
  {
    name: 'Пицца 1',
    cucumbers: 'Малосольные',
    dough: 'Тонкое',
    size: '22',
    hot: 'Да',
    price: '550',
    date: '29.07.2022',
    weight: '300',
    discription: 'супер пицца'
  },
  {
    name: 'Пицца 1',
    cucumbers: 'Малосольные',
    dough: 'Тонкое',
    size: '22',
    hot: 'Да',
    price: '550',
    date: '29.07.2022',
    weight: '300',
    discription: 'супер пицца'
  },
  {
    name: 'Пицца 1',
    cucumbers: 'Малосольные',
    dough: 'Тонкое',
    size: '22',
    hot: 'Да',
    price: '550',
    date: '29.07.2022',
    weight: '300',
    discription: 'супер пицца'
  },
  {
    name: 'Пицца 1',
    cucumbers: 'Малосольные',
    dough: 'Тонкое',
    size: '22',
    hot: 'Да',
    price: '550',
    date: '29.07.2022',
    weight: '300',
    discription: 'супер пицца'
  },
  {
    name: 'Пицца 1',
    cucumbers: 'Малосольные',
    dough: 'Тонкое',
    size: '22',
    hot: 'Да',
    price: '550',
    date: '29.07.2022',
    weight: '300',
    discription: 'супер пицца'
  }
];

function App() {
  const [pizzas, setPizzas] = useState(pizzasList)
  const [state, dispatch] = useReducer(reducer, { pizzas: pizzasList})
  return (
    <div className="App">
      <context.Provider value={{ state, dispatch }}>
    <Nav/>
      <Tabel/>
      <AddBtn/>
    </context.Provider>
    </div>
  );
}

export default App;
