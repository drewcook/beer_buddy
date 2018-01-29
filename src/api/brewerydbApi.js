const BASE = "http://api.brewerydb.com/v2";
const KEY = "69ee360e54918c2ed9d0e2d8568dafda";
/**
 * Retrieve data from BreweryDB API
 *
 * @param category
 * @returns Promise
 */

export function getBreweryDB() {
	fetch(`${BASE}/breweries/?key=${KEY}`)
		.then((response)=> {
			return console.log(response);
		})
		.catch((err) => console.log(err));
};

export function searchBreweryDB(keyword) {
	const SEARCH = `/search?q=${keyword}`;
	const queryURL = `${BASE + SEARCH}&key=${KEY}`;
	return fetch(queryURL)
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson.movies;
		})
		.catch((error) => {
			console.error(error);
		});
}
