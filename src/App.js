import Modal from "./components/Modal/Modal"

import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import ProductList from './components/ProductList';

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
      <Layout setModalShow={setModalShow}>
        
        <Header />
        
        <ProductList />
        

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
      </Layout>
    </div>
  );
}

export default App;
