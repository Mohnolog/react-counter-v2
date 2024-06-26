import { useState } from "react";
import Plus from "./Plus";
import Minus from "./Minus";
import Reset from "./Reset";

function Main(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Minus
          className={`minus ${count === 0 && "hidden"} hidden-when-small`}
          state={count}
          setState={setCount}
        />
        <p>{count}</p>
        <Plus
          className={`plus ${count > 9 && "hidden"} hidden-when-small`}
          state={count}
          setState={setCount}
        />
      </div>
      <Reset className="reset" setState={setCount} value={0} />
    </>
  );
}

export default Main;
