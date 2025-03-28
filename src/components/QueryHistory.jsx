import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const QueryHistory = () => {
  const { queries, error } = useSelector((state) => state.queries);

  return (
    <div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {queries.map((q, index) => (
        <div key={index} className="p-3 border rounded mb-3">
          <p className="font-semibold">Query: {q.query}</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={q.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default QueryHistory;