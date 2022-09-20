const resolveRoutes = (route) => {
  console.log("route", route);
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `${route}`;
};

export default resolveRoutes;

//se encarga de saber a donde enviar el template
