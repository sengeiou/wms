/**
 * fcdata_CheckDModel
 * @author JUN
 */
Ext.define('cms.model.fcdata.fcdata_CheckDModel', {
    extend: 'Ext.data.Model',
    fields: [
     		{name:'warehouseNo'},
			{name:'checkNo'},
			{name:'rowId'},
			{name:'ownerNo'},
			{name:'cellNo'},
			{name:'articleNo'},
			{name:'orderId'},
			{name:'subOrderId'},
			{name:'packingQty'},
			{name:'labelNo'},
			{name:'subLabelNo'},
			{name:'deptNo'},
			{name:'barcode'},
			{name:'produceDate'},
			{name:'expireDate'},
			{name:'quality'},
			{name:'lotNo'},
			{name:'rsvBatch1'},
			{name:'rsvBatch2'},
			{name:'rsvBatch3'},
			{name:'rsvBatch4'},
			{name:'rsvBatch5'},
			{name:'rsvBatch6'},
			{name:'rsvBatch7'},
			{name:'rsvBatch8'},
			{name:'stockType'},
			{name:'stockValue'},
			{name:'articleQty'},
			{name:'checkQty'},
			{name:'recheckQty'},
			{name:'realQty'},
			{name:'addFlag'},
			{name:'status'},
			{name:'checkType'},
			{name:'thirdQty'},
			{name:'checkFlag'},
			{name:'checkWorker'},
			{name:'checkDate'},
			{name:'differentFlag'},
			{name:'recheckWorker'},
			{name:'recheckDate'},
			{name:'thirdWorker'},
			{name:'thirdDate'},
			
			{name:'difFlag'},
			{name:'fcdataType'},
			{name:'wareNo'},
			{name:'stockNo'},
			{name:'areaNo'},
			{name:'guarantee'},
			{name:'articleName'},
			{name:'field'},
			{name:'differentFlagText'},
			{name:'qualityText'},
			{name:'ownerArticleNo'},
			{name:'lotType'},
			
			{name:'qminOperatePacking'},
			{name:'unitPacking'},
			{name:'packingUnit'},
			{name:'packingUnitQmin'},
			{name:'Unit'},
			{name:'packingSpec'},
			{name:'packingSpecQmin'},
			{name:'spec'},
			{name:'planBox'},
			{name:'planDis'},
			{name:'planQmin'},
			{name:'rePlanBox'},
			{name:'rePlanQmin'},
			{name:'rePlanDis'},
			{name:'thirdPlanBox'},
			{name:'thirdPlanqQmin'},
			{name:'thirdPlanDis'}
    ],
    idProperty:'warehouseNo,checkNo,rowId'
});