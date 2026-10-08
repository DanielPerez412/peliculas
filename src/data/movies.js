// Los pósters son imágenes de relleno. Puedes reemplazarlos por la URL real de cada póster.
const poster = (title) =>
  `https://placehold.co/400x600/2a2540/f1ece2?text=${encodeURIComponent(title)}`;

const movies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ciencia ficción",
    year: 2014,
    rating: 8.7,
    image: poster("Interestelar"),
    description:
      "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
  },
  {
    id: 2,
    title: "El Padrino",
    genre: "Drama",
    year: 1972,
    rating: 9.2,
    image: poster("El Padrino"),
    description:
      "El patriarca de una familia mafiosa transfiere el control de su imperio a su hijo más reacio.",
  },
  {
    id: 3,
    title: "Parásitos",
    genre: "Thriller",
    year: 2019,
    rating: 8.5,
    image: poster("Parásitos"),
    description:
      "Una familia sin recursos se infiltra poco a poco en la vida de una familia adinerada, con consecuencias inesperadas.",
  },
  {
    id: 4,
    title: "Spider-Man: Un nuevo universo",
    genre: "Animación",
    year: 2018,
    rating: 8.4,
    image: poster("Spider-Man: Un nuevo universo"),
    description:
      "Miles Morales descubre que no es el único Spider-Man cuando varias dimensiones colisionan en su ciudad.",
  },
  {
    id: 5,
    title: "Mad Max: Furia en el camino",
    genre: "Acción",
    year: 2015,
    rating: 8.1,
    image: poster("Mad Max: Furia en el camino"),
    description:
      "En un desierto postapocalíptico, una guerrera y un vagabundo huyen de un tirano a toda velocidad.",
  },
  {
    id: 6,
    title: "El viaje de Chihiro",
    genre: "Fantasía",
    year: 2001,
    rating: 8.6,
    image: poster("El viaje de Chihiro"),
    description:
      "Una niña queda atrapada en un mundo de espíritus y debe trabajar en una casa de baños para salvar a sus padres.",
  },
  {
    id: 7,
    title: "Pulp Fiction",
    genre: "Crimen",
    year: 1994,
    rating: 8.9,
    image: poster("Pulp Fiction"),
    description:
      "Varias historias de criminales de Los Ángeles se cruzan en una narración no lineal llena de humor negro.",
  },
  {
    id: 8,
    title: "Cuestión de tiempo",
    genre: "Romance",
    year: 2013,
    rating: 7.8,
    image: poster("Cuestión de tiempo"),
    description:
      "Un joven descubre que puede viajar al pasado y lo usa para mejorar su vida amorosa, sin prever el costo.",
  },
  {
    id: 9,
    title: "Todo en todas partes al mismo tiempo",
    genre: "Ciencia ficción",
    year: 2022,
    rating: 7.8,
    image: poster("Todo en todas partes al mismo tiempo"),
    description:
      "Una dueña de lavandería salta entre universos paralelos para enfrentar una amenaza que lo abarca todo.",
  },
  {
    id: 10,
    title: "Get Out",
    genre: "Terror",
    year: 2017,
    rating: 7.8,
    image: poster("Get Out"),
    description:
      "Un fotógrafo visita a la familia de su novia y descubre un secreto inquietante detrás de su amabilidad.",
  },
  {
    id: 11,
    title: "La La Land",
    genre: "Musical",
    year: 2016,
    rating: 8.0,
    image: poster("La La Land"),
    description:
      "Una aspirante a actriz y un pianista de jazz persiguen sus sueños en Los Ángeles y entre ellos.",
  },
  {
    id: 12,
    title: "Superbad",
    genre: "Comedia",
    year: 2007,
    rating: 7.6,
    image: poster("Superbad"),
    description:
      "Dos amigos a punto de graduarse intentan conseguir alcohol para una fiesta y vivir una noche inolvidable.",
  },
];

export default movies;
