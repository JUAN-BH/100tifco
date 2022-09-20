import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();

  const view = `
        <div class="Characters">
        ${characters.results
          .map((e) => {
            return `
            <article class="Characters-item"> 
                <a href="#/${e.id}/">
                    <img src="${e.image}" alt="${e.name}"/>
                    <h2>${e.name}</h2>
                </a>
            </article>
            `;
          })
          .join("")}
        </div>
    `;
  return view;
};

export default Home;
