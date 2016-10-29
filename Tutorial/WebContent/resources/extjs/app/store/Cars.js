Ext.define('myApp.store.Cars', {
	extend : 'Ext.data.Store',
	model : 'myApp.model.Car',
	data : [ {
		name : 'Megane',
		brand : 'Renault',
		price : 40000
	}, {
		name : 'Focus',
		brand : 'Ford',
		price : 60000
	}, {
		name : 'Corolla',
		brand : 'Toyota',
		price : 30000
	}, {
		name : 'BMW 520d',
		brand : 'BWM',
		price : 200000
	} ]
});
