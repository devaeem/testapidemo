import React, { useEffect, useState } from "react";
import  axios  from "axios";
const testapidum = () => {
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState('');


  useEffect(()=>{

    loadData(btn);
  },[])
//   const loadData = () => {};
  const handleAdd = (e) => {
    // console.log(e.target.value);
    setBtn(e.target.value);
  };
  const handleBtn = (btn) => {
    if(!btn){
      return  alert("NOT DATA!!!") 
    }
    loadData();
   
  };


  const loadData = async ()=>{
   await axios.get(`https://dummyjson.com/products?limit=${btn}`)
   .then((res) => {
    console.log(res.data.products)
     setData(res.data.products);
  })
  .catch((err) => {
    console.log(err);
  });
  }
const handleReset =()=>{
    setData([]);
    setBtn(0); 
}
  

  return (
    <>
      <div className="test-api-dummy-container">
      <input type="number" onChange={handleAdd} value={btn} />
      <button className="btn-add" onClick={handleBtn}>
        ADD
      </button>
      <button className="btn-reset" onClick={handleReset}>
        RESET
      </button>
      <ul className="data-list">
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
       
       
     
    </>
  );
};

export default testapidum;
