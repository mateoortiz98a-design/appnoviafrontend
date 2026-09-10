const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

async function manejarRespuesta(res) {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Error en la solicitud');
  }
  return data;
}

export async function registrarRespuesta({ acepto, intentosEsquivos }) {
  const res = await fetch(`${API_URL}/respuesta`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ acepto, intentosEsquivos }),
  });
  return manejarRespuesta(res);
}

export async function obtenerEstadoRespuesta() {
  const res = await fetch(`${API_URL}/respuesta/estado`);
  return manejarRespuesta(res);
}

export async function enviarMensaje(texto) {
  const res = await fetch(`${API_URL}/mensaje`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ texto }),
  });
  return manejarRespuesta(res);
}
