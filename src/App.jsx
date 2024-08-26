
import './App.css'
import TopComponent from './top.jsx'
import BodyComponent from './body.jsx'
import Order from './order.jsx'
import data from './body.jsx'
const { Body, ProductInfo } = data;


function App() {
  return(
    <div>
      <TopComponent/>
      <Body/>
      <Order/>
    </div>
  );
}

export default App
