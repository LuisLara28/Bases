const { http } = require("../plugins");

export const getPokemoNameById = async (
	id: string | number
): Promise<string> => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

	const pokemon = await http.get(url);

	// const resp = await fetch(url);
	// const pokemon = await resp.json();

	// throw new Error("Pokemon no existe");

	return pokemon.name;
	// return fetch(url)
	// 	.then((response) => response.json())
	// 	.then((resp) => {
	// 		throw new Error("No existe el pokemon");
	// 	})
	// 	.then((pokemon) => pokemon.name);
	// return 10
};
