Ext.define('myApp.view.car.Edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.carEdit',

	title : 'Edit Car',
	layout : 'fit',
	autoShow : true,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			items : [ {
				xtype : 'textfield',
				name : 'name',
				fieldLabel : 'Name'
			}, {
				xtype : 'textfield',
				name : 'brand',
				fieldLabel : 'Brand'
			}, {
				xtype : 'textfield',
				name : 'price',
				fieldLabel : 'Price'
			} ]
		} ];

		this.buttons = [ {
			text : 'Save',
			action : 'save'
		}, {
			text : 'Cancel',
			scope : this,
			handler : this.close
		} ];
		this.callParent(arguments);

	}

});
