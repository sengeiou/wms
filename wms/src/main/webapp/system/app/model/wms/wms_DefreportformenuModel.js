Ext.define('cms.model.wms.wms_DefreportformenuModel',{
extend:'Ext.data.Model',
fields:[{name:'moduleId'},
		{name:'pgmId'},
		{name:'procName'},
		{name:'show'},
		{name:'showText'},
		{name:'orderNo'},
		{name:'enterpriseNo'}
		],
idProperty:'moduleId,pgmId,enterpriseNo'
});