import './App.css';
import React from "react";
import Table from './components/table';
import CreateData from './components/createData';
import { useState } from "react";
import DeleteMany from './components/deleteMany';



function App() {
  const [listCoupons, setListCoupons] = useState([])
  const [listCheckBox, setListCheckBox] = useState([])

  return (
    <>
      <CreateData listCoupons={listCoupons} setListCoupons={setListCoupons} />
      <DeleteMany listCheckBox={listCheckBox} />
      <Table listCoupons={listCoupons} setListCoupons={setListCoupons} setListCheckBox={setListCheckBox} listCheckBox={listCheckBox} />
    
    </>
  );
}

export default App;