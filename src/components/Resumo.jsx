export default function Resumo({ corridas }) {
  const total = corridas.reduce((acc, c) => acc + c.valor, 0);
  const totalKm = corridas.reduce((acc, c) => acc + c.km, 0);
  const mediaKm = totalKm ? (total / totalKm).toFixed(2) : 0;

  return (
    <div>
      <h2>Resumo:</h2>
      <p>Total ganho: R$ {total.toFixed(2)}</p>
      <p>Total KM rodado: {totalKm} km</p>
      <p>Média por KM: R$ {mediaKm}</p>
    </div>
  );
}
