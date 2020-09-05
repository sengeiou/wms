/**
 * 模块名称：报表控制器
 * 创建：周欢
 */
var saveFlagH101=0;
Ext.define('cms.controller.report.report_Count_IdataController',{
	extend:'Ext.app.Controller',
	modal:false,
	
	requires:[
			 'cms.view.report.window.reportCheckSetWindow',
			 'cms.view.report.window.renameWindow',
			 'cms.view.report.report_Count_IdataUI'
			 ],
	init:function(){
		this.control({
			//查找
			'report_Count_IdataUI button[name=query]':{
				click:this.queryClick
			},
			//刷新
			'report_Count_IdataUI button[name=refresh]':{
				click:this.refresh
			},
			//导出
			'report_Count_IdataUI button[name=export]':{
				click:this.exportClick
			},			
			//报表选择
			'report_Count_IdataUI combo[id=cmbReportSelectH101]':{
				select:this.cmbReportSelectH101Select
			},
			//参考项目选择
			'report_Count_IdataUI combo[id=cmbProjectSelectH101]':{
				change:this.cmbProjectSelectH101Select
			},
			//查询按扭
			'report_Count_IdataUI button[id=btnSearchH101]':{
				click:this.btnSearchH101Click
			},
			//项目设定按扭
			'report_Count_IdataUI button[id=btnProjectSetH101]':{
				click:this.btnProjectSetH101Click
			}
		});
	},
	
	//查找
	queryClick:function(){
		if(Ext.isEmpty(Ext.getCmp('cmbReportSelectH101').getValue())){
			Ext.example.msg($i18n.prompt,'请先选择一份报表');
			return;
		}
		
		//保存模块id和报表id，用于区分查询条件   7-13
		localStorage.setItem("moduleId",'H101');  
		var chartIdTest = Ext.getCmp('cmbReportSelectH101').getValue();
		localStorage.setItem("chartId",chartIdTest);
		
		Ext.create('cms.view.common.queryWindow',{
			
		}).show();
		var getQueryWindow = Ext.getCmp('queryWindow');		
		var mess = Ext.decode(localStorage.getItem("commonLocalH101"+chartIdTest)); //7-13
		if(mess!=null){
			for ( var i = 0; i <mess.length; i++) {
				if(mess[i].value==" is null" || mess[i].value==" is not null"){
					mess[i].value = null;
					mess[i].condition = "1";
				}
				var getQueryPanel = Ext.create('cms.view.common.queryPanel');
				
				//修改hj
				if(mess[i].valueType == 3){			//填充的字段类型为datefield
					getQueryPanel.items.items[1].setValue(mess[i].logic);
					//再一次填充下拉框
					getQueryPanel.items.items[2].getStore().add({
						columnid:mess[i].columnId,
						columnname:mess[i].columnname
				    });
					getQueryPanel.items.items[2].setValue(mess[i].columnId);
					getQueryPanel.items.items[3].setValue(mess[i].condition);
					
					getQueryPanel.remove(getQueryPanel.items.items[4]);
					getQueryPanel.add({
				        xtype : 'datefield',
						fieldLabel : '值',							
						format : 'Y-m-d',
				        labelWidth : 20,
				        width : 195
					});
					getQueryPanel.items.items[4].setValue(mess[i].value);
					
				}else if(mess[i].valueType == 5){			//填充的字段类型为datetimefield  add by huangcx 20160803
					getQueryPanel.items.items[1].setValue(mess[i].logic);
					//再一次填充下拉框
					getQueryPanel.items.items[2].getStore().add({
						columnid:mess[i].columnId,
						columnname:mess[i].columnname
				    });
					getQueryPanel.items.items[2].setValue(mess[i].columnId);
					getQueryPanel.items.items[3].setValue(mess[i].condition);
					
					getQueryPanel.remove(getQueryPanel.items.items[4]);
					getQueryPanel.add({
				        xtype : 'datetimefield',
						fieldLabel : '值',							
						format : 'Y-m-d H:i:s',
				        labelWidth : 20,
				        width : 195
					});
					getQueryPanel.items.items[4].setValue(mess[i].value);
					
				}else if(mess[i].valueType == 4){	//填充的字段类型为combo
					getQueryPanel.items.items[1].setValue(mess[i].logic);
					//再一次填充下拉框
					getQueryPanel.items.items[2].getStore().add({
						columnid:mess[i].columnId,
						columnname:mess[i].columnname
				    });
					getQueryPanel.items.items[2].setValue(mess[i].columnId);
					getQueryPanel.items.items[3].setValue(mess[i].condition);
					
					getQueryPanel.remove(getQueryPanel.items.items[4]);
					getQueryPanel.add({
				        xtype : 'combo',
						fieldLabel : '值',	
						displayField: 'dropValue',
						id : 'comboTest',
    					valueField: 'value',
						store:Ext.create("cms.store.common.comboStore"),
				        labelWidth : 20,
				        width : 195,
						listeners:{  
			    		'beforequery':function(){
			    			this.store.proxy.extraParams.str=getQueryPanel.items.items[2].findRecordByValue(getQueryPanel.items.items[2].value).data.fieldtable+","+
			    			getQueryPanel.items.items[2].findRecordByValue(getQueryPanel.items.items[2].value).data.fieldcolumn;
			    		}}
					});
					
					//获得下拉框所有的对象
					var aa = getQueryPanel.items.items[2].findRecordByValue(getQueryPanel.items.items[2].value).data.fieldtable+","+
					getQueryPanel.items.items[2].findRecordByValue(getQueryPanel.items.items[2].value).data.fieldcolumn;
					Ext.Ajax.request({
						url:'bdef_ArticleGroupAction_getWmsDeffieldvalCombo',
						method:'post',
						async:false,
						params:{
							str:aa
						},
						success:function(response){
							var a=[];
							a = Ext.decode(response.responseText);
							for ( var k = 0; k < a.length; k++){	//循环判断，添加新的下拉框选项
								if(mess[i].value == a[k].value){
									Ext.getCmp('comboTest').getStore().removeAll();
									Ext.getCmp('comboTest').getStore().add({
								    	value:a[k].value,
								    	dropValue:a[k].dropValue,
								    	text:a[k].text
								    });
								}
							}
						}
				   });
				   getQueryPanel.items.items[4].setValue(mess[i].value);
					
				}else{
					getQueryPanel.items.items[1].setValue(mess[i].logic);
					//再一次填充下拉框
					getQueryPanel.items.items[2].getStore().add({
						columnid:mess[i].columnId,
						columnname:mess[i].columnname
				    });
					getQueryPanel.items.items[2].setValue(mess[i].columnId);
					getQueryPanel.items.items[3].setValue(mess[i].condition);
					getQueryPanel.items.items[4].setValue(mess[i].value);
				}
				getQueryWindow.add(getQueryPanel);
			}
			localStorage.removeItem("commonLocalH101"+chartIdTest);	  //7-13
		}else{
			getQueryWindow.add(Ext.create('cms.view.common.queryPanel'));
		}
		
		queryModuleId=Ext.getCmp('cmbReportSelectH101').getValue();
		queryGrid='gridReportColumnH101';	
		Ext.getCmp('gridReportColumnH101').getStore().proxy.extraParams.moduleId = Ext.getCmp('cmbReportSelectH101').getValue();
		
		if(Ext.getCmp('cmbProjectSelectH101').getValue()!=""&&Ext.getCmp('cmbProjectSelectH101').getValue()!=null){
			Ext.getCmp('gridReportColumnH101').getStore().proxy.extraParams.strName = Ext.getCmp('cmbProjectSelectH101').getValue();
		}	
	},
	//刷新
	refresh:function(){
		Ext.getCmp('cmbProjectSelectH101').setValue(null);
		Ext.getCmp('cmbProjectSelectH101').getStore().reload();
	},
	exportClick:function()
	{
		commExport('gridReportColumnH101');
	},	
	//报表获得焦点
	cmbReportSelectH101Focus:function(){
		Ext.getCmp('cmbProjectSelectH101').setValue(null);
	},
	
	//报表选择事件
	cmbReportSelectH101Select:function(combo){
		//清空
		Ext.getCmp('cmbProjectSelectH101').setValue(null);
		localStorage.removeItem("commonLocal");
		//重新加载数据
		var reportId = combo.getValue();
		var strWheresql = {
			strReferenceItem:reportId
		};
		Ext.apply(Ext.getCmp('cmbProjectSelectH101').getStore().proxy.extraParams,strWheresql);
		Ext.getCmp('cmbProjectSelectH101').getStore().removeAll();
		Ext.getCmp('cmbProjectSelectH101').getStore().load();
	},
	
	//参考项目选择事件
	cmbProjectSelectH101Select:function(combo){
		this.commonReportTitleH101(Ext.getCmp('cmbReportSelectH101').getValue(),combo.getValue());
	},
	
	//查询
	btnSearchH101Click:function(){
		var params = {
			moduleId:Ext.getCmp('cmbReportSelectH101').getValue(),
			strName:Ext.getCmp('cmbProjectSelectH101').getValue()
		};
		Ext.apply(Ext.getCmp('gridReportColumnH101').getStore().proxy.extraParams,params);
		Ext.getCmp('gridReportColumnH101').getStore().removeAll();
		Ext.getCmp('gridReportColumnH101').getStore().load();
	},
	
	//项目设定
	btnProjectSetH101Click:function(){
		Ext.create('cms.view.report.window.reportCheckSetWindow',{
			title:$i18n.checkSet//高阶查询设置
		}).show();
		Ext.getCmp('moduleId').setValue('H101');
		var cmbReportSelectId = Ext.getCmp('cmbReportSelectH101').getValue();
		var cmbProjectSelectId = Ext.getCmp('cmbProjectSelectH101').getValue();
		var params = {
			strReferenceItem:cmbProjectSelectId
		};
		if(!Ext.isEmpty(cmbProjectSelectId))
		{
			Ext.getCmp('cmbProjectSelect_w').setValue(cmbProjectSelectId);
		}
		cmbProjectSelect_wSelect(cmbReportSelectId,cmbProjectSelectId);
		Ext.getCmp('textReport_W').setValue(cmbReportSelectId);
	},
	commonReportTitleH101:function(strReportId,strProjectId)
	{
		Ext.Ajax.request({
			url:'report_Action_getGridColumModle.action',
			params : {
				strReportId:strReportId,
				strProjectId:strProjectId
			},
			success : function(response, options) {  
				var data = Ext.JSON.decode(response.responseText);//将字符串转换为json类型
				if(data.isSucc){
					var json=Ext.JSON.decode("{"+data.obj+"}");
					var cm = new Ext.grid.column.Column(json.columModle);    
		     		var ds = new Ext.data.JsonStore({
		     			pageSize : appConfig.getPageSize(),
						proxy: {
						    type: 'ajax',
							method: 'post',
							url: 'report_Action_getGridData.action',
							timeout	:300000,
							reader : {
								type:'json',
								root : 'rootList',
								totalProperty : 'totalCount'
								}
						},
		    			fields:json.fieldsNames
		     		});
		                                       
					var grid = Ext.create('Ext.grid.Panel',{
			            split: true,
			            border:false,
			            id : 'gridReportColumnH101',
			            columnLines : true,
			            columns:json.columModle,
			            store:ds,
						dockedItems : [{
							xtype : 'pagingtoolbar',
							store : ds,
							dock : 'bottom',
							displayInfo : true
						}]
	        		});
	        		Ext.getCmp('panelReportColumnH101').removeAll();
					Ext.getCmp('panelReportColumnH101').add(grid);  
					Ext.getCmp('panelReportColumnH101').doLayout();
				}else{
					Ext.getCmp('panelReportColumnH101').removeAll();
				}
			}
		});
	}
	
});



function cmbProjectSelect_wSelect(cmbReportSelectId,cmbProjectSelectId){
	var params = {
		strReportId:cmbReportSelectId,
		strProjectId:cmbProjectSelectId
	};
	Ext.apply(Ext.getCmp('searchDSetGrid').getStore().proxy.extraParams,params);
	Ext.getCmp('searchDSetGrid').getStore().removeAll(); 
	Ext.getCmp('searchDSetGrid').getStore().load();
}

//检验参考项目名称是否已经存在
function checkProjectName(strPgmId,strName)
{
	var checkFlag=false;
	var strParams = {
		strPgmId:strPgmId,
		strName:strName
	};
	 Ext.Ajax.request({
		  method:'POST',
		  url:'report_Action_checkProjectName.action',
		  params:strParams,
		  async:false,
		  success:function(response){
			  var data = Ext.decode(response.responseText);
			  if(data.isSucc){
				  checkFlag=true;
			  }else{
				  Ext.example.msg($i18n_prompt.prompt,data.msg);
				  checkFlag=false;
			  }				
		  }
	  });	
	  return checkFlag;
};
	