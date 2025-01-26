import React from 'react';

const PostForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  p-3">
      <form className="w-full max-w-2xl md:max-w-xl lg:max-w-2xl bg-white p-6 rounded-lg shadow-lg space-y-4 md:ml-60 lg:ml-20">
        <h2 className="text-xl font-bold text-gray-700 text-center">Disaster Form</h2>

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
          <input
            type="text"
            name="location"
            placeholder="Chennai"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Date and Time</label>
          <input
            type="datetime-local"
            name="date"
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
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
