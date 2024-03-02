import ReasonInput from "./ReasonInput";
import { useState } from "react";

export default function LoggingGrid() {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const max_cries = Array.from({ length: 10 }, (_, i) => i + 1);
  const [showReasonInput, setShowReasonInput] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const generateFrequencyLabels = () => {
    return max_cries.map((frequency) => (
      <th key={frequency} className="w-10 h-10 text-center text-white">
        {frequency}
      </th>
    ));
  };

  const generateGrid = () => {
    return week.map((day) => (
      <tr key={day}>
        <td className="w-10 h-10 text-center text-white">{day}</td>
        {max_cries.map((frequency) => (
          <td
            key={frequency}
            className="w-10 h-10 cursor-pointer text-center border border-gray-500 hover:bg-gray-800 focus:bg-gray-800 transition duration-300 ease-in-out"
            onClick={() => setShowReasonInput(!showReasonInput)}
            onMouseEnter={(e) => setPosition({ x: e.clientX, y: e.clientY })}
          ></td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-md">
      <p className="text-white text-center mb-4">
        25th February 2024 - 2nd March 2024
      </p>
      <table className="w-full">
        <thead>
          <tr>
            <th></th>
            {generateFrequencyLabels()}
          </tr>
        </thead>
        <tbody>{generateGrid()}</tbody>
      </table>
      {showReasonInput && (
        <ReasonInput
          x={position.x}
          y={position.y}
          onHide={() => setShowReasonInput(!showReasonInput)}
        />
      )}
    </div>
  );
}
