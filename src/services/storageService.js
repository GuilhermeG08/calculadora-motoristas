const STORAGE_KEY = "corridas_drivecalc";

export function salvarCorridas(lista) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

export function carregarCorridas() {
  const dados = localStorage.getItem(STORAGE_KEY);
  return dados ? JSON.parse(dados) : [];
}

export function limparCorridas() {
  localStorage.removeItem(STORAGE_KEY);
}
