/**
 *退厂发单
 *创建：zhouhuan
 */
Ext.define('cms.store.rodata.rodata_OutstockDirectStore',{
	extend:'Ext.data.Store',
	pageSize : appConfig.getPageSize(),
	model:'cms.model.rodata.rodata_OutstockDirectModel',
	autoLoad:false,
	proxy:{
		type:'ajax',
		method:'post',
		url:'rodata_OutstockDirectAction_getRodata_OutstockDirect',
		reader:{
			root:'rootList',
			totalProperty:'totalCount'
		}
	}
});