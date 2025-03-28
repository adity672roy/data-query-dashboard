import React from "react";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory"; 

const App = () => {
  return (
    
      <div className="min-h-screen p-5 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white p-5 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Gen AI Data Query Dashboard</h1>
          <QueryInput />
          <QueryHistory />
        </div>
      </div>
     
  );
};

export default App;
