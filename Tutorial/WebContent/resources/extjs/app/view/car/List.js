Ext.define('myApp.view.car.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.carList',
	title : 'All Car List',

	store : 'Cars',

	initComponent : function() {
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
