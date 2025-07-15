export default function ListaCorridas({ corridas }) {
  return (
    <div>
      <h2>Corridas:</h2>
      <ul>
        {corridas.map(c => (
          <li key={c.id}>
            {c.data} — R$ {c.valor.toFixed(2)} — {c.km} km
          </li>
        ))}
      </ul>
    </div>
  );
}
