import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Home</h1>
      <p>{state}</p>
    </div>
  );
};

export default Home;
