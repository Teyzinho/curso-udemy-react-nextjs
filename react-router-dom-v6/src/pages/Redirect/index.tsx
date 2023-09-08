import { useState, useRef , useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate()

  useEffect(() => {
    clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    },1000)

    return() => {
      clearTimeout(timeout.current)
    }
  }, [time])

  if(time === 0 ){
    navigate('/', {
      state: `This is the state : ${23}`
    })
  }
  
  return (
    <div>
      <h1>Irá sair daqui em: {time} Segundos</h1>
      <button onClick={() => setTime((t) => t + 1)}>Espere</button>
    </div>
  );
};
