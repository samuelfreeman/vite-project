import React from 'react';

const FrequentlySearchedCareers = () => {
 const careers = [
    ['Software Engineer', 'Dental Hygienist', 'Accountant', 'Nurse', 'Delivery Driver', 'Warehouse Associate', 'Police Officer', 'Medical', 'Social Worker', 'Teacher'],
    ['UI Designer', 'Security Personnel', 'Truck driver', 'Quality Assurance', 'Courier', 'Administrative Assistant', 'Welder', 'Marketing Director', 'Firefighter', 'Data Analyst'],
    ['Remote', 'Real Estate Agent', 'Data Scientist', 'IT', 'Electrician', 'Flight Attendant', 'Physician Assistant', 'Server', 'Project Manager', 'Supervisor']
 ];

 return (
    <div className="  ml-5 flex justify-center  px-4 h-[30vh] pb-[500px] pt-[500px] md:pt-[50px]  w-full my-50 ">
      <div className='w-full '>

      <h1 className="text-2xl font-bold mb-4">Frequently searched careers</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {careers.map((column, index) => (
          <div key={index} className="col-span-1">
            {column.map((career, idx) => (
              <p key={idx} className="mb-2">{career}</p>
            ))}
          </div>
        ))}
      </div>
      </div>
    </div>
 );
};

export default FrequentlySearchedCareers;
