import { useEffect, useState } from 'react';
import CadastroCorrida from './components/CadastroCorrida';
import ListaCorridas from './components/ListaCorridas';
import Resumo from './components/Resumo';
import { salvarCorridas, carregarCorridas } from './services/storageService';

function App() {
  const [corridas, setCorridas] = useState(() => carregarCorridas()); // 🔧 aqui!

  useEffect(() => {
    salvarCorridas(corridas);
  }, [corridas]);

  const adicionarCorrida = (nova) => {
    setCorridas([...corridas, nova]);
  };

  return (
    <div className="container">
      <h1>Dia+Dia - Calculadora de Ganhos</h1>
      <CadastroCorrida onAdd={adicionarCorrida} />
      <ListaCorridas corridas={corridas} />
      <Resumo corridas={corridas} />
    </div>
  );
}

export default App;
