const Register = () => {
  return (
    <div className="flex justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-full max-w-xl p-4 bg-white rounded-lg shadow-lg mt-20">
        <h2 className="text-3xl font-bold text-center mb-4">Sign up for Expense Tracker</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              id="email"
              type="email"
              name="email"
              placeholder="example@expense-tracker.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              id="password"
              type="password"
              name="password"
              placeholder="**********"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 text-sm font-bold" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              id="confirm-password"
              type="password"
              name="confirm-password"
              placeholder="**********"
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
