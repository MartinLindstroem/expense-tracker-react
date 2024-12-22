import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex h-screen w-full">
      <Header />
      <div className="h-full overflow-y-hidden">
        <aside className="fixed left-0 w-64 h-full bg-gray-300 p-4 top-[80px]">
          <nav className="mt-40">
            <ul className="space-y-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 w-screen h-full p-4 mt-[64px] overflow-y-hidden">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
