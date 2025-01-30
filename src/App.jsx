import { useEffect, useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  const [valorIngresado, setValorIngresado] = useState("");

  const limpiarDisplay = () => setValorIngresado("");

  const evaluarExpresion = () => {
    try {
      if (/[^0-9+\-*/.]/.test(valorIngresado)) {
        throw new Error("Entrada inválida");
      }
      setValorIngresado(eval(valorIngresado).toString());
    } catch {
      limpiarDisplay();
    }
  };

  const manejarEntrada = (value) => {
    if (value === "C") {
      limpiarDisplay();
    } else if (value === "=" || value === "Enter") {
      evaluarExpresion();
    } else if (value === "Backspace") {
      setValorIngresado((prev) => prev.slice(0, -1));
    } else {
      if (valorIngresado === "Error") {
        setValorIngresado(value);
      } else if (!/[*+\-/]$/.test(valorIngresado) || !/[*+\-/]/.test(value)) {
        setValorIngresado((prev) => prev + value);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (/[0-9+\-*/.=]|Enter|Backspace/.test(event.key)) {
        manejarEntrada(event.key);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="bg-[#232946] w-full h-dvh flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] pb-4 uppercase">Calculadora Interactiva</h1>
      <div className="w-full md:w-[60%] lg:w-[40%] xl:w-[25%] m-4 p-4 bg-[#b8c1ec] rounded-lg shadow-lg">
        <Display value={valorIngresado} />
        <Keypad onButtonClick={manejarEntrada} />
      </div>
    </div>
  );
}

export default App;