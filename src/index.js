import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './components/Form';
import './index.css';


ReactDOM.render(
	<React.StrictMode>
		<div className="contenedor">
			<Formulario />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);