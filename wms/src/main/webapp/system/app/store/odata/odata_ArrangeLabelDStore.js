Ext.define('cms.store.odata.odata_ArrangeLabelDStore',{
	extend:'Ext.data.Store',
	model:'cms.model.stock.stock_LabelDModel',
	autoLoad:false,
	proxy:{
		type:'ajax',
		method:'post',
		url:'odata_ArrangePackAction_getStockLabelD.action',
		reader:{
			type:'json',
			root:'rootList',
			totalProperty:'totalCount'
		}
	}
});