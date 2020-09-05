Ext.define('cms.model.wms.wms_PntsetmoduleReportModel',{
extend:'Ext.data.Model',
fields:[{name:'moduleId'},
		{name:'reportType'},
		{name:'taskType'},
		{name:'pickType'},
		{name:'operateType'},
		{name:'paperType'},
		{name:'orderType'},
		{name:'deliverObjLevel'},
		{name:'ownerNo'},
		{name:'custNo'},
		{name:'sourceNo'},
		{name:'enterpriseNo'},
		{name:'shipperNo'},
		{name:'labelNo'},
		{name:'articleName'},
		{name:'waveNo'},
		{name:'containerNo'},
		{name:'poNo'},
		{name:'warehouseNo'},

		{name:'reportId'},
		{name:'reportName'},
		{name:'orderNo'},
		{name:'status'},
		{name:'rsvVarod1'},
		{name:'rsvVarod2'},
		{name:'rsvVarod3'},
		{name:'rsvVarod4'},
		{name:'rsvVarod5'},
		
		{name:'rsvVarod6'},
		{name:'rsvVarod7'},
		{name:'rsvVarod8'},
		{name:'rgstName'},
		{name:'rgstDate'},
		{name:'updtName'},
		{name:'updtDate'}
		
		],
idProperty:'enterpriseNo,reportId,paperType,taskType,pickType,operateType,reportType,orderType,deliverObjLevel,useType,ownerNo,custNo,shipperNo'
});