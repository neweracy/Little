import Render from "./Components/render";
import TextPart from "./Components/Text";
import './index.css';
import './font/Bebas_Neue/BebasNeue-Regular.ttf'

function App() {
  return (
    <div className=" h-screen w-screen overflow-hidden flex flex-col lg:flex-row  items-center justify-center bg-gradient-to-b  lg:bg-gradient-to-r from-black via-red-600  to-red-400">
      <TextPart />

     <Render />
    </div>
  );
}

export default App;
