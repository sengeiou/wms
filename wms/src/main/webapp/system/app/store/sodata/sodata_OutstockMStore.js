/**
 *获取报损回单头档
 *创建：hkl
 */
Ext.define('cms.store.sodata.sodata_OutstockMStore',{
	extend:'Ext.data.Store',
	model:'cms.model.sodata.sodata_OutStockMModel',
	pageSize : appConfig.getPageSize(),
	storeId:'sodata_OutstockMStore',
	proxy:{
		type:'ajax',
		method:'post',
		url:'sodata_OutStockAction_getOutStock_MList.action',
		reader:{
			root:'rootList',
			totalProperty:'totalCount'
		}
	}
});