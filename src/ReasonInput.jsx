export default function ReasonInput({ selectedDate, onHide, addReason }) {
  const handleSubmit = (e) => {
    onHide();
    e.preventDefault();
    const reason = e.target.reason.value;
    addReason(reason);
  };

  return (
    <div
      className="flex flex-col items-center justify-between w-1/4 bg-white p-8 rounded-lg shadow-lgs"
      styles={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="reason"
            className="block text-gray-700 font-bold mb-2"
          >
            Reason for Crying on &nbsp;
            {selectedDate}
          </label>
          <textarea
            type="submit"
            name="reason"
            id="reason"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-lightBlue"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brighterBlue text-white p-2 rounded"
        >
          Add Reason
        </button>
        <button
          type="button"
          onClick={onHide}
          className="w-full bg-darkGray text-white p-2 rounded mt-4"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
