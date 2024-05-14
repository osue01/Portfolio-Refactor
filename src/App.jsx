import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header class="flex nav-space">
        <h1> Olivia E Sue </h1>

        <div class="icon">
          <img src="./assets/IMG_1851.jpg" alt="Olivia Na Pali" />
        </div>

        <nav>
          <ul class="nav-list">
            <li>
              <Link to="/">About Olivia</Link>
            </li>
            <li>
              <Link to="/projects">Recent Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Olivia</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
