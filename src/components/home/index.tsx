import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/actions";
import { StoreState } from "../../redux/Types";

const Home = () => {
  const counter = useSelector((state: StoreState) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p className="para">This is Home Page</p>
      {/* redux example */}
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
    </>
  );
};

export default Home;
