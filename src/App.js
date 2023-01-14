import {Accessible} from './Accessible';

import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function App() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <><>
      <img
        className='w-full h-[440px] object-cover'
        src='https://download.logo.wine/logo/Aritzia/Aritzia-Logo.wine.png'
        alt='' />
      <h1>My Closet</h1>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/' />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>

    </><section className="section">
        <h2>Pick an outfit</h2>
        <Accessible />
        
        </section>

        
        
        
  
    <section2 className="section2">
    <h2>Recommendation</h2>
    <Accessible />
    </section2></>
  )
  
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={top1} className="App-top1" alt="top1" />
//         <img src={top2} className="App-top2" alt="top2" />
//         <img src={top3} className="App-top3" alt="top3" />
//         <img src={bottom1} className="App-bottom1" alt="bottom1" />
//         <img src={bottom2} className="App-bottom2" alt="bottom2" />
//         <img src={bottom3} className="App-bottom3" alt="bottom3" /> */}
//         <Scroll />
//         <p>
//         My Clothes
//         </p>
          
//       </header>
//       <section className="section">
//         <h2>Recommendation</h2>
//         <Accessible />
//     </section>
//     </div>
//   );
// }

// export default App;
