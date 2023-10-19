import React from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../redux/modeSlice';
// ${isDarkMode ? 'bg-[#0d1321]' : 'bg-[#3e5c76]'}

import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

const ToggleMode = () => {
  // const isDarkMode = useSelector((state) => state.mode.isDarkMode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleMode())}
      className={`lg:text-[1.3rem] md:text-[1rem] text-[0.7rem] font-bold border-none p-3 m-0 duration-200 transition-all hover:opacity-100 opacity-70 active:border focus:border focus:border-[gray] active:outline-none dark:bg-[#0d1321] bg-[#3e5c76] flex gap-2 items-center justify-center`}
      >
      {isDarkMode ? <BiSolidSun /> : <BiSolidMoon />}
    </button>
  );
};

export default ToggleMode;
