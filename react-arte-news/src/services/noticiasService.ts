import axios from "axios";
import { AxiosError } from "axios";

const BASE_URL = "http://localhost:3001";

axios.defaults.timeout = 5000;

export const getNoticias = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/noticias`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError;
      if (serverError.response) {
        console.error(
          "Error en la respuesta del servidor:",
          serverError.response.data
        );
      } else if (serverError.request) {
        console.error("Sin respuesta del servidor:", serverError.request);
      }
    } else {
      console.error("Error al configurar la solicitud:", error);
    }
    throw error;
  }
};
