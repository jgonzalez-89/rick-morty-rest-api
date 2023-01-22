import { createStore } from 'redux';

// Importar reducers
import rootReducer from './reducers';

// Crear el almacén de estado
const store = createStore(rootReducer);

export default store;