Ext.define('cms.model.wms.wms_DefCustomMModel',{
extend:'Ext.data.Model',
fields:[{name:'moduleId'},
		{name:'customId'}, 
		{name:'customName'},
		{name:'enterpriseNo'},
		{name:'show'},
		{name:'showText'},
		{name:'seq'}
		],
idProperty:'moduleId,customId,enterpriseNo'
});