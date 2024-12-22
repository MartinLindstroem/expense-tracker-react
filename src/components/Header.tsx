import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed mb-1 top-0 left-0 w-full bg-gray-700 text-white p-4 flex h-20 justify-between">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>
      <Link to="/register" className="btn">
        Sign up
      </Link>
    </header>
  );
};

export default Header;
