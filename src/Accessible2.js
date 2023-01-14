import React, {useState, useCallback} from 'react';
import {Collapse} from './Collapse.js';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { data } from './outfitData';

const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 500;
};

const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 500;
};

export function Accessible2() {
  const height = 5;

  const accessibilityIds = {
    checkbox: 'accessible-marker-example1',
    button: 'accessible-marker-example2'
  };

  const [isCheckboxCollapseOpen, setIsCheckboxCollapseOpen] = useState(false);
  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

  const onChange = useCallback(
    ({target: {checked}}) => setIsCheckboxCollapseOpen(checked),
    [setIsCheckboxCollapseOpen]
  );

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  );
  


  return (
    <div className="accessible">
      <ul>
        {/* <li>
          <div>
            <h6>With a checkbox</h6>
            <div className="config">
              <label className="label">
                Opened:
                <input
                  className="input"
                  type="checkbox"
                  aria-controls={accessibilityIds.checkbox}
                  checked={isCheckboxCollapseOpen}
                  onChange={onChange} />
              </label>
            </div>
            <Collapse isOpened={isCheckboxCollapseOpen}>
              <div style={{height}} id={accessibilityIds.checkbox} className="blob" />
            </Collapse>
          </div>
        </li> */}

        <li>
          <div>
            <div className="config">
              <center><button
                class="bg-white hover:bg-gray-100 text-black border border-gray-400 font-bold py-2 px-4 rounded-full"
                aria-controls={accessibilityIds.button}
                aria-expanded={isButtonCollapseOpen}
                onClick={onClick}
                type="button">
                Recommendation
              </button></center>
            </div>
            <div class="pt-6">
            <Collapse
              isOpened={isButtonCollapseOpen}>
              <div style={{height}} id={accessibilityIds.button} className="blob" />
              <center><img
                className='w-2/6 h-2/6  object-cover'
                src='https://aritzia.scene7.com/is/image/Aritzia/f22_07_a06_79143_19862_on_a?wid=1800'
                alt='' /></center>
              
              <div class="pt-6">
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
              </div>

            </Collapse>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
