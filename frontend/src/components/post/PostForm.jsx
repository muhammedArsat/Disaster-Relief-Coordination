import React, { useState } from 'react';

const districts = [
  { name: "Ariyalur lat: 11.1386 lng: 79.0756" },
  { name: "Chengalpattu lat: 12.6876 lng: 79.9829" },
  { name: "Chennai lat: 13.0827 lng: 80.2707" },
  { name: "Coimbatore lat: 11.0168 lng: 76.9558" },
  { name: "Cuddalore lat: 11.7447 lng: 79.7680" },
  { name: "Dharmapuri lat: 12.1270 lng: 78.1570" },
  { name: "Dindigul lat: 10.3624 lng: 77.9695" },
  { name: "Erode lat: 11.3424 lng: 77.7274" },
  { name: "Kallakurichi lat: 11.7383 lng: 78.9620" },
  { name: "Kanchipuram lat: 12.8352 lng: 79.7036" },
  { name: "Kanyakumari lat: 8.0883 lng: 77.5385" },
  { name: "Karur lat: 10.9601 lng: 78.0766" },
  { name: "Krishnagiri lat: 12.5192 lng: 78.2138" },
  { name: "Madurai lat: 9.9252 lng: 78.1198" },
  { name: "Mayiladuthurai lat: 11.1037 lng: 79.6557" },
  { name: "Nagapattinam lat: 10.7654 lng: 79.8431" },
  { name: "Namakkal lat: 11.2194 lng: 78.1674" },
  { name: "Nilgiris lat: 11.4102 lng: 76.6950" },
  { name: "Perambalur lat: 11.2335 lng: 78.8836" },
  { name: "Pudukkottai lat: 10.3833 lng: 78.8000" },
  { name: "Ramanathapuram lat: 9.3712 lng: 78.8300" },
  { name: "Ranipet lat: 12.9443 lng: 79.2848" },
  { name: "Salem lat: 11.6643 lng: 78.1460" },
  { name: "Sivaganga lat: 9.8478 lng: 78.4825" },
  { name: "Tenkasi lat: 8.9591 lng: 77.3153" },
  { name: "Thanjavur lat: 10.7852 lng: 79.1391" },
  { name: "Theni lat: 10.0104 lng: 77.4760" },
  { name: "Thoothukudi lat: 8.7642 lng: 78.1348" },
  { name: "Tiruchirappalli lat: 10.7905 lng: 78.7047" },
  { name: "Tirunelveli lat: 8.7139 lng: 77.7567" },
  { name: "Tirupathur lat: 12.4966 lng: 78.5603" },
  { name: "Tiruppur lat: 11.1085 lng: 77.3411" },
  { name: "Tiruvallur lat: 13.1421 lng: 79.9082" },
  { name: "Tiruvannamalai lat: 12.2253 lng: 79.0747" },
  { name: "Tiruvarur lat: 10.7723 lng: 79.6367" },
  { name: "Vellore lat: 12.9165 lng: 79.1325" },
  { name: "Viluppuram lat: 11.9362 lng: 79.4871" },
  { name: "Virudhunagar lat: 9.5851 lng: 77.9578" }
];

const PostForm = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);

  const handleDistrictChange = (e) => {
    const district = districts.find((d) => d.name === e.target.value);
    setSelectedDistrict(district);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        className="w-full bg-white p-6 rounded-lg shadow-lg space-y-4
        sm:w-3/4
        md:w-2/4 md:ml-32    /* Increased margin for better centering in tablet view */
        lg:w-2/4"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">Disaster Form</h2>

        <div>
          <label className="block text-gray-600 mb-1">Disaster</label>
          <input
            type="text"
            name="disaster"
            placeholder="Flood"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Location</label>
          <select
            name="location"
            value={selectedDistrict.name}
            onChange={handleDistrictChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          >
            {districts.map((district, index) => (
              <option key={index} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Date</label>
          <input
            type="date"
            name="date"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Time</label>
          <input
            type="time"
            name="time"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Child Count</label>
          <input
            type="number"
            name="childCount"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Female Count</label>
          <input
            type="number"
            name="femaleCount"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Male Count</label>
          <input
            type="number"
            name="maleCount"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Food</label>
          <input
            type="text"
            name="food"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Sanitization</label>
          <input
            type="text"
            name="sanitization"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Cloth</label>
          <input
            type="text"
            name="cloth"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Medical Kit</label>
          <input
            type="text"
            name="medical"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
