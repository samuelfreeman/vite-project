import React, { useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
 baseURL: "https://job-search-yt0t.onrender.com",
 timeout: 10000,
 headers: {
    "Content-Type": "application/json",
    Authorization: "",
 },
});

const Axios = () => {
 const [loading, setLoading] = useState(true); // Initialize loading state to true
 const [data, setData] = useState([]);
 const [selectedItemId, setSelectedItemId] = useState(null);
 const [formData, setFormData] = useState({
    name: "",
    description: "",
 });

 useEffect(() => {
    fetchData();
 }, []); // Empty dependency array to run effect only once

 const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await instance.get("/api/job");
      console.log(response.data);
      // Assuming the response directly contains the array of jobs
      setData(response.data.jobs);
 // Adjusted to directly use response.data
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Ensure loading is set to false even if there's an error
    }
 };

 const handleSelectItem = (id) => {
    setSelectedItemId(id);
    const selectedItem = data.find((item) => item.id === id);
    setFormData({
      name: selectedItem.name,
      description: selectedItem.description,
    });
 };




 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await instance.patch(`/api/job/${selectedItemId}`, formData); // Fixed the URL to include a slash before the ID
      setFormData({ name: "", description: "" });
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
 };

 const handleDelete = async () => {
    try {
      await instance.delete(`/api/job/${selectedItemId}`); // Fixed the URL to include a slash before the ID
      setFormData({ name: "", description: "" });
      setSelectedItemId(null);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
 };

 const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
 };

 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       {loading ? (
         <p className="text-lg font-semibold text-blue-500">Loading...</p>
       ) : (
         <>
           <ul className="space-y-4">
             {Array.isArray(data) &&
               data.map((item, index) => (
                 <li
                   key={index}
                   onClick={() => handleSelectItem(item.id)}
                   className="bg-white shadow-md rounded-md p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                 >
                   {item.title}
                 </li>
               ))}
           </ul>
   
           {/* Form for editing selected item */}
           {selectedItemId && (
             <form onSubmit={handleSubmit} className="mt-8">
               {/* Input fields for editing data */}
               <input
                 type="text"
                 name="title"
                 value={formData.name}
                 onChange={handleChange}
                 className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
               />
               <textarea
                 name="description"
                 value={formData.description}
                 onChange={handleChange}
                 className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
               />
               {/* Submit button for updating data */}
               <button
                 type="submit"
                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
               >
                 Update
               </button>
               {/* Button for deleting data */}
               <button
                 type="button"
                 onClick={handleDelete}
                 className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors duration-200 ml-4"
               >
                 Delete
               </button>
             </form>
           )}
         </>
       )}
    </div>
   );
   
   
};

export default Axios;
