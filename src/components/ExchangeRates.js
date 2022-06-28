
// import React from "react"

// const ExchangeRates = () => {
//   return <h2>Exchange Rates</h2>;
// }


// export default ExchangeRates


// import * as React from 'react';

// import FxItem from './components/FxItem.js';
// import { fetchExchangeRates, searchFxRates } from './services/fxService';

// function App() {
//   const [rates, setRates] = React.useState(null);
//   const [ratesBase, setRatesBase] = React.useState('');
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [searchResults, setSearchResults] = React.useState(null);

//   const onSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   React.useEffect(() => {
//     let componentIsMounted = true;

//     const getFxData = () => {
//       fetchExchangeRates()
//         .then((data) => {
//           console.log('fx data:', data);
//           if (componentIsMounted) {
//             setRates(data.rates);
//             setRatesBase(data.base);
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     // load initially
//     getFxData();

//     const fetchInterval = setInterval(getFxData, 1000 * 60);

//     return () => {
//       clearInterval(fetchInterval);
//       componentIsMounted = false;
//     };
//   }, []);

//   React.useEffect(() => {
//     if (searchTerm.trim().length > 0) {
//       setSearchResults(searchFxRates(rates, searchTerm));
//     } else {
//       setSearchResults(rates);
//     }
//   }, [searchTerm, rates]);

//   return (
//     <div className={styles.app}>
//       <h1>Fx Rates</h1>
//       <input
//         value={searchTerm}
//         className={styles.input}
//         placeholder='Search...'
//         onChange={onSearch}
//       />
//       {searchResults
//         ? Object.keys(searchResults).map((key) => (
//             <FxItem
//               key={key}
//               fxSymbol={key}
//               fxRate={searchResults[key]}
//               ratesBase={ratesBase}
//             />
//           ))
//         : []}
//     </div>
//   );
// }

// export default App;


    //   <div className='container'>
    //   {/* <ul className='list-group'> */}
    //     {ratesList.map((d) => (
    //       <div className='row'>
    //         <div className="col-12 col-sm-6 col-xl-4">
    //     <li className= 'list-group-item' key={d.symbol}>
    //        {d.symbol} - {d.rate}
    //      </li>
    //      </div>
    //      </div>
    //     ))}
    //   {/* </ul> */}
    //   </div>
    // </div>