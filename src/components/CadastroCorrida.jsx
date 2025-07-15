import { useState } from 'react';

export default function CadastroCorrida({ onAdd }) {
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');
  const [km, setKm] = useState('');

  //Verificacao de campos em branco
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data || !valor || !km) {
      alert("Preencha todos os campos!");
      return;
    }

    const nova = {
      id: Date.now(),
      data,
      valor: parseFloat(valor),
      km: parseFloat(km),
    };

    onAdd(nova);
    setData('');
    setValor('');
    setKm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Nova Corrida</h2>
      <input type="date" value={data} onChange={(e) => setData(e.target.value)} /><br />
      <input type="number" placeholder="Valor ganho" value={valor} onChange={(e) => setValor(e.target.value)} /><br />
      <input type="number" placeholder="KM rodado" value={km} onChange={(e) => setKm(e.target.value)} /><br />
      <button type="submit">Adicionar Corrida</button>
    </form>
  );
}
