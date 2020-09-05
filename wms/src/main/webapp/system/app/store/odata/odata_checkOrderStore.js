/**
 *出货头档
 *创建：lich
 */
Ext.define('cms.store.odata.odata_checkOrderStore',{
	extend:'Ext.data.Store',
	model:'cms.model.odata.odata_ExpMModel',
	pageSize : appConfig.getPageSize(),
	autoLoad:false,
	proxy:{
		type:'ajax',
		method:'post',
		url:'odata_LocateAction_checkOrder',
		reader:{
			root:'rootList',
			totalProperty:'totalCount'
		}
	}
});