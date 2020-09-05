/**
 *出货回单
 *创建：hcx
 */
Ext.define('cms.store.odata.odata_CarReceiptStore',{
	extend:'Ext.data.Store',
	model:'cms.model.odata.odata_CarReceiptModel',
	pageSize : appConfig.getPageSize(),
	autoLoad:false,
	proxy:{
		type:'ajax',
		method:'post',
		url:'odata_CarReceiptAction_getCarReceiptList',
		reader:{
			root:'rootList',
			totalProperty:'totalCount'
		}
	}
});