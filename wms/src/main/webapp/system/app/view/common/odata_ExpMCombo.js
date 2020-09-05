/**
 * 承运商资料、公用組件
 * Jun
 */
Ext.define('cms.view.common.odata_ExpMCombo', {
	extend : 'Ext.form.ComboBox',
	alias : 'widget.odata_ExpMCombo',
	typeAhead : false,
	hideTrigger : true,	
	displayField : 'dropValue',
	valueField : 'value',
	mode : 'remote', // 远程访问
	store : Ext.create("cms.store.odata.odata_ExpMComboStore"),
	queryMode : 'remote',// [remote]非本地
	minChars : 1,// 多少字符请求1次
	queryParam : 'pageSql',// 请求参数
	align : 'left',
	matchFieldWidth:false,
	forceSelection : true,//必须选择 ，不然就清空
	/*
	 * listeners:{ select : function(combo, records, eOpts) { var text
	 * ="["+records[0].data.value+"]"+records[0].data.text; combo.setValue(text) } },
	 */
	listConfig : {
		width : 500,
		loadingText : '查询中...',
		emptyText : '没有找到相应的数据..',
		getInnerTpl : function() {
	    // return '[{value}]{text}'
		return '{dropValue}';
		}
	}
});