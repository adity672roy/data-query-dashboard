import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuery, querySuccess, queryFailure } from "../store";

const suggestions = [
  "What is the sales trend?",
  "Show me the profit analysis",
  "Customer retention rates?",
  "Revenue growth over the last quarter?",
  "Which product category is most profitable?",
  "How does customer engagement compare this year?",
  "What is the regional sales breakdown?",
];

const generateMockResults = () => [
  { name: "Jan", value: Math.random() * 100 },
  { name: "Feb", value: Math.random() * 100 },
  { name: "Mar", value: Math.random() * 100 },
];

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.queries.loading);


  const handleQuerySubmit = () => {
    if (!query.trim() || !suggestions.includes(query)) {
      dispatch(
        queryFailure("Invalid query. Please enter a meaningful question.")
      );
      return;
    }
    dispatch(submitQuery());

    setTimeout(() => {
      dispatch(querySuccess({ query, data: generateMockResults() }));
    }, 1500);
  };

  return (
    <div className="py-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a business question..."
        className="w-full p-2 border rounded mb-3"
      />
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 mb-3">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => setQuery(suggestion)}
            className="px-3 py-1 bg-gray-200 rounded text-sm"
          >
            {suggestion}
          </button>
        ))}
      </div>
      <button
        onClick={handleQuerySubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit Query"}
      </button>
    </div>
  );
};

export default QueryInput;
