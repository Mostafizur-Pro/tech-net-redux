import { decrement, increment } from "./redux/feature/counter/CounterSlice";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <div className=" m-10 text-5xl">{count}</div>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="bg-sky-400 rounded-lg p-2 mr-10"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-400 rounded-lg p-2 "
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
