import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import BaseNumberInput from "./pages/BaseNumberInput";
import BaseLayout from "./components/layouts/BaseLayout"; 
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route index path="calculator" element={<Calculator />} />
            <Route path="convertor" element={<BaseNumberInput />} />
            <Route path="*" element={<Calculator />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
