import React from "react";

const PostFlat = () => {
  return (
    <div className="bg-slate-900 p-5 text-white flex justify-center">
      <div className="bg-gray-950 w-full md:w-3/5 border-2 border-white p-4 rounded-xl shadow-lg shadow-indigo-700 flex flex-col items-center">
        <div className="font-bold text-3xl">Add Your Flat</div>
        <div>
          <select name="city" id="">
            <option value="">Bengalore</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PostFlat;
