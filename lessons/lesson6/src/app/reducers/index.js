import myExampleReducer from './myExample';
import serviceLocatorReducer from './serviceLocator';

const rootReducer = {
	myExample: myExampleReducer,
	serviceLocator: serviceLocatorReducer,

	/**
	 * Map your reducers here
	 */
};

export default rootReducer;
