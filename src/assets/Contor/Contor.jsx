
import  { useEffect, useState } from 'react';
import './Contor.css'
export default function Contor() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [isIncrementMode, setIsIncrementMode] = useState(true);
  const [popup , setPopup] = useState('');
  const [backgroundColor , setbackgroundColor] = useState('white')

  const Click = () => {
    if (isIncrementMode) {
      const newCount = count + increment;
      setCount(newCount);

      if (newCount >= 1000) {
        setIsIncrementMode(false);
        setIncrement(100);
      } else if (newCount >= 100) {
        setIncrement(100);
      } else if (newCount >= 10) {
        setIncrement(10);
      }
    } else {
      const newCount = count - increment;
      setCount(newCount);

      if (newCount <= 0) {
        setIsIncrementMode(true);
        setIncrement(1);
      } else if (newCount <= 10) {
        setIncrement(1);
      } else if (newCount <= 100) {
        setIncrement(10);
      }
    }
  };
  useEffect(() => {
    
    setPopup('welcome');
  
     setTimeout(() => setPopup(''), 3000);

  }, []);
useEffect(() =>{
  if(count==10 ){
    setPopup('Welcome the count become 10');
  }else if(count==100){
    setPopup('Welcome the count become 100');
  }else if(count ==1000){
    setPopup('Welcome the count become 1000');
  }
   setTimeout(() => setPopup(''), 5000);
  }
,[count])
useEffect(() =>{
  if (count==10){
      setbackgroundColor('rgb(239, 195, 210)')
  }else if(count ==100){
    setbackgroundColor('rgb(219, 96, 137)')
  }else if(count==1000){
    setbackgroundColor('rgb(144, 220, 195)')
  }else{
    setbackgroundColor('white')
  }
},[count])
  return (
    
    <div className='hmcon' style={{backgroundColor: backgroundColor}}>
      <h1>Count: {count}</h1>
      <button onClick={Click}>
        {isIncrementMode ? 'Increase ' : 'Decrease '}
      </button>
      {
         <div className='popup'>{popup}</div>
      }
    </div>
  );
}