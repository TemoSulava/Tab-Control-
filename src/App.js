import React from 'react';
import { CustomFetchFn } from './components/CustomFetch';
import Title from './components/Title';
import Jobs from './components/Jobs';

//API
const payLoadUrl = "https://course-api.com/react-tabs-project";

function App() {
  //Using custom fetch hook to get the two parameters data and current state of application.
  const {appState, data} = CustomFetchFn(payLoadUrl);

  //If the data has not loaded yet from the api, display the loading screen.
  if (data.length === 0) {
   return <h3 className='section Loading'>We are {appState}</h3>
  }
  
//else we are returning our application
  return (
    <section className="section">
      <Title />
      <Jobs data={data}/>
      <button className='btn'>more info</button>
    </section>
  );
  }

export default App;
