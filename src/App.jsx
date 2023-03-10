import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

//comments
function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} alt="added new" />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
