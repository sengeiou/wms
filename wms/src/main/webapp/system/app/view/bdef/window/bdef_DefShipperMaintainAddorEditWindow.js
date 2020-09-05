/**
 * 模块名称：承运商资料维护
 * 模块编码：1801
 * 创建：hj
 */
Ext.define('cms.view.bdef.window.bdef_DefShipperMaintainAddorEditWindow',{
	extend:'Ext.window.Window',
	alias:'widget.bdef_DefShipperMaintainAddorEditWindow',
	layout:'border',
	id:'bdef_DefShipperMaintainAddorEditWindow',
	width:900,
	height:350,
	modal:true,
	items:[
	{
	    xtype:'form',
	    region:'center',
	    id:'formBdef_DefShipperMaintainAddorEdit1801',
	    frame:true,
	    items:[
	    {
            xtype:'fieldset',
  			layout: {
      		type: 'table',
      	        columns: 3
      	    },
      	    defaults:{
    	   		xtype:'textfield',
    	   		margin:'5 4 1 4',
    	   		labelAlign:'right',
    	   		labelWidth:120
       	    },
       	    items:[
	        {
        	    fieldLabel:$i18n.shipper_no,//承运商编号
        	    id:'txtShipperNo1801',
        	    maxLength:15,
        	    allowBlank:false,
    		    beforeLabelTextTpl:required
	        },{
            	xtype:'wms_DefFieldValCombo',
        	    fieldLabel:'承运商类型',//承运商类型
        	    id:'cmbShipperType1801',
	 	    	store:Ext.create("cms.store.common.comboStore").load(
				{
					params:{str:"BDEF_DEFSHIPPER,SHIPPER_TYPE"}
				})
            },{
        	    fieldLabel:$i18n.shipper_name,//承运商名称
        	    id:'txtShipperName1801',
        	   //  colspan:2,
        	    maxLength:100,
        	    allowBlank:false,
    		    beforeLabelTextTpl:required
	        },{
        	    fieldLabel:$i18n.contact,//联系人
        	    id:'txtContact1801',
        	    //width:558,       	    
        	    maxLength:20
            },{
        	    fieldLabel:$i18n.tel,//电话
        	    id:'txtTel1801',
        	    colspan:2,
        	    maxLength:15
	        },{
        	    fieldLabel:$i18n.address,//地址
        	    id:'txtAddress1801',
        	    maxLength:100,
        	    width:844,
        	    colspan:3
	        },{
            	xtype:'datefield',
        	    fieldLabel:$i18n.compact_date,//合同日期
        	    id:'dateCompactDate1801'
            },{
            	xtype:'datefield',
        	    fieldLabel:$i18n.end_date,//到期日
        	    id:'dateEndDate'
            },{
            	xtype:'wms_DefFieldValCombo',
        	    fieldLabel:$i18n.status,//状态
        	    id:'cmbStatus1801',
	 	    	store:Ext.create("cms.store.common.comboStore").load(
				{
					params:{str:"N,DEF_STATUS"}
				})
            },{
            	xtype:'wms_DefFieldValCombo',           	
        	    fieldLabel:'面单类型',//面单类型
        	    id:'cmbPaperType1801',
	 	    	store:Ext.create("cms.store.common.comboStore").load(
				{
					params:{str:"BDEF_DEFSHIPPER,PAPER_TYPE"}
				})
            },{
 				fieldLabel : '报表id',   //报表id
 				colspan:2,
 				id:'reportId1801',
					xtype:'wms_DefFieldValCombo',
					store:Ext.create('cms.store.bdef.bdef_DefOwnerComboStore',{
 			    	    proxy:{
 							type:'ajax',
 							async:false,
 							method:'post',
 							url:'bdef_DefShipperAction_queryReportIdCombo.action',
 							reader:{
 								root:'rootList',
 								totalProperty:'totalCount'
 							}
 						}
 				    }).load(),
 				    displayField : 'dropValue',
 				    valueField : 'value'
	        },/*{
            	xtype:'wms_DefFieldValCombo',
        	    fieldLabel:'面单打印方式',//面单打印方式
        	    id:'cmbPrintType1801',
	 	    	store:Ext.create("cms.store.common.comboStore").load(
				{
					params:{str:"BDEF_DEFSHIPPER,PRINT_TYPE"}
				})
            },*/{
            	xtype:'wms_DefFieldValCombo',
        	    fieldLabel:'取快递单号方式',//取快递单号方式
        	    id:'cmbPaperComifireFlag1801',
	 	    	store:Ext.create("cms.store.common.comboStore").load(
				{
					params:{str:"BDEF_DEFSHIPPER,PAPER_COMIFIRE_FLAG"}
				})
            },{
            	xtype:'wms_DefFieldValCombo',
        	    fieldLabel:'确认快递单号方式',//确认快递单号方式
        	    id:'cmbGetPaperType1801',
	 	    	store:Ext.create("cms.store.common.comboStore").load(
				{
					params:{str:"BDEF_DEFSHIPPER,GET_PAPER_TYPE"}
				})
            },{
            	xtype:'wms_DefFieldValCombo',
        	    fieldLabel:'是否单独拣货',//是否单独拣货
        	    id:'cmbSingleLocateFlag1801',
	 	    	store:Ext.create("cms.store.common.comboStore").load(
				{
					params:{str:"BDEF_DEFSHIPPER,SINGLE_LOCATE_FLAG"}
				})
            },{
            	xtype:'numberfield',
        	    fieldLabel:$i18n.disprice,//里程单价
        	    id:'txtDisprice1801',
        	    maxLength:8
            },{
            	xtype:'numberfield',
        	    fieldLabel:$i18n.graprice,//重量单价
        	    id:'txtGraprice1801',
        	    maxLength:8
            },{
            	xtype:'numberfield',
        	    fieldLabel:$i18n.volprice,//材积单价
        	    id:'numVolprice1801'
            },{
            	xtype:'numberfield',
        	    fieldLabel:$i18n.multi,//增值单位
        	    id:'numMulti1801'
            },{
            	xtype:'textfield',
        	    fieldLabel:$i18n.memo,//备注
        	    id:'txtMemo1801'
            }]
	   }]
    },{
		region:'south',
		xtype:'commMenuWidget5',
		border:0,
		id:'bdef_MenuWidget1801'
	}]
});
