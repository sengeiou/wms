/**
 * 模块名称：科目设置维护
 * 模块编码：B303
 * 创建：hcx 
 */
Ext.define('cms.store.cost.cost_AccountMStore',{
	extend:'Ext.data.Store',
	model:'cms.model.cost.cost_AccountMModel', 
	pageSize : appConfig.getPageSize(),
	autoLoad:false,
     proxy: {
        type: 'ajax',
        method: 'post',
        url: 'cost_AccountAction_getAccountMList',
    	reader : {
    		type:'json',
    		root : 'rootList',
    		totalProperty : 'totalCount'
    	}
    }
});