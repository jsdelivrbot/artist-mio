import { combineReducers } from 'redux';
import artists from './reducer-artists';
import active_artist  from './reducer-active-artist'; 


const rootReducer = combineReducers ({
  // importamos el nombre del reducer (artist) de lo vamos a pasar ak store
  artists,
  active_artist 
});

export default rootReducer;