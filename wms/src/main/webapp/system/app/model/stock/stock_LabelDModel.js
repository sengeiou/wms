/**
 * 标签明细表
 * @author JUN
 */
Ext.define('cms.model.stock.stock_LabelDModel', {
    extend: 'Ext.data.Model',
    fields: [
	{name:'warehouseNo'},
	{name:'labelNo'},
	{name:'containerNo'},
	{name:'containerType'},
	{name:'batchNo'},
	{name:'ownerNo'},
	{name:'sourceNo'},
	{name:'containerType'},
	{name:'articleNo'},
	{name:'articleId'},
	{name:'packingQty'},
	{name:'qty'},
	{name:'expNo'},
	{name:'waveNo'},
	{name:'custNo'},
	{name:'subCustNo'},
	{name:'lineNo'},
	{name:'status'},
	{name:'divideId'},
	{name:'expType'},
	{name:'dpsCellNo'},
	{name:'deliverObj'},
	{name:'expDate'},
	{name:'advanceCellNo'},
	{name:'advanceStatus'},
	{name:'rgstName'},
	{name:'rgstDate'},
	{name:'updtName'},
	{name:'updtDate'},
	
	{name:'labelNo'},
	{name:'articleName'},
	{name:'barcode'},
	{name:'spec'},
	{name:'poBox'},
	{name:'poDis'},
	{name:'ownerArticleNo'},
	{name:'rsvAttr1'},
	{name:'rsvAttr2'},
	{name:'rsvAttr3'},
	{name:'rsvAttr4'},
	{name:'rsvAttr5'},
	{name:'rsvAttr6'},
	{name:'rsvAttr7'},
	{name:'subLabelNo'},
	
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
	{name:'realBox'},
	{name:'realDis'},
	{name:'realQmin'}
	
 	],			
    idProperty:'warehouseNo,containerNo,rowId'
});