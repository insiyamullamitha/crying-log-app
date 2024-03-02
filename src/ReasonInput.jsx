export default function ReasonInput({ x, y, onHide }) {
  const position = {
    position: "absolute",
    top: y,
    left: x,
  };

  const handleSubmit = (event) => {
    onHide();
  };

  return (
    <div
      className="flex flex-col items-center justify-between w-64 bg-white p-8 rounded-lg shadow-lg"
      style={position}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="reason"
            className="block text-gray-700 font-bold mb-2"
          >
            Reason
          </label>
          <textarea
            type="text"
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
      </form>
    </div>
  );
}
