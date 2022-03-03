import React from 'react';
import { Formik } from 'formik';

const Formulario = () => {
	
	return (
		<>

			<Formik
				initialValues={{
					nombre:'',
					correo:'',
					contraseña:''
					
				}}

				validate={(valores) => {
					let errors = {};
					
					// validacion del nombre
					if(!valores.nombre){
						errors.nombre ='por favor ingresa un nombre'
							
					}else if(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errors.nombre = 'el nombre solo debe de tener letras y espacios'

					}

					// validacion del correo
					if(!valores.correo){
						errors.correo ='por favor ingresa un correo electronico'
							
					}else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
						errors.correo = 'el correo solo puede tener letras, numeros, puntos, guiones y guion bajo.'

					}

					
					
					return errors
				}}
				onSubmit={async (values, {resetForm} ) => {
					await new Promise((resolve) => setTimeout(resolve, 700));
          			alert(JSON.stringify(values, null, 3));
					resetForm();
					
					console.log("Formulario enviado");
				}}

			
			>

			{({values, errors, touched, handleSubmit, handleChange, handleBlur})=>  (

			<form className="formulario" onSubmit={handleSubmit}>
				
			<div>
				<label htmlFor='nombre'>Nombre</label>
				<input 
				 type="text"
				 id="nombre" 
				 name="nombre" 
				 placeholder="Jean andres"
				 value={values.nombre}
				 onChange={handleChange}
				 onBlur={handleBlur}

				 />
				 {touched.nombre && errors.nombre && <div className='error'> {errors.nombre} </div>}
				 
			</div>

			<div>
				<label htmlFor="correo">Correo</label>
				<input 
				type="email"
				id="correo" 
				name="correo" 
				placeholder="jean1@hotmail.com"
				value={values.correo}
				onChange={handleChange}
				onBlur={handleBlur}

				/>	
				{touched.correo && errors.correo && <div className='error'> {errors.correo} </div>}	
			</div>

			<div>
				<label htmlFor="contraseña">Contraseña</label>
				<input 
				type="password" 
				id="contraseña"
				name="contraseña"
				onChange={handleChange}
				onBlur={handleBlur}
				value={values.contraseña}

				 />

				 
			</div>

			<button type="submit">Enviar</button>
			

			</form>
			)
			}	


			</Formik>
		</>
	)
}
 
export default Formulario;