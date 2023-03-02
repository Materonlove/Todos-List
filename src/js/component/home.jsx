import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Importo estilos
import "../../styles/index.css"

//create your first component
const ToDo = () => {
	const [arrTemp, setArrTemp] = useState([
		{ tarea: "Pasear al perro", done: false },
		{ tarea: "Ir al cine", done: false }


	])
	//const arrTemp = ["Pasear al perro", "Ir al cine"]
	const eliminarTarea = (indice) => {
		setArrTemp(
			arrTemp.filter((item, index) => {
				return index != indice
			})
		)
	}
	
	//let contador=arrTemp.length

	useEffect(() => { 
		console.log("se reenderizó el componente Home")
 }, [arrTemp])

	return (
		<div className="container justify-content-center align-item-center">
			<h1> <div className= "justify-content-center d-flex align-item center">TODOS</div> </h1>
			<div className="row d-flex justify-content-center">
			<div id="container">
			 <div className="todo-header"><input
					placeholder="Agregue una tarea nueva"
					onKeyDown={(e) => { //eventListener
						if (e.keyCode == "13") {
							console.log("Presionaste el Enter: ", e.target.value)
							setArrTemp([...arrTemp, { tarea: e.target.value, done: false }])
						}
					}}
				/> </div>
			<ul className="row d-flex justify-content-center list-group">
				{arrTemp && arrTemp.length > 0 ?
					<>{arrTemp.map((item, index) => {											
						return <li key={index} className="d-flex justify-content-between list-group-item">
							{index+1}-{item.tarea} - {item.done ? "Realizada" : "Por Hacer"}


							<button
								className="ocultar"
								type="button"
								onClick={() => {
									eliminarTarea(index)
								}}
							>
								Eliminar
							</button>
						</li>
					})}</>
					:
					<><h3>No hay Tareas</h3>
					</>
				}
			</ul>
			<h5>Cantidad de Tareas: {arrTemp.length}</h5>
		</div>

		</div>

			</div>

	);
};

export default ToDo;
