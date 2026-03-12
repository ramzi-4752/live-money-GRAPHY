🌍 Live Currency Dashboard

A real-time currency monitoring dashboard built using React + TypeScript that displays live exchange rates, currency trends, and graphical analysis.

The application fetches exchange rate data from a public API and updates the dashboard automatically with charts and indicators.

📸 Project Overview

This project shows:

Live exchange rates

Graphical currency trends

Price movement indicators

Yesterday's highest price

Multiple currency comparisons

The dashboard is useful for learning API integration, data visualization, and React TypeScript development.

🚀 Features
📊 Live Currency Rates

Displays real-time exchange rates from the API.

📈 Dynamic Charts

Line charts update automatically showing price movement.

⬆️⬇️ Price Direction Indicator

Arrows show whether the currency price has increased or decreased.

Arrow	Meaning
⬆️	Price Increased
⬇️	Price Decreased
➡️	No Change
📅 Yesterday Maximum Price

Shows the highest value recorded from previous data.

🌎 Multiple Currency Tracking

The dashboard tracks the following currency pairs:

Currency	Conversion
AED	AED → INR
USD	USD → INR
MYR	MYR → INR
MYR	MYR → IDR
🔄 Auto Refresh

Currency data refreshes automatically every 5 seconds.

🛠 Technologies Used
Technology	Purpose
React	Frontend UI
TypeScript	Type-safe JavaScript
Axios	API requests
Chart.js	Data visualization
React ChartJS 2	Chart integration with React
📦 Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/your-username/currency-dashboard.git
2️⃣ Navigate to Project Folder
cd currency-dashboard
3️⃣ Install Dependencies
npm install

Install required libraries:

npm install axios
npm install chart.js
npm install react-chartjs-2
▶️ Run the Project

Start the development server:

npm start

The application will open in your browser:

http://localhost:3000
📊 API Used

The project uses the free exchange rate API:

https://open.er-api.com

Example API request:

https://open.er-api.com/v6/latest/USD

The API returns JSON data containing exchange rates for multiple currencies.

📂 Project Structure
currency-dashboard
│
├── src
│
├── components
│      ├── Dashboard.tsx
│      ├── Footer.tsx
│
├── App.tsx
├── index.tsx
│
├── package.json
└── README.md
🧠 Key Concepts Used

This project demonstrates important React + TypeScript concepts:

React Concepts

Functional Components

useState Hook

useEffect Hook

API calls

Dynamic rendering

TypeScript Concepts

Type annotations

Interfaces

React.FC typing

State typing

Data Visualization

Chart.js integration

Real-time graph updates

📈 Dashboard Functionalities
1️⃣ Live Price Display

Example:

1 USD = ₹83.25 ⬆️
2️⃣ Real-Time Graph

Shows the last 10 price updates using a line chart.

3️⃣ Yesterday Max Price

Example:

Yesterday Max: ₹83.40
4️⃣ Currency Monitoring

Currencies supported:

UAE Dirham

US Dollar

Malaysian Ringgit

Indonesian Rupiah

🔮 Future Improvements

Possible improvements for this project:

Add more currencies

Add historical data charts

Add currency converter input

Add dark mode

Add country flags

Add responsive mobile design

Add 24-hour price change %

🎯 Learning Objectives

This project helps you learn:

API integration in React

TypeScript with React

Chart.js visualization

Real-time dashboard development

Currency data handling

👨‍💻 Author

Developed as a #Ramzi
