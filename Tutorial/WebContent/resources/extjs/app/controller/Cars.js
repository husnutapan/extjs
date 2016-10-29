Ext.define('myApp.controller.Cars', {
	extend : 'Ext.app.Controller',

	stores : [ 'Cars' ],
	models : [ 'Car' ],
	views : [ 'car.List', 'car.Edit' ],

	init : function() {
		this.control({
			'carList' : {
				itemdblclick : this.editCar
			},

			'carEdit button[action=save]' : {
				click : this.updateCar
			}

		});
	},

	editCar : function(grid, record) {
		var view = Ext.widget('carEdit');
		view.down('form').loadRecord(record);
	},

	updateCar : function(button) {
		console.log(button.up('window').down('form'));
		
		
		var win = button.up('window'),
		form = win.down('form'),
		record = form.getRecord(),
		values = form.getValues();
		
		record.set(values);
		win.close();
	}

});