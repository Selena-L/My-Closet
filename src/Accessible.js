import React, {useState, useCallback} from 'react';
import {Collapse} from './Collapse.js';

export function Accessible() {
  const height = 100;

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
            <h6>With a button</h6>
            <div className="config">
              <button
                aria-controls={accessibilityIds.button}
                aria-expanded={isButtonCollapseOpen}
                onClick={onClick}
                type="button">
                Reveal content
              </button>
            </div>
            <Collapse
              isOpened={isButtonCollapseOpen}>
              <div style={{height}} id={accessibilityIds.button} className="blob" />
              <img
                className='w-full h-full object-cover'
                src='https://aritzia.scene7.com/is/image/Aritzia/f22_07_a06_79143_19862_on_e?wid=1800'
                alt='' />
            </Collapse>
          </div>
        </li>
      </ul>
    </div>
  );
}
