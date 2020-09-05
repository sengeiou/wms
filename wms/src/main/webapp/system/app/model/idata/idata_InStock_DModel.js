Ext.define('cms.model.idata.idata_InStock_DModel', {
    extend: 'Ext.data.Model',
    fields: [			
	       	{name:'instockNo'},
			{name:'warehouseNo'},
			{name:'ownerNo'},
			{name:'instockId'},
			{name:'directSerial'},
			{name:'instockType'},
			{name:'cellNo'},
			{name:'cellId'},
			{name:'containerNo'},
			{name:'articleNo'},			
			{name:'ownerArticleNo'},
			{name:'articleId'},
			{name:'articleName'},
			{name:'barcode'},
			{name:'packingQty'},
			{name:'destCellNo'},
			{name:'destCellId'},
			{name:'articleQty'},
			{name:'realCellNo'},
			{name:'realQty'},
			{name:'realBox'},
			{name:'realDis'},
			{name:'sourceNo'},
			{name:'status'},
			{name:'authorizedWorker'},
			{name:'scanLabelNo'},
			{name:'labelNo'},
			{name:'businessType'},
			{name:'rgstName'},
			{name:'rgstDate'},
			{name:'updtName'},
			{name:'updtDate'},
			{name:'produceDate'},
			{name:'packingUnit'},//箱包装单位
			{name:'packingUnitQmin'},//中包装单位
			{name:'Unit'},//基本包装单位
			{name:'packingSpec'},//箱包装规格
			{name:'packingSpecQmin'},//中包装规格
			{name:'spec'},//基本包装规格
			{name:'realBox'},//实际箱数
			{name:'realDis'},//实际散数
			{name:'realQmin'},//实际中包数
			{name:'planBox'},//计划箱数
			{name:'planDis'},//计划散数
			{name:'planQmin'},//计划中包数
			{name:'qminOperatePacking'},//最小操作包装数量
			{name:'unitPacking'},//基本包装数量
    ],
    idProperty:'instockNo,warehouseNo,ownerNo,instockId'
});