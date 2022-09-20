import Header from "../template/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
const $ = (element) => document.querySelector(element);

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || $("#header");
  const content = null || $("#content");

  header.innerHTML = await Header();
  let hash = getHash();
  console.log("hash", hash);
  let route = await resolveRoutes(hash); //await por que se puede demorar en obtener, validar y retornar el valor
  //render contiene el valor de las rutas comparada con la que estamos obteniando gracias a la naevgacion del usuario
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
