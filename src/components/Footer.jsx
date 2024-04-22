import React from 'react'
const list =["Hiring Lab","&copy2024 JobHub", "Career Advice","Work at JobHub","Browse Jobs","Browse Companies","Your Privacy Choices","Terms & Conditions","Salaries"];
const Footer = () => {
  return (
    <div className=" mt-20 h-52  w-full text-center  bg-button ">

    <div className=" text-white  grid grid-cols-4 py-10 ">
         {list.map((item, index) => (
              <div key={index} className="px-2 ">
                   {item}
              </div>
         ))}
    </div>
</div>
  )
}

export default Footer
