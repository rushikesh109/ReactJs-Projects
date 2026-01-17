// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(100);

//   useEffect(
//     function () {
//       console.log("UseEffect is runnning");
//     },
//     [num]
//   );
//   return (
//     <div>
//       <h1>{num}</h1>
//       <h1>{num2}</h1>
//       <button
//         onMouseEnter={() => {
//           setNum(num + 1);
//         }}
//         onMouseLeave={() => {
//           setNum2(num2 + 10);
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("a value is changing");
  }

  function bChanging() {
    console.log("b value is changing");
  }

  useEffect(() => {
    aChanging();
  }, [a]);
  
  useEffect(()=> {
    bChanging()
  }, [b])

  return (
    <div className="  h-screen bg-amber-50">
      <div className="flex justify-center gap-10">
        <div className="flex gap-5">
          <h1>Value of a is {a}</h1>
          <h2> value of b is {b}</h2>
        </div>
        <div className="flex justify-center gap-2 py-10 ">
          <button
            className="bg-violet-300 rounded px-9 py-9"
            onClick={() => {
              setA(a + 1);
            }}
          >
            change a
          </button>
          <button
            className="bg-red-200 rounded px-5 py-5"
            onClick={() => {
              setB(b - 1);
            }}
          >
            change b
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
