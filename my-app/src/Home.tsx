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

// const Home: React.FC = () => {
//   const [rates, setRates] = useState<number[]>([]);
//   const [labels, setLabels] = useState<string[]>([]);

//   const fetchRate = async () => {
//     try {
//       const response = await axios.get(
//         "https://open.er-api.com/v6/latest/AED"
//       );

//       const rate = response.data.rates.USD;

//       console.log("Rate:", rate);

//       setRates((prev) => [...prev.slice(-9), rate]);
//       setLabels((prev) => [
//         ...prev.slice(-9),
//         new Date().toLocaleTimeString()
//       ]);
//     } catch (error) {
//       console.error("API Error", error);
//     }
//   };

//   useEffect(() => {
//     fetchRate();
//     const interval = setInterval(fetchRate, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "AED → USD",
//         data: rates,
//         borderColor: "blue",
//         backgroundColor: "lightblue",
//         tension: 0.3
//       }
//     ]
//   };

//   return (
//     <div style={{ width: "700px", margin: "auto", textAlign: "center" }}>
//       <h2>Live UAE AED Exchange Rate</h2>

//       {rates.length === 0 ? (
//         <p>Loading live rate...</p>
//       ) : (
//         <Line data={data} />
//       )}
//     </div>
//   );
// };

// export default Home;


import React from "react";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <div className="about-container">

            <h1>Money Converter Dashboard</h1>

            <img
                src="https://static.vecteezy.com/system/resources/previews/007/539/261/non_2x/financial-chart-up-infographic-diagram-of-making-money-with-gold-coins-graph-investment-growth-gold-business-market-illustration-vector.jpg"
                alt="Currency"
                className="about-image"
            />

            <section>
                <h2>Overview</h2>
                <p>
                    The foreign exchange market (forex, FX, or currency market) is a global decentralized or over-the-counter (OTC) market for the trading of currencies. This market determines foreign exchange rates for every currency. By trading volume, it is by far the largest market in the world, followed by the credit market.
                    <br></br>
                    <br></br>

                    The main participants are the larger international banks. Financial centres function as anchors of trading between a range of multiple types of buyers and sellers around the clock, with the exception of weekends. As currencies are always traded in pairs, the market does not set a currency's absolute value, but rather determines its relative value by setting the market price of one currency if paid for with another. Example: 1 USD is worth 1.1 Euros or 1.2 Swiss Francs etc. The market works through financial institutions and operates on several levels. Behind the scenes, banks turn to a smaller number of financial firms known as "dealers", who are involved in large quantities of trading. Most foreign exchange dealers are banks, so this behind-the-scenes market is sometimes called the "interbank market". Trades between dealers can be very large, involving hundreds of millions of dollars. Because of the sovereignty issue when involving two currencies, Forex has little supervisory entity regulating its actions. In a typical foreign exchange transaction, a party purchases some quantity of one currency by paying with some quantity of another currency.
                    <br></br>
                    <br></br>

                    The foreign exchange market assists international trade and investments by enabling currency conversion. For example, it permits a business in the US to import goods from European Union member states, and pay Euros, even though its income is in United States dollars. It also supports direct speculation and evaluation relative to the value of currencies and the carry trade speculation, based on the differential interest rate between two currencies.
                    <br></br>
                    <br></br>

                    The modern foreign exchange market began forming during the 1970s. This followed three decades of government restrictions on foreign exchange transactions under the Bretton Woods system of monetary management, which set out the rules for commercial and financial relations among major industrial states after World War II. Countries gradually switched to floating exchange rates from the previous exchange rate regime, which remained fixed per the Bretton Woods system. The foreign exchange market is unique because of the following characteristics:
                    <br></br>
                    <br></br>

                </p>
            </section>

            <section>
                <h2>Features</h2>
                <ul>
                    <li>Live currency exchange rates</li>
                    <li>Conversion between multiple currencies</li>
                    <li>Real-time graphs for exchange rate changes</li>
                    <li>Arrow indicators showing currency increase or decrease</li>
                    <li>Simple and user-friendly interface</li>
                </ul>
            </section>

            <section>
                <h2>History</h2>
                <p>
                    <h3>Ancient</h3>
                    Currency trading and exchange first occurred in ancient times. Money-changers (people helping others to change money and also taking a commission or charging a fee) were living in the Holy Land in the times of the Talmudic writings (Biblical times). These people (sometimes called "kollybistẻs") used city stalls, and at feast times the Temple's Court of the Gentiles instead. Money-changers were also the silversmiths and/or goldsmiths of more recent ancient times.

                    During the 4th century AD, the Byzantine government kept a monopoly on the exchange of currency.

                    Papyri PCZ I 59021 (c.259/8 BC), shows the occurrences of exchange of coinage in Ancient Egypt.

                    Currency and exchange were important elements of trade in the ancient world, enabling people to buy and sell items like food, pottery, and raw materials. If a Greek coin held more gold than an Egyptian coin due to its size or content, then a merchant could barter fewer Greek gold coins for more Egyptian ones, or for more material goods. This is why, at some point in their history, most world currencies in circulation today had a value fixed to a specific quantity of a recognized standard like silver and gold.
                </p>

                <p>
                    <h3>Medieval and later</h3>
                    During the 15th century, the Medici family were required to open banks at foreign locations in order to exchange currencies to act on behalf of textile merchants. To facilitate trade, the bank created the nostro (from Italian, this translates to "ours") account book which contained two columned entries showing amounts of foreign and local currencies; information pertaining to the keeping of an account with a foreign bank. During the 17th (or 18th) century, Amsterdam maintained an active Forex market. In 1704, foreign exchange took place between agents acting in the interests of the Kingdom of England and the County of Holland.
                </p>
            </section>

            <section>
                <h2>Supported Currencies</h2>
                <p>
                    The system currently supports several international currencies including:
                </p>

                <ul>
                    <li>United States Dollar (USD)</li>
                    <li>United Arab Emirates Dirham (AED)</li>
                    <li>Malaysian Ringgit (MYR)</li>
                    <li>Indian Rupee (INR)</li>
                </ul>
            </section>

            <section>
                <h2>Market size and liquidity</h2>
                <p>
                    The foreign exchange market is the most liquid financial market in the world. Traders include governments and central banks, commercial banks, other institutional investors and financial institutions, currency speculators, other commercial corporations, and individuals. According to the 2025 Triennial Central Bank Survey, coordinated by the Bank for International Settlements, average daily turnover was $9.6 trillion in April 2025 (compared to $4 trillion in 2010). Of this $9.6 trillion, $3 trillion was spot transactions and $6.6 trillion was traded in outright forwards, swaps, and other derivatives.

                    Foreign exchange is traded in an over-the-counter market where brokers/dealers negotiate directly with one another, so there is no central exchange or clearing house. The biggest geographic trading center is the United Kingdom, primarily London. In April 2025, trading in the United Kingdom accounted for 37.8% of the total, making it by far the most important center for foreign exchange trading in the world. Owing to London's dominance in the market, a particular currency's quoted price is usually the London market price. For instance, when the International Monetary Fund calculates the value of its special drawing rights every day, they use the London market prices at noon that day. Trading in the United States accounted for 18.6%, Singapore and Hong Kong account for 11.8% and 7.0%, respectively, and Japan accounted for 3.5%.

                    Turnover of exchange-traded foreign exchange futures and options was growing rapidly in 2004–2013, reaching $145 billion in April 2013 (double the turnover recorded in April 2007). As of April 2025, exchange-traded currency derivatives represent 2% of OTC foreign exchange turnover. Foreign exchange futures contracts were introduced in 1972 at the Chicago Mercantile Exchange and are traded more than to most other futures contracts.
                </p>
            </section>

        </div>
    );
};

export default Home;