Ext.define('myApp.view.car.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.carList',
	title : 'All Car List',

	initComponent : function() {
		this.store = {
			fields : [ 'name', 'brand', 'price' ],
			data : [ {
				name : 'Megane',
				brand : 'Renault',
				price : 40000
			}, {
				name : 'Focus',
				brand : 'Focus',
				price : 60000
			}, {
				name : 'Corolla',
				brand : 'Toyota',
				price : 30000
			}, {
				name : 'BMW 520d',
				brand : 'BWM',
				price : 200000
			}, ]

		},

		this.columns = [ {
			header : 'Name',
			dataIndex : 'name',
			flex : 1
		}, {
			header : 'Brand',
			dataIndex : 'brand',
			flex : 1
		}, {
			header : 'Price',
			dataIndex : 'price',
			flex : 1
		} ];

		this.callParent(arguments);

	}

});
