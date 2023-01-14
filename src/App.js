import {Accessible} from './Accessible';
import {Accessible2} from './Accessible2';


import React from 'react';
import { data_tops } from './data_tops';
import { data_bottom } from './data_bottom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function App() {
  const slideLeft_tops = () => {
    var slider_tops = document.getElementById('slider_tops');
    slider_tops.scrollLeft = slider_tops.scrollLeft - 500;
  };

  const slideRight_tops = () => {
    var slider_tops = document.getElementById('slider_tops');
    slider_tops.scrollLeft = slider_tops.scrollLeft + 500;
  };

  const slideLeft_bottom = () => {
    var slider_bottom = document.getElementById('slider_bottom');
    slider_bottom.scrollLeft = slider_bottom.scrollLeft - 500;
  };

  const slideRight_bottom = () => {
    var slider_bottom = document.getElementById('slider_bottom');
    slider_bottom.scrollLeft = slider_bottom.scrollLeft + 500;
  };

  return (
    <><>
      <img
        className='w-2/6 h-2/6 object-cover'
        src='https://download.logo.wine/logo/Aritzia/Aritzia-Logo.wine.png'
        alt='' />
      <h1 class="font-medium leading-tight text-4xl mt-0 mb-2 pl-8">My Closet</h1>

      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 pl-8">My Closet</h1>

      <div class="flex flex-col space-y-6 ...">
        <div>
          <h1 class="font-medium leading-tight text-4xl mt-0 mb-2 pl-8">Top</h1>
            <div className='relative flex items-center'>
              <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft_tops} size={40} />
              <div
                id='slider_tops'
                className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
              >
                {data_tops.map((item) => (
                  <img
                    className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                    src={item.img}
                    alt='/' />
                ))}
              </div>
              <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight_tops} size={40} />
            </div>
        </div>
        
        <div>
        <h1 class="font-medium leading-tight text-4xl mt-0 mb-2 pl-8">Bottom</h1>
            <div className='relative flex items-center'>
              <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft_bottom} size={40} />
              <div
                id='slider_bottom'
                className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
              >
                {data_bottom.map((item) => (
                  <img
                    className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                    src={item.img}
                    alt='/' />
                ))}
              </div>
              <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight_bottom} size={40} />
            </div>
        </div>
      </div>  




    </><section className="section">
        <Accessible />
        
        </section>

        
        
        
  
    </>
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