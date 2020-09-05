/*
 * 手建退厂单（服装版，目前用于天天惠）
 * chensr
 * 7102
 */
var rowIndex7102=0;
var colIndex7102=0;
var isCanEdit7102=false;
Ext.define('cms.controller.rodata.rodata_RecedeMTTHController',{
	extend:'Ext.app.Controller',
	requires:[
	          'cms.view.rodata.rodata_RecedeMTTHUI'
	          ],
	model:'',
	store:'',
	init:function(){
		this.control(
			//新增明细
			{
			'rodata_RecedeMTTHUI button[name=detailAdd]':{
				click : this.detailAdd
			},
			//新增单头
			'rodata_RecedeMTTHUI button[name=userAddButton]':{
				click:this.userAddButtonHeard
			},
			//查询
			'rodata_RecedeMTTHUI button[name=detailQuery]':{
				click:this.detailQuery
			},
			//上单
			'rodata_RecedeMTTHUI button[name=userPrevButton]':{
				click:this.userPrev
			},
			//下单
			'rodata_RecedeMTTHUI button[name=userNextButton]':{
				click:this.userNext
			},
			//撤销
			'rodata_RecedeMTTHUI button[name=userUndoButton]':{
				click:this.undo1300003_2
			},
			//通过商品编码带出明细
			'bdef_DefArticleCombo[id=cmbArticle_no7102_3]' : {
				beforequery:this.article_no7102_3BeforeQuery,
				select:this.articleNoSelect
			},
			//删单
			'rodata_RecedeMTTHUI button[name=userDelButton]':{
				click:this.del1300003_2
			},
			//tab页切换
			'rodata_RecedeMTTHUI tabpanel[id=tabPId7102]':{
				tabchange:this.tabPidchange
			},
			//选中退厂手建单单据列表，加载商品库存信息
			'rodata_RecedeMTTHUI grid[id=gridRodata_RecedeM7102]':{
				itemdblclick : this.itemhdbclick7102,
				selectionchange : this.selectionchange7102
			},
			//保存
			'rodata_RecedeMTTHUI button[name=userSaveButton]':{
				click:this.save
			},
			//修改
			'rodata_RecedeMTTHUI button[name=userEditButton]':{
				click:this.edit
			},
			'rodata_RecedeMTTHUI button[name=detailDelete]':{
				click:this.detailDelete
			},
			//定位
			'rodata_RecedeMTTHUI [id=locate7102]':{
				click:this.locate7102
			},
			//选择包装，带出包装单位
			'bdef_PackingQtyCombo[id=cmbPacking_qty7102_3]':{
				focus:this.packingQtyFocus,
				select:this.packingQtyselect
			},
			//日期校验
			'rodata_RecedeMTTHUI form datefield[id=dateRecede_date7102_2]':{
				blur:this.dateRecede_date7102_2
			},
			//日期校验
			'rodata_RecedeMTTHUI form datefield[id=dateRequestDate27102_2]':{
				blur:this.dateRecede_date7102_2
			},
			//原退货单号校验
			'rodata_RecedeMTTHUI textfield[id=txtPo_no7102_2]':{
				blur:this.txtPo_type7102_2Blur
			},
			//退厂手建单明细数据校验
			'rodata_RecedeMTTHUI grid[id=gridRodata_RecedeD7102]':{
				beforeedit:this.beforeeditgrid7102,
				edit:this.rodata_Recede_DgridEdit
			},//供应商选择
			'bdef_DefSupplierCombo[id=cmbSuppliers7102_2]':{
				beforequery:this.cmbSuppliers7102_2BeforeQuery
			},//根据供应商加载单头
			'rodata_RecedeMTTHUI combo[id=suppliers7102]':{
				select:this.selectSuppliers7102
			},//根据单据类型加载单头
			'rodata_RecedeMTTHUI combo[id=cmbRecede_type7102]':{
				select:this.selectRecede_type7102
			},//刷新
			'rodata_RecedeMTTHUI button[name=refresh]':{
				click:this.refresh
			},//根据日期加载单头
			'rodata_RecedeMTTHUI datefield[id=date_recede7102]':{
				select:this.date_recede7102
			},//根据定位次数加载单头
			'rodata_RecedeMTTHUI combo[id=locateTime7102]':{
				select:this.selectLocateTime
			},//退单审核review7102
			'rodata_RecedeMTTHUI [id=review7102]':{
				click:this.selectReview7102
			},//储位校验 
			'rodata_RecedeMTTHUI [id=cell7102]':{
				blur:this.cell7102blur
			},//导入
			'rodata_RecedeMTTHUI button[name=upload]':{
				click:this.uploadClick
			}
		});
	},
	initializtion:function(){
		//显示变量0为不显示，1为显示
		var planBox7102=commonGetModuleField('7102','planBox')[0].flag;
		var planDis7102=commonGetModuleField('7102','planDis')[0].flag;
		var planQmin7102=commonGetModuleField('7102','planQmin')[0].flag;

		var packingUnit7102=commonGetModuleField('7102','packingUnit')[0].flag;
		var packingSpec7102=commonGetModuleField('7102','packingSpec')[0].flag;
		var packingUnit7102_1=commonGetModuleField('7102','packingUnit')[0].flag;
		var packingSpec7102_1=commonGetModuleField('7102','packingSpec')[0].flag;
		if(planBox7102==0){
			Ext.getCmp('planBox7102').setVisible(false);
		}
		if(planDis7102==0){
			Ext.getCmp('planDis7102').setVisible(false);
		}
		if(planQmin7102==0){
			Ext.getCmp('planQmin7102').setVisible(false);
		}
		if(packingUnit7102==0){
			Ext.getCmp('packingUnit7102').setVisible(false);
		}
		if(packingSpec7102==0){
			Ext.getCmp('packingSpec7102').setVisible(false);
		}
		if(packingUnit7102_1==0){
			Ext.getCmp('packingUnit7102_1').setVisible(false);
		}
		if(packingSpec7102_1==0){
			Ext.getCmp('packingSpec7102_1').setVisible(false);
		}
		
		
	},
	//导入
	uploadClick:function(){
		
		Ext.create('cms.view.rodata.window.rodataUploadWindow',
		{
			title:'上传'
		}).show();
	},
	refresh:function(){
		Ext.getCmp('cmbRecede_type7102').getStore().load();
		
		Ext.getCmp('cmbRecede_type7102').setValue('');
		Ext.getCmp('suppliers7102').setValue('');
		Ext.getCmp('date_recede7102').setValue('');
		Ext.getCmp('locateTime7102').setValue('');
		
		var strQuery = {
				strQuery  : null,
				str:null
		};
		Ext.apply(Ext.getCmp('gridRodata_RecedeM7102').getStore().proxy.extraParams,strQuery);
		Ext.getCmp('gridRodata_RecedeM7102').getStore().removeAll();
		Ext.getCmp('gridRodata_RecedeM7102').getStore().reload();
		Ext.getCmp('gridArticleInfo7102').getStore().removeAll();
		Ext.getCmp('gridArticleInfo7102').getStore().load();
	},
	//根据单据类型加载单头
	selectRecede_type7102:function(){
		var strDetail1 = [];
		if(Ext.getCmp('suppliers7102').getValue()!=null){
			var d1={
					columnId:'m.supplier_no',
					value:Ext.getCmp('suppliers7102').getValue()
				};
				strDetail1.push(d1);
			
		}
		var d2={
				columnId:'m.po_type',
				value:Ext.getCmp('cmbRecede_type7102').getValue()
			};
		strDetail1.push(d2);
			
		var jsonDetail = Ext.encode(strDetail1);
		var strQuery = {
				strQuery  : jsonDetail,
				str:Ext.Date.format(Ext.getCmp('date_recede7102').getValue(),'Y-m-d')
		};
		//加载该类型下的供应商列表
		Ext.apply(Ext.getCmp('suppliers7102').getStore().proxy.extraParams,strQuery);
		Ext.getCmp('suppliers7102').getStore().removeAll();
		Ext.getCmp('suppliers7102').getStore().load();
		
		//加载该类型下的所有单据
		Ext.apply(Ext.getCmp('gridRodata_RecedeM7102').getStore().proxy.extraParams,strQuery);
		Ext.getCmp('gridRodata_RecedeM7102').getStore().removeAll();
		Ext.getCmp('gridRodata_RecedeM7102').getStore().load();
	},
	
	//根据供应商加载单头
	selectSuppliers7102:function(){
		var strDetail1 = [];
		if(Ext.getCmp('cmbRecede_type7102').getValue()!=null){
			var d2={
					columnId:'m.po_type',
					value:Ext.getCmp('cmbRecede_type7102').getValue()
				};
			strDetail1.push(d2);
			
		}
		var d1={
			columnId:'m.supplier_no',
			value:Ext.getCmp('suppliers7102').getValue()
		};
		strDetail1.push(d1);
	
		var jsonDetail = Ext.encode(strDetail1);
		var strQuery = {
				strQuery  : jsonDetail,
				str:Ext.Date.format(Ext.getCmp('date_recede7102').getValue(),'Y-m-d')

		};
		
		Ext.apply(Ext.getCmp('gridRodata_RecedeM7102').getStore().proxy.extraParams,strQuery);
		Ext.getCmp('gridRodata_RecedeM7102').getStore().removeAll();
		Ext.getCmp('gridRodata_RecedeM7102').getStore().load();
	},
	//根据日期加载单头
	date_recede7102:function(){
		var strDetail1 = [];
		if(Ext.getCmp('cmbRecede_type7102').getValue()!=null){
			var d2={
					columnId:'m.po_type',
					value:Ext.getCmp('cmbRecede_type7102').getValue()
				};
			strDetail1.push(d2);
			
		}
		if(Ext.getCmp('suppliers7102').getValue()!=null){
			var d1={
					columnId:'m.supplier_no',
					value:Ext.getCmp('suppliers7102').getValue()
				};
				strDetail1.push(d1);
			
		}
		var jsonDetail = Ext.encode(strDetail1);
		var strQuery = {
				strQuery  : jsonDetail,
				str:Ext.Date.format(Ext.getCmp('date_recede7102').getValue(),'Y-m-d')

		};
		
		Ext.apply(Ext.getCmp('gridRodata_RecedeM7102').getStore().proxy.extraParams,strQuery);
		Ext.getCmp('gridRodata_RecedeM7102').getStore().removeAll();
		Ext.getCmp('gridRodata_RecedeM7102').getStore().load();
		
	},
	//选择定位次数
	selectLocateTime:function(){
		var strDetail1 = [];
		if(Ext.getCmp('cmbRecede_type7102').getValue()!=null){
			var d2={
					columnId:'m.po_type',
					value:Ext.getCmp('cmbRecede_type7102').getValue()
				};
			strDetail1.push(d2);
			
		}
		if(Ext.getCmp('suppliers7102').getValue()!=null){
			var d1={
					columnId:'m.supplier_no',
					value:Ext.getCmp('suppliers7102').getValue()
				};
				strDetail1.push(d1);
			
		}
		var d1={
				columnId:'m.locate_times',
				value:Ext.getCmp('locateTime7102').getValue()
			};
		strDetail1.push(d1);
		
		var jsonDetail = Ext.encode(strDetail1);
		var strQuery = {
				strQuery  : jsonDetail,
				str:Ext.Date.format(Ext.getCmp('date_recede7102').getValue(),'Y-m-d')
		};
		
		Ext.apply(Ext.getCmp('gridRodata_RecedeM7102').getStore().proxy.extraParams,strQuery);
		Ext.getCmp('gridRodata_RecedeM7102').getStore().removeAll();
		Ext.getCmp('gridRodata_RecedeM7102').getStore().load();
	},
	//商品加载前
	article_no7102_3BeforeQuery:function(){
		 var listDetail1  =  [];
			var strDtl = {
				columnId:'t1.owner_no',
				value:Ext.getCmp("cmbOwner_no7102_2").getValue()
			};
			listDetail1.push(strDtl);
			var strWheresql={
				strQuery:Ext.encode(listDetail1)
			};
			Ext.apply(Ext.getCmp('cmbArticle_no7102_3').getStore().proxy.extraParams,strWheresql);
	},
	
	//供应商选择
	cmbSuppliers7102_2BeforeQuery:function(){

        var listDetail1  =  [];
		var strDtl = {
			columnId:'t1.owner_no',
			value:Ext.getCmp("cmbOwner_no7102_2").getValue()
		};
		listDetail1.push(strDtl);
		var strWheresql={
			strQuery:Ext.encode(listDetail1)
		};
		Ext.apply(Ext.getCmp('cmbSuppliers7102_2').getStore().proxy.extraParams,strWheresql);
	
	},
	
	//tab页切换
	tabPidchange:function(tabPanel,newCard,oldCard,eOpts )
	{
		if(newCard.itemId == 'tabPId7102_2'){
			var objdata = Ext.getCmp('gridRodata_RecedeM7102').getSelectionModel().getSelection();
			if(objdata.length!=0){
			editRecede(objdata[0].index);//填充数据
			rowIndex7102 = objdata[0].index;
			commonSetMsterReadOnlyByArray(
				new Array('txtRecede_no7102_2','cmbOwner_no7102_2','cmbRecede_type7102_2',
				'txtPo_no7102_2','cmbSuppliers7102_2','txtPo_type7102_2','takeType7102',
				'dateRecede_date7102_2','dateRequestDate27102_2','orgNo7102','classType7102'),true);
			    commonEditButton('menu7102','dbclick');
			    Ext.getCmp('commMenuWidget67102').items.items[0].disable(true);
			    Ext.getCmp('commMenuWidget67102').items.items[1].disable(true);
			    isCanEdit7102 = false;
			    if(objdata[0].get('status') == 14){
				Ext.getCmp('menu7102').items.items[3].disable(true);
			}	
			}else{
				commonSetMsterReadOnlyByArray(
				new Array('txtRecede_no7102_2','cmbOwner_no7102_2','cmbRecede_type7102_2',
				'txtPo_no7102_2','cmbSuppliers7102_2','txtPo_type7102_2','takeType7102',
				'dateRecede_date7102_2','dateRequestDate27102_2','orgNo7102','classType7102'),true);
			}
		}else{
			Ext.getCmp('gridRodata_RecedeM7102').store.reload();
			Ext.getCmp('suppliers7102').store.reload();
		}
	},
	
	/**
	 * 查找
	 */
	detailQuery:function(){
		Ext.create('cms.view.common.queryWindow',{
		}).show();
		Ext.getCmp('queryWindow').add(Ext.create('cms.view.common.queryPanel'));
		queryModuleId=7102;
		queryGrid='gridRodata_RecedeM7102';					
	},
	
	/*
	 * 上单
	 */
	userPrev:function(){
		rowIndex7102=rowIndex7102-1;
		editRecede(rowIndex7102);
	},
	
	/*
	 * 下单
	 */
	userNext:function(){
		rowIndex7102=rowIndex7102+1;
		editRecede(rowIndex7102);
	},
	
	/*
	 * 撤销
	 */
	undo1300003_2:function(){
		var grid = Ext.getCmp('gridRodata_RecedeD7102');
		editRecede(rowIndex7102);
		commonEditButton('menu7102','undo');
		Ext.getCmp('commMenuWidget67102').items.items[0].disable(true);
		Ext.getCmp('commMenuWidget67102').items.items[1].disable(true);
		var objRecord=Ext.getCmp('gridRodata_RecedeM7102').getStore().query('recedeNo',Ext.getCmp('txtRecede_no7102_2').getValue());
		if(objRecord.getAt(0).get('status')==14){
				isCanEdit7102=false;
				Ext.getCmp('menu7102').items.items[3].disable(true);
		}
		isCanEdit7102=false;
	},
	
	/*
	 * 普通定位
	 */
	locate7102:function()
	{
		if(Ext.isEmpty(workSpaceNo))
		{
			Ext.example.msg($i18n.prompt,$i18n_prompt.setWorkSpace);
			return;
		}
		if(Ext.getCmp("cmbRecede_type7102").getValue()=="" || Ext.getCmp("cmbRecede_type7102").getValue()==null)
		{
			Ext.example.msg($i18n_prompt.prompt,'请选择要定位的退货单类型');
		}else
		{
			var gridcount=Ext.getCmp('gridRodata_RecedeM7102').getSelectionModel().getSelection();
			if(gridcount.length==0){
				Ext.example.msg($i18n_prompt.prompt,'请选择退货单');
				return;
			}
			
			var gridcount=Ext.getCmp('gridArticleInfo7102').getStore().getCount();
			if(gridcount==0){
				Ext.example.msg($i18n_prompt.prompt,'表体不能为0');
				return;
			}
			var totCount=Ext.getCmp('gridArticleInfo7102').getStore().getCount();
			var lackCount=Ext.getCmp('gridArticleInfo7102').getStore().query('noEnoughQty',0).getCount();
			if(totCount-lackCount>0)
			{
				Ext.Msg.confirm($i18n_prompt.prompt,'存在库存不足的商品，确定定位吗？',function(button,text)
				{
					if(button=='yes'){
					sendLocateParam();
					}
			    });
		    }else
		    {
		    	Ext.Msg.confirm($i18n_prompt.prompt,'确定定位？',function(button,text)
				{
					if(button=='yes'){
						sendLocateParam();
					}
				 });			  
		    }
	    }
	},
	/**
	 * 删除明细
	 */
	detailDelete:function(){
		var data = Ext.getCmp('gridRodata_RecedeD7102').getSelectionModel()
			.getSelection();
		if(data.length!='0'){
			Ext.Msg.confirm($i18n_prompt.prompt,'确定删除数据',function(button,text){
				if(button=='yes'){
					var msgShow = commonMegShow("正在删除数据,请稍等...");
					Ext.getCmp('gridRodata_RecedeD7102').getStore().remove(data);					
					if(Ext.getCmp("gridRodata_RecedeD7102").getStore().getCount()==0)
					{
						commonSetMsterReadOnlyByArray(
						new Array('txtRecede_no7102_2','cmbOwner_no7102_2','cmbRecede_type7102_2',
						'txtPo_no7102_2','cmbSuppliers7102_2','txtPo_type7102_2','takeType7102',
						'dateRecede_date7102_2','dateRequestDate27102_2','orgNo7102','classType7102'),false);
					};
					msgShow.hide();
				}
			});
		}else{
			Ext.example.msg($i18n_prompt.prompt, '请先选择您要删除的行');
			return;
			msgShow.hide();
		}
	},
	
	//编辑前事件
	beforeeditgrid7102:function(e){
		if(!isCanEdit7102)
	    {
	        e.cancel = true;
	        return  false;  
	    }	
	},
	
	/**
	 * 改为可编辑
	 */
	edit:function(){
				isCanEdit7102=true;
				commonEditButton('menu7102','edit');
				Ext.getCmp('commMenuWidget67102').items.items[0].enable(true);
				Ext.getCmp('commMenuWidget67102').items.items[1].enable(true);
				Ext.getCmp('gridRodata_RecedeD7102').editingPlugin.startEdit(0,1);
	},
	
	/**
	 * 新增
	 * zhouhuan
	 */
	userAddButtonHeard:function(){
		 add7102_2();
		 bindEnterSkip($('#fromRodata_RecedeM7102x'));//调用键盘处理方法
	},
	
	/*
	 * 删除单据
	 */
	del1300003_2:function()
	{
		var strRecedeNo=Ext.getCmp('txtRecede_no7102_2').getValue();
		if(strRecedeNo == null || strRecedeNo == ""){
			Ext.Msg.confirm($i18n_prompt.prompt,'请选择要删除的单据');
		}else{
			Ext.Msg.confirm($i18n_prompt.prompt,'确定删除数据？',function(button,text){
				if(button=='yes'){
					var params={
						strRecedeNo:strRecedeNo
					};
					Ext.Ajax.request({
						method:'post',
						url:'rodata_Recede_MAction_deleteRodata_Recede_M',
						params:params,
						success:function(response){
							var data=Ext.decode(response.responseText);
							if(data.isSucc){
								if(typeof(Ext.getCmp('gridRodata_RecedeM7102')) != "undefined"){
									var g=Ext.getCmp('gridRodata_RecedeM7102');
									var atindex=g.getStore().findExact('recedeNo',Ext.getCmp('txtRecede_no7102_2').getValue());
									g.getStore().removeAt(atindex);
									var count=g.store.getCount();
									if(count==0){
										add7102_2();
									}else if(atindex==-1 && count!=0){
										editRecede(0);
									}else if(atindex<count){
										editRecede(atindex);
									}else {
										editRecede(count-1);
									};
								};
							};
						}
					});
				};
			});
		}
	},
	
	detailDelete2:function(){
			var data = Ext.getCmp('gridRodata_RecedeD7102').getSelectionModel()
				.getSelection();
			if(data.length!='0'){
				Ext.Msg.confirm($i18n_prompt.prompt,$i18n_prompt.deleteOrNot,function(button,text){
					if(button=='yes'){
						Ext.getCmp('gridRodata_RecedeD7102').getStore().remove(data);					
					}
				});
			}else{
				Ext.example.msg($i18n_prompt.prompt,$i18n_prompt.choseDeleteRecord);
				return;
			}
	},
	
	beforeArticleNo:function(){
		Ext.getCmp('cmbArticle_no7102_3').getStore().load();
	},
	
	/*
	 * 通过商品编码带出明细
	 * zhouhuan
	 */
	articleNoSelect:function(combo,records,eOpts)
	{
		Ext.Ajax.request({
			method : 'POST',
			url:'rodata_RecedeMAction_getRodata_RecedeMByArticleNO.action',
			params : {
				strArticleNo:combo.getValue(),
				strRecedeNo:Ext.getCmp("txtRecede_no7102_2").getValue()
			},
			success : function(response) {
				var res = Ext.decode(response.responseText);
				var objData = Ext.getCmp('gridRodata_RecedeD7102').getSelectionModel().getSelection();
					objData[0].set('ownerArticleNo', res[0][1] );
					objData[0].set('barcode', res[0][3] );	
					objData[0].set('articleName', res[0][2] );
					//objData[0].set('recedeWholeNum',0);
		    		objData[0].set('unitCost',0);
		    		//update by czh at 2016.05.30
		    	    objData[0].set('planBox',0);
		    	    objData[0].set('planQmin',0);
		    	    objData[0].set('planDis',0);
		    	    objData[0].set('qminOperatePacking',res[0][4]);
		    	    objData[0].set('unitPacking',res[0][5]);
		    	    objData[0].set('packingUnit',res[0][7]);
		    	    objData[0].set('packingSpec',res[0][8]);
		    		
		    		
			     	Ext.Ajax.request({
						method:'post',
						url:'bdef_DefarticleAction_getMaxArticlePacking',
						params:{
							strWheresql:combo.getValue()
					    },
					    success:function(response){
					    	var res = Ext.decode(response.responseText);
					    	objData[0].set('packingQty',res);
					    	
					    	Ext.Ajax.request({
								method:'post',
								url:'bdef_DefarticleAction_queryPackingUnitAndSpec',
								params:{
									strArticleNo:combo.getValue(),
									strPackingQty:res
							    },
							    success:function(response){
							    	var flagCount=0;
							    	var gridcount=Ext.getCmp('gridRodata_RecedeD7102').getStore().getCount();
							    	for(var i=0;i<gridcount;i++){
							    		var exp=Ext.getCmp('gridRodata_RecedeD7102').getStore().getAt(i);    		
							    		if(exp.get('articleNo')==combo.getValue()&&exp.get('packingQty')==objData[0].get('packingQty')){
							    			flagCount=flagCount+1;
							    		}
							    	}
							    	var res = Ext.decode(response.responseText);
							    	objData[0].set('packingUnit',res[0].packingUnit);
							    	
							    	if(flagCount==0){
							    		var res = Ext.decode(response.responseText);
							    		objData[0].set('packingUnit',res[0].packingUnit);
							    	}else{
							    		Ext.example.msg('提示', "【商品编码】、【商品包装】不能重复，请重新输入！");
							    		objData[0].set('packingQty',null);
							    	}  	
							    }
							});
					    }
					    
			    	});
			},
			failure : function(response) {
				Ext.example.msg($i18n_prompt.prompt, $i18n_prompt.CannotSubForWeb);
			}
		});
	},
	
	/*
	 * 新增明细
	 * zhouhuan
	 */
		detailAdd:function(){
			var objStore = Ext.getCmp('gridRodata_RecedeD7102').getStore();
			var intCount = objStore.getCount();
			var intj = intCount * 1 - 1;
			if(intj >= 0){
				
			}else{
				if(!commonCheckMster('fromRodata_RecedeM7102x')){
				return;
				}
			commonSetMsterReadOnlyByArray(
			new Array('txtRecede_no7102_2','cmbOwner_no7102_2','cmbRecede_type7102_2',
			'txtPo_no7102_2','cmbSuppliers7102_2','txtPo_type7102_2','takeType7102',
			'dateRecede_date7102_2','dateRequestDate27102_2','orgNo7102','classType7102'),true);
			}
				var objr=Ext.create('cms.model.rodata.rodata_RecedeDModel',{});
				objr.set('ownerNo',Ext.getCmp('cmbOwner_no7102_2').getValue());
				objr.set('recedeNo',Ext.getCmp('txtRecede_no7102_2').getValue());
				objStore.add(objr);
			Ext.getCmp('gridRodata_RecedeD7102').editingPlugin.startEdit(intCount,1);
	},
	
	/*
	 *双击进入明细界面
	 */
	itemhdbclick7102:function( th, record,  item,  index, e, eOpts){
		Ext.getCmp('tabPId7102').items.items[1].setVisible(true);
				this.tabPidchange;
	},
	
	//选中退厂手建单单据列表，加载商品库存信息
	selectionchange7102:function(th,selected,eOpts){
		var objdata = Ext.getCmp('gridRodata_RecedeM7102').getSelectionModel().getSelection();
		var detail=[];
		var flag=0;
		
		if(objdata.length!=0){
			for(var i=0; i<objdata.length; i++){
				detail.push(objdata[i].get('recedeNo'));
				var clagssType=objdata[0].get('classType');
				if(objdata[i].get('locateTimes')!='0'){
					flag=1;
				}
				if(objdata[i].get('recedeType')!='RQ'){
					flag=1;
				}	
				if(objdata[i].get('classType')!=clagssType){
					flag=1;
				}	
			}
		}
		var wheresql = { str : detail};	
		Ext.apply(Ext.getCmp('gridArticleInfo7102').getStore().proxy.extraParams,wheresql);
		Ext.getCmp('gridArticleInfo7102').getStore().removeAll();
		Ext.getCmp('gridArticleInfo7102').getStore().load();
		
		if(flag==1){
			Ext.getCmp('cell7102').setVisible(false);
			Ext.getCmp('cell7102').setValue('');
		}else{
			Ext.getCmp('cell7102').setVisible(true);
			Ext.getCmp('cell7102').setValue('');
		}
	},
	/**
	 * 原退货单号判断
	 */
	txtPo_type7102_2Blur:function(){
		Ext.Ajax.request({
			method : 'POST',
			url:'rodata_RecedeMAction_checkPoNo.action',
			params : {
				strPoNo:Ext.getCmp('txtPo_no7102_2').getValue()
			},
			success : function(response) {
				var res = Ext.decode(response.responseText);
				console.log(res);
				if(!res.isSucc){
					Ext.getCmp('txtPo_no7102_2').setValue('');
					Ext.example.msg($i18n_prompt.prompt,'该单号已存在，请重新录入');
				}
			}
		});
	},
	
	/**
	 * 退货发单日期判断
	 */
	dateRecede_date7102_2:function()
	{
		if(Ext.getCmp('dateRequestDate27102_2').getValue()!=null)
		{
			if(Ext.getCmp('dateRequestDate27102_2').getValue() != ''
				&& Ext.getCmp('dateRequestDate27102_2').getValue()<
					Ext.getCmp('dateRecede_date7102_2').getValue())
			{
				Ext.example.msg($i18n_prompt.prompt,'退货发单日期不能大于预定退货日期');
				Ext.getCmp('dateRecede_date7102_2').setValue('');		
			}
		};
	},
	
	/**
	 * 预定退货日期判断
	 */
	dateRequestDate27102_2:function(){
		if(Ext.getCmp('dateRecede_date7102_2').getValue()!=null){
			if(Ext.getCmp('dateRecede_date7102_2').getValue()!=''
				&& Ext.getCmp('dateRecede_date7102_2').getValue()>
					Ext.getCmp('dateRequestDate27102_2').getValue()){
				Ext.example.msg($i18n_prompt.prompt,'预定退货日期不能小于退货发单日期');
				Ext.getCmp('dateRequestDate27102_2').setValue('');
			}
		};
	},
	
	/**
	 * 保存退厂单单头
	 */
	save:function(){
		var intgridcount=Ext.getCmp('gridRodata_RecedeD7102').getStore().getCount();
		if(intgridcount>0){
			if(!commonCheckdetailgrid('gridRodata_RecedeD7102',0,intgridcount-1))
			{
				return;
				msgShow.hide();
			}
		}else{			
			Ext.example.msg($i18n_prompt.prompt,$i18n_prompt.tableCannotBeNull);
			return;
		}
		var enterpriseNo=Ext.get('enterpriseNo').getValue();
		var warehouseNo=Ext.get("warehouseNo").getValue();
		var ownerNo=Ext.get("cmbOwner_no7102_2").getValue();
		var recedeNo=Ext.getCmp('txtRecede_no7102_2').getValue();
		var recedeType=Ext.getCmp('cmbRecede_type7102_2').getValue();
		var poNo=Ext.getCmp('txtPo_no7102_2').getValue();
		var poType=Ext.getCmp('cmbRecede_type7102_2').getValue();
		var classType=Ext.getCmp('classType7102').getValue();
		var takeType=Ext.getCmp('takeType7102').getValue();
		var untreadNo='N';
		var supplierNo=Ext.getCmp('cmbSuppliers7102_2').getValue();
		var status='10';
		var createFlag='0';
		var errorStatus='000';
		var deptNo='N';
		var sendFlag='10';
		var stockType='1';
		var stockValue='N';
		var recedeDate=Ext.getCmp('dateRecede_date7102_2').getValue();
		var requestDate=Ext.getCmp('dateRequestDate27102_2').getValue();
		var recedeRemark=Ext.getCmp('recede_remark7102_2').getValue();
		var ownerNo=Ext.getCmp('cmbOwner_no7102_2').getValue();
		var orgNo=Ext.getCmp('orgNo7102').getValue();
		var rgstName=Ext.get('workerName').getValue();
		var	rgstDate=new Date();
		var	updtName=Ext.get('workerName').getValue();
		var	updtDate=new Date();
	
		var master={
			id:{
				enterpriseNo:enterpriseNo,
				warehouseNo:warehouseNo,
				recedeNo:recedeNo,
				ownerNo:ownerNo
			},
			recedeType:recedeType,
			recedeType:recedeType,
			poNo:poNo,
			poType:poType,
			classType:classType,
			takeType:takeType,
			untreadNo:untreadNo,
			supplierNo:supplierNo,
			status:status,
			createFlag:createFlag,
			errorStatus:errorStatus,
			deptNo:deptNo,
			sendFlag:sendFlag,
			stockType:stockType,
			stockValue:stockValue,
			recedeDate:recedeDate,
			requestDate:requestDate,
			recedeRemark:recedeRemark,
			rgstName:rgstName,
			rgstDate:rgstDate,
			updtName:updtName,
			updtDate:updtDate,
			waveNo:'N',
			orgNo:orgNo
		};
		
		var listDetail1=[];
		for(var i=0;i<intgridcount;i++){
			var objrecord=Ext.getCmp('gridRodata_RecedeD7102').getStore().getAt(i);
			var d={
				id:{
					enterpriseNo:enterpriseNo,
					warehouseNo:warehouseNo,
					ownerNo:ownerNo,
					recedeNo:objrecord.get('recedeNo'),
					poId:i
				},
				ownerArticleNo:objrecord.get('ownerArticleNo'),
				articleNo:objrecord.get('articleNo'),
				packingQty:objrecord.get('packingQty'),
				lotNo:'N',
				quality:objrecord.get('quality'),
				produceDate:null,
				expireDate:null,
				recedeQty:objrecord.get('planBox')*objrecord.get('packingQty')
		        +objrecord.get('planQmin')*objrecord.get('qminOperatePacking')
		        +objrecord.get('planDis'),
				outstockQty:'0',
				realQty:'0',
				unitCost:objrecord.get('unitCost')==undefined? 0:objrecord.get('unitCost'),
				errorStatus:'000',
				locateQty:'0',
				status:status
			};
			if((objrecord.get('planBox')*objrecord.get('packingQty')
					   +objrecord.get('planQmin')*objrecord.get('qminOperatePacking')
					   +objrecord.get('planDis'))==0)
			{
				Ext.example.msg($i18n_prompt.prompt,'预计退货数量不能为0');
				return;
			}
			listDetail1.push(d);
		}
		disableButtonFunc(1,'#menu7102 [name=userSaveButton]',$i18n.save);
		var recedeM=Ext.encode(master);
		var recedeD=Ext.encode(listDetail1);
		
		var params={
			jsonMaster:recedeM,
			jsonDetail:recedeD
		};
		
		Ext.Ajax.request({
			method:'post',
			url:'rodata_RecedeMAction_saverodata_recede',
			params:params,
			success:function(response){
				var data = Ext.decode(response.responseText);
				if(data.isSucc){
					Ext.example.msg($i18n_prompt.prompt,$i18n.savesuccess);
					Ext.getCmp('txtRecede_no7102_2').setValue(data.obj);
					for(var i=0;i<intgridcount;i++ ){
						var record1=Ext.getCmp('gridRodata_RecedeD7102').getStore().getAt(i);
						record1.set('recedeNo',data.obj);
					}
					if(typeof(Ext.getCmp('gridRodata_RecedeM7102'))!=='undefined'){
						Ext.getCmp('gridRodata_RecedeM7102').store.reload();
					}
				}else{
					Ext.example.msg($i18n_prompt.prompt,data.msg);
					disableButtonFunc(0,'#menu7102 [name=userSaveButton]',$i18n.save);
				}
			}
		});
		commonEditButton('menu7102','save');
		isCanEdit7102=false;
		Ext.getCmp('commMenuWidget67102').items.items[0].disable(true);
		Ext.getCmp('commMenuWidget67102').items.items[1].disable(true);
	},
	
	//光标定位事件
	packingQtyFocus:function(th){
		th.getStore().proxy.extraParams.strWheresql = 
		Ext.getCmp('gridRodata_RecedeD7102').getSelectionModel().getSelection()[0].get('articleNo');
		th.getStore().load();
	},
	
	//选择包装，带出包装单位
	packingQtyselect:function(combo){
		var data = Ext.getCmp('gridRodata_RecedeD7102').getSelectionModel().getSelection();
		Ext.Ajax.request({
			method:'post',
			url:'bdef_DefarticleAction_queryPackingUnitAndSpec',
			params:{
				strArticleNo:data[0].get('articleNo'),
				strPackingQty:combo.getValue()
		    },
		    success:function(response){
		    	var res = Ext.decode(response.responseText);
		    	data[0].set('packingUnit',res[0].packingUnit);
		    }
		});
	},
	
	//退厂手建单明细数据校验
	rodata_Recede_DgridEdit:function(editor,e,eOpts)
	{
		if(e.field=='packingQty')
		{
				if(!Ext.isEmpty(e.value)){
					if(editor.grid.getStore().
					findBy(function(record, id) 
					{  
							return record.internalId!=editor.context.record.internalId 
							&& record.get('articleNo')==editor.context.record.data.articleNo
							&& record.get('packingQty')==editor.context.record.data.packingQty;
						})!=-1)				
					{
						editor.context.record.set('packingQty',editor.context.originalValue);
						Ext.example.msg($i18n_prompt.prompt, "【商品编码】、【商品包装】不能重复，请重新输入！");
					}
				}
		}
	},
		
	//退单审核
	selectReview7102:function(){
		var objdata=Ext.getCmp('gridRodata_RecedeM7102').getSelectionModel().getSelection();
		if(objdata.length>1){
			Ext.example.msg($i18n_prompt.prompt, "不能多个单同时退单审核");
			return;		
		}
		if(objdata.length==0){
			Ext.example.msg($i18n_prompt.prompt, "请选择要审核的单据");
			return;		
		}
			
		if(Ext.isEmpty(workSpaceNo))
		{
			Ext.example.msg($i18n.prompt,$i18n_prompt.setWorkSpace);
			return;
		}
		var master={
				id:{
					enterpriseNo:Ext.get('enterpriseNo').getValue(),
					warehouseNo:Ext.get("warehouseNo").getValue(),
					recedeNo:objdata[0].get('recedeNo'),
					ownerNo:objdata[0].get('ownerNo')
				},
				
				supplierNo:objdata[0].get('supplierNo'),
				classType:objdata[0].get('classType'),			
			};
				
		var recedeM=Ext.encode(master);
		
		var params={
			jsonMaster:recedeM
		};
		
		
		
		Ext.Msg.confirm($i18n_prompt.prompt,'退厂确认？',function(button,text)
				{
					if(button=='yes'){
						Ext.Ajax.request({
							method:'post',
							url:'rodata_RecedeMTTHAction_reviewComfir',
							params:params,
							success:function(response){
								var data = Ext.decode(response.responseText);
								if(data.isSucc){
									Ext.example.msg($i18n_prompt.prompt,data.msg);
									Ext.getCmp('gridRodata_RecedeM7102').store.reload();
					
								}else{
									Ext.example.msg($i18n_prompt.prompt,data.msg);
								}
							}
						});
						
						
					}
				 });	
		
		

		
	},
	cell7102blur:function(){
		if(Ext.getCmp('cell7102').getValue()=="" || Ext.getCmp('cell7102').getValue()==null){
			return;
		}
		
		var objdata = Ext.getCmp('gridRodata_RecedeM7102').getSelectionModel().getSelection();
		if(objdata.length==0){
			Ext.getCmp('cell7102').setValue('');
			Ext.example.msg($i18n_prompt.prompt,'请先选择单据');
			return;
		}

		var params={
				ownerNo:objdata[0].get('ownerNo'),
				recedeNo:objdata[0].get('recedeNo'),
				cellNo:Ext.getCmp('cell7102').getValue()
			};
			
			Ext.Ajax.request({
				method:'post',
				url:'rodata_RecedeMTTHAction_checkCell',
				params:params,
				success:function(response){
					var data = Ext.decode(response.responseText);
					if(!data.isSucc){
						Ext.example.msg($i18n_prompt.prompt,data.msg);
						Ext.getCmp('cell7102').setValue('');
					}
				}
			});
		
	}
});

/**
 * 填充
 * @param {} grid
 * @param {} rowIndex7102
 * @param {} colIndex7102
 */
function editRecede(rowIndex7102){
	if(rowIndex7102==0)
	{
		Ext.getCmp('menu7102').items.items[0].disable(true);	
	}else{
		Ext.getCmp('menu7102').items.items[0].enable(true);
	}
	if(rowIndex7102==Ext.getCmp('gridRodata_RecedeM7102').getStore().getCount()-1)
	{		
		Ext.getCmp('menu7102').items.items[1].disable(true);
	}else{		
		Ext.getCmp('menu7102').items.items[1].enable(true);
	}
		commonEditButton('menu7102','dbclick');
	    commonSetFieldReadOnly('fromRodata_RecedeM7102x',true);
	    var record=Ext.getCmp('gridRodata_RecedeM7102').getStore().getAt(rowIndex7102-(Ext.getCmp('gridRodata_RecedeM7102').getStore().currentPage-1)*appConfig.getPageSize());
		var sql='';
		var listDetail1 = [];
		 var p={
				columnId:'d.enterprise_no',
				value:Ext.get('enterpriseNo').getValue()
		};
		listDetail1.push(p);
        var p={
		columnId:'d.warehouse_no',
		value:record.data.warehouseNo
		};
		listDetail1.push(p);
        var p={
		columnId:'d.owner_no',
		value:record.data.ownerNo
		};
		listDetail1.push(p);
        var p={
		columnId:'d.recede_no',
		value:record.data.recedeNo
		};
		listDetail1.push(p);
		var jsonlistDetail1 = Ext.encode(listDetail1);
		var wheresql={
			str:jsonlistDetail1
		};
		Ext.getCmp('txtRecede_no7102_2').setValue(record.data.recedeNo);
		Ext.getCmp('cmbRecede_type7102_2').setValue(String(record.data.recedeDate));
		Ext.getCmp('txtPo_no7102_2').setValue(record.data.poNo);
		Ext.getCmp('txtPo_type7102_2').setValue(record.data.poType);
		Ext.getCmp('dateRecede_date7102_2').setValue(record.data.recedeDate);
		Ext.getCmp('dateRequestDate27102_2').setValue(record.data.requestDate);
		Ext.getCmp('cmbSuppliers7102_2').getStore().add({
    	value:record.data.supplierNo,
    	dropValue:'['+record.data.supplierNo+']'+record.data.supplierName,
    	text:record.data.supplierName
        });
        Ext.getCmp('cmbRecede_type7102_2').setValue(record.data.recedeType);
	    Ext.getCmp('cmbOwner_no7102_2').setValue(record.data.ownerNo);
	    Ext.getCmp('cmbSuppliers7102_2').setValue(record.data.supplierNo);
	    Ext.getCmp('recede_remark7102_2').setValue(record.data.recedeRemark);
		Ext.getCmp('orgNo7102').setValue(record.data.orgNo);
		Ext.getCmp('classType7102').setValue(record.data.classType);
		Ext.getCmp('takeType7102').setValue(record.data.takeType);
		
		Ext.apply(Ext.getCmp('gridRodata_RecedeD7102').getStore().proxy.extraParams,wheresql);
		Ext.getCmp('gridRodata_RecedeD7102').getStore().removeAll();
		Ext.getCmp('gridRodata_RecedeD7102').getStore().load();
	isCanEdit7102=false;
}

function sendLocateParam(){
	
	var objdata=Ext.getCmp('gridRodata_RecedeM7102').getSelectionModel().getSelection();
	var detail=[];
	if(objdata.length!=0){
		for(var i=0; i<objdata.length; i++){
			var no={
				ownerNo:objdata[i].get('ownerNo'),
				recedeNo:objdata[i].get('recedeNo'),
				classType:objdata[i].get('classType'),
				supplierNo:objdata[i].get('supplierNo'),
			};
			detail.push(no);
		}
		
	}
	var no=Ext.encode(detail);
	var params = {
		str:no,
		cellNo:Ext.getCmp('cell7102').getValue()==""||Ext.getCmp('cell7102').getValue()==null?'N':Ext.getCmp('cell7102').getValue()
	};
	Ext.Ajax.request({
		method:'POST',
		url:'rodata_RecedeMTTHAction_send.action',
		timeout:1800000,
		params:params,
		success:function(response){
			var data = Ext.decode(response.responseText);
			if(data.isSucc){
				Ext.example.msg($i18n_prompt.prompt,data.msg);
				Ext.getCmp('suppliers7102').setValue('');
				Ext.getCmp('suppliers7102').getStore().removeAll();
				Ext.getCmp('suppliers7102').getStore().reload();
				
			    Ext.getCmp('gridRodata_RecedeM7102').getStore().removeAll();
				Ext.getCmp('gridRodata_RecedeM7102').getStore().load();
			
			}else{
				Ext.example.msg($i18n_prompt.prompt,data.msg+data.obj);
			}				
		}
	});	
}

/*
 * 新增前加载
 */
function add7102_2() {
	Ext.getCmp('fromRodata_RecedeM7102x').getForm().reset();
	Ext.getCmp('gridRodata_RecedeD7102').getStore().removeAll();
	Ext.getCmp('txtRecede_no7102_2').setValue($i18n_prompt.autogenerationWhenSave);
	Ext.getCmp('cmbRecede_type7102_2').setValue('RE');
	Ext.getCmp('orgNo7102').setValue('001');
	Ext.getCmp('classType7102').setValue('1');
	Ext.getCmp('takeType7102').setValue('0');
	if(Ext.getCmp('cmbOwner_no7102_2').getStore().data.length>0)
	{
		Ext.getCmp('cmbOwner_no7102_2').setValue(Ext.getCmp('cmbOwner_no7102_2').getStore().getAt(0).data.value);		
	}

	Ext.getCmp('dateRecede_date7102_2').setValue(new Date());
	Ext.getCmp('dateRequestDate27102_2').setValue(new Date());
	commonSetMsterReadOnlyByArray(
			new Array('cmbOwner_no7102_2','cmbRecede_type7102_2','takeType7102',
			'txtPo_no7102_2','cmbSuppliers7102_2','txtPo_type7102_2',
			'dateRecede_date7102_2','dateRequestDate27102_2','recede_remark7102_2',
			'orgNo7102','classType7102'),false);
	commonSetMsterReadOnlyByArray(
			new Array('txtRecede_no7102_2')
			,true);
	commonEditButton('menu7102','add');
	Ext.getCmp('commMenuWidget67102').items.items[0].enable(true);
	Ext.getCmp('commMenuWidget67102').items.items[1].enable(true);
	Ext.getCmp('txtPo_no7102_2').focus(false, 10);
	isCanEdit7102=true;
}
