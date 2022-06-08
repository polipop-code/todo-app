import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
	const onSearchValueChange = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return [
		<input
			className="TodoSearch"
			placeholder="Onion"
			onChange={onSearchValueChange}
		/>,
		// <p>{searchValue}</p>,
	];
}

export { TodoSearch };

/*

Creamos un estado con useState que por defecto va a ser un string vacío que estamos guardando en la variable searchValue, además tenemos una función para actualizar este valor que llamamos setSearchValue.

Tambien tenemos una función onSearchValueChange que cada vez que hagamos algún cambio, que los usuarios escriban algo en el input de búsqueda, va a hacer además de un console.log va a llamar a esa función setSearchValue para actualizar nuestro searchValue (nuestro estado), esto lo estamos llamando en el método onChange de nuestro input y por que devemos de conectarlo por que asi nos lo pide React, estamos indicando que el valor de nuestro imput tiene que ser igual a nuestro estado (searchValue) que vamos ir actualizando con al función setSearchValue, por ultimo tambien queremos mostrar ese valor en un parrafo.

*/
