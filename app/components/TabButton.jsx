import React from 'react'

const TabButton = ({active, selectTab, children}) => {

  const buttonClasses = active ? 'text-white border-b border-[#b2a5db]' : 'text-[#ADB7BE]';
  
  return (
    <button onClick={selectTab}>
    <p className={`mr-3 font-semibold ${buttonClasses}`}>
        {children}
    </p>
    </button>
  )
}

export default TabButton;