import React, { useEffect, useState } from "react";
import instance from "../api/Test";
const list = [
  "UI design",
  "Delivery driver",
  "Warehouse",
  "Web developer",
  "Marketing",
  "Project manager",
  "Sales",
  "Remote",
  "Weekly",
  "Medical",
  "Welder",
  "Engineer",
];
const PorpularSearches = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await instance.get("/api/job/");
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="ml-96 mt-20 w-[700px] text-center ">
     {loading && <div> Loading...</div>}
     {!loading &&
     <div>
   <div className="text-left p-2 border">
        <h1 className="">Sample Text</h1>
      </div>
      {/* <div className=" grid grid-cols-4 gap-3">
        {data.map((item, index) => (
          <div key={item.id} className="p-2 border">
            {item.ti}
          </div>
        ))}
      </div> */}
     </div>
     }
   
    
    </div>
  );
};

export default PorpularSearches;
