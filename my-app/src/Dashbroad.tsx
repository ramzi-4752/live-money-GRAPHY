

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement
// } from "chart.js";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// const Dashboard: React.FC = () => {

//   const [aedRates, setAedRates] = useState<number[]>([]);
//   const [usdRates, setUsdRates] = useState<number[]>([]);
//   const [myrRates, setMyrRates] = useState<number[]>([]);
//   const [labels, setLabels] = useState<string[]>([]);

//   const [aedCurrent, setAedCurrent] = useState<number | null>(null);
//   const [usdCurrent, setUsdCurrent] = useState<number | null>(null);
//   const [myrCurrent, setMyrCurrent] = useState<number | null>(null);

//   const [prevAed, setPrevAed] = useState<number | null>(null);
//   const [prevUsd, setPrevUsd] = useState<number | null>(null);
//   const [prevMyr, setPrevMyr] = useState<number | null>(null);

//   const fetchRates = async () => {
//     try {

//       const aedRes = await axios.get("https://open.er-api.com/v6/latest/AED");
//       const usdRes = await axios.get("https://open.er-api.com/v6/latest/USD");
//       const myrRes = await axios.get("https://open.er-api.com/v6/latest/MYR");

//       const aedToInr = aedRes.data.rates.INR;
//       const usdToInr = usdRes.data.rates.INR;
//       const myrToInr = myrRes.data.rates.INR;

//       setPrevAed(aedCurrent);
//       setPrevUsd(usdCurrent);
//       setPrevMyr(myrCurrent);

//       setAedCurrent(aedToInr);
//       setUsdCurrent(usdToInr);
//       setMyrCurrent(myrToInr);

//       setAedRates(prev => [...prev.slice(-9), aedToInr]);
//       setUsdRates(prev => [...prev.slice(-9), usdToInr]);
//       setMyrRates(prev => [...prev.slice(-9), myrToInr]);

//       setLabels(prev => [...prev.slice(-9), new Date().toLocaleTimeString()]);

//     } catch (error) {
//       console.error("API Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchRates();
//     const interval = setInterval(fetchRates, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const getArrow = (current: number | null, prev: number | null) => {
//     if (prev === null || current === null) return "";
//     if (current > prev) return "⬆️";
//     if (current < prev) return "⬇️";
//     return "➡️";
//   };

//   const createChart = (label: string, data: number[], color: string) => ({
//     labels: labels,
//     datasets: [
//       {
//         label: label,
//         data: data,
//         borderColor: color,
//         backgroundColor: color,
//         tension: 0.3
//       }
//     ]
//   });

//   return (

//     <div style={{ width: "95%", margin: "auto", textAlign: "center" }}>

//       <h2>Live Currency Dashboard</h2>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           gap: "20px",
//           flexWrap: "wrap",
//           marginTop: "30px"
//         }}
//       >

//         {/* AED */}

//         <div style={{ width: "30%" }}>
//           <h3>AED → INR</h3>
//           <h4>
//             1 AED = ₹{aedCurrent?.toFixed(2)} {getArrow(aedCurrent, prevAed)}
//           </h4>
//           <Line data={createChart("AED → INR", aedRates, "green")} />
//         </div>


//         {/* USD */}

//         <div style={{ width: "30%" }}>
//           <h3>USD → INR</h3>
//           <h4>
//             1 USD = ₹{usdCurrent?.toFixed(2)} {getArrow(usdCurrent, prevUsd)}
//           </h4>
//           <Line data={createChart("USD → INR", usdRates, "blue")} />
//         </div>


//         {/* MYR */}

//         <div style={{ width: "30%" }}>
//           <h3>MYR → INR</h3>
//           <h4>
//             1 MYR = ₹{myrCurrent?.toFixed(2)} {getArrow(myrCurrent, prevMyr)}
//           </h4>
//           <Line data={createChart("MYR → INR", myrRates, "orange")} />
//         </div>

//       </div>

//     </div>
//   );
// };

// export default Dashboard;




//======================================================================
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard: React.FC = () => {

  const [labels, setLabels] = useState<string[]>([]);

  const [aedRates, setAedRates] = useState<number[]>([]);
  const [usdRates, setUsdRates] = useState<number[]>([]);
  const [myrRates, setMyrRates] = useState<number[]>([]);
  const [myrIdrRates, setMyrIdrRates] = useState<number[]>([]);

  const [aedCurrent, setAedCurrent] = useState<number | null>(null);
  const [usdCurrent, setUsdCurrent] = useState<number | null>(null);
  const [myrCurrent, setMyrCurrent] = useState<number | null>(null);
  const [myrIdrCurrent, setMyrIdrCurrent] = useState<number | null>(null);

  const [prevAed, setPrevAed] = useState<number | null>(null);
  const [prevUsd, setPrevUsd] = useState<number | null>(null);
  const [prevMyr, setPrevMyr] = useState<number | null>(null);
  const [prevMyrIdr, setPrevMyrIdr] = useState<number | null>(null);


  const fetchRates = async () => {

    try {

      const aedRes = await axios.get("https://open.er-api.com/v6/latest/AED");
      const usdRes = await axios.get("https://open.er-api.com/v6/latest/USD");
      const myrRes = await axios.get("https://open.er-api.com/v6/latest/MYR");

      const aedToInr = aedRes.data.rates.INR;
      const usdToInr = usdRes.data.rates.INR;
      const myrToInr = myrRes.data.rates.INR;
      const myrToIdr = myrRes.data.rates.IDR;

      setPrevAed(aedCurrent);
      setPrevUsd(usdCurrent);
      setPrevMyr(myrCurrent);
      setPrevMyrIdr(myrIdrCurrent);

      setAedCurrent(aedToInr);
      setUsdCurrent(usdToInr);
      setMyrCurrent(myrToInr);
      setMyrIdrCurrent(myrToIdr);

      setAedRates(prev => [...prev.slice(-9), aedToInr]);
      setUsdRates(prev => [...prev.slice(-9), usdToInr]);
      setMyrRates(prev => [...prev.slice(-9), myrToInr]);
      setMyrIdrRates(prev => [...prev.slice(-9), myrToIdr]);

      setLabels(prev => [...prev.slice(-9), new Date().toLocaleTimeString()]);

    } catch (error) {
      console.log("API error", error);
    }

  };

  useEffect(() => {

    fetchRates();

    const interval = setInterval(fetchRates, 1000);

    return () => clearInterval(interval);

  }, []);


  const getArrow = (current: number | null, prev: number | null) => {

    if (current === null || prev === null) return "";

    if (current > prev) return "⬆️";

    if (current < prev) return "⬇️";

    return "➡️";
  };


  const getMax = (data: number[]) => {

    if (data.length === 0) return null;

    return Math.max(...data);
  };


  const createChart = (label: string, data: number[], color: string) => ({
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        borderColor: color,
        backgroundColor: color,
        tension: 0.3
      }
    ]
  });


  const boxStyle: React.CSSProperties = {

    width: "45%",
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    marginBottom:"40px",
  };


  return (

    <div style={{ width: "95%", margin: "auto", textAlign: "center" }}>

      <h2>Live Dashboard</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        {/* AED INR */}

        <div style={boxStyle}>

          <h3>AED → INR</h3>

          <h4>
            1 AED = ₹{aedCurrent ? aedCurrent.toFixed(2) : "--"} {getArrow(aedCurrent, prevAed)}
          </h4>

          <p>
            Yesterday Max: ₹{getMax(aedRates)?.toFixed(2) ?? "--"}
          </p>

          <Line data={createChart("AED → INR", aedRates, "green")} />

        </div>


        {/* USD INR */}

        <div style={boxStyle}>

          <h3>USD → INR</h3>

          <h4>
            1 USD = ₹{usdCurrent ? usdCurrent.toFixed(2) : "--"} {getArrow(usdCurrent, prevUsd)}
          </h4>

          <p>
            Yesterday Max: ₹{getMax(usdRates)?.toFixed(2) ?? "--"}
          </p>

          <Line data={createChart("USD → INR", usdRates, "blue")} />

        </div>


        {/* MYR INR */}

        <div style={boxStyle}>

          <h3>MYR → INR</h3>

          <h4>
            1 MYR = ₹{myrCurrent ? myrCurrent.toFixed(2) : "--"} {getArrow(myrCurrent, prevMyr)}
          </h4>

          <p>
            Yesterday Max: ₹{getMax(myrRates)?.toFixed(2) ?? "--"}
          </p>

          <Line data={createChart("MYR → INR", myrRates, "orange")} />

        </div>


        {/* MYR IDR */}

        <div style={boxStyle}>

          <h3>MYR → IDR</h3>

          <h4>
            1 MYR = Rp {myrIdrCurrent ? myrIdrCurrent.toFixed(0) : "--"} {getArrow(myrIdrCurrent, prevMyrIdr)}
          </h4>

          <p>
            Yesterday Max: Rp {getMax(myrIdrRates)?.toFixed(0) ?? "--"}
          </p>

          <Line data={createChart("MYR → IDR", myrIdrRates, "red")} />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;