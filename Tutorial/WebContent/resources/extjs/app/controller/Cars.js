Ext.define('myApp.controller.Cars', {
	extend : 'Ext.app.Controller',

	views : [ 'car.List', 'car.Edit' ],

	init : function() {
		this.control({
			'carList' : {
				itemdblclick : this.editCar
			}
		});
	},

	editCar : function(grid, record) {
		var view = Ext.widget('carEdit');
		view.down('form').loadRecord(record);
	}

});