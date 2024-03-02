import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-lightBlue"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-lightBlue"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brighterBlue text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-brighterBlue">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
