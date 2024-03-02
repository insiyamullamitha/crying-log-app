import ReasonInput from "./ReasonInput";
import { useState } from "react";

export default function LogDay({ date }) {
  const [showReasonInput, setShowReasonInput] = useState(false);
  const [reasons, setReasons] = useState([]);

  const addReason = (reason) => {
    if (!reason) return;
    setReasons([...reasons, reason]);
  };
  return (
    <>
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
        <p>Saturday 2 March 2024</p>
        <button
          className="bg-brighterBlue text-white p-2 rounded"
          onClick={() => setShowReasonInput(true)}
        >
          Add Reason
        </button>
      </div>
      {showReasonInput && (
        <ReasonInput
          selectedDate="Saturday 2 March 2024"
          onHide={() => setShowReasonInput(false)}
          addReason={addReason}
        />
      )}
      <div className="mt-4 text-white">
        <ul>
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
