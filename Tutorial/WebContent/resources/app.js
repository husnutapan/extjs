Ext.application({
	name : 'myApp',
	appFolder : 'resources/extjs/app',
	controllers : [ 'Cars' ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : {
				xtype : 'carList',
			}
		});
	}
});