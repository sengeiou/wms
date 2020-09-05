Ext.define('cms.model.cdef.cdef_DefAreaModel', {
    extend: 'Ext.data.Model',
    fields: [
    	{name:'warehouseNo'},
		{name:'wareNo'},
		{name:'areaNo'},
		{name:'areaName'},
		{name:'areaRemark'},
		{name:'OType'},
		{name:'areaType'},
		{name:'areaUsetype'},
		{name:'areaQuality'},
		{name:'mixFlag'},
		{name:'mixSupplier'},
		{name:'maxQty'},
		{name:'stockNum'},
		{name:'divideFlag'},
		{name:'BDivideFlag'},
		{name:'areaAttribute'},
		{name:'attributeType'},
		{name:'limitType'},
		{name:'limitRate'},
		{name:'palOutRate'},
		{name:'BPick'},
		{name:'areaPick'},
		{name:'AFlag'},
		{name:'ioBufferFlag'},
		{name:'pickFlag'},
		{name:'floor'},
		{name:'advancerPickFlag'},
		{name:'maxCase'},
		{name:'itemType'},
		{name:'divideLineFlag'},
		{name:'rgstName'},
		{name:'rgstDate'},
		{name:'updtName'},
		{name:'updtDate'},
		{name:'BReplenishType'},
		{name:'BReplenishRule'},
		{name:'CReplenishType'},
		{name:'CReplenishRule'},
		{name:'replenishTaskRule'},
		{name:'locateTime'},
		
		{name:'OTypeText'},
		{name:'areaTypeText'},
		{name:'areaUsetypeText'},
		{name:'areaQualityText'},
		{name:'mixFlagText'},
		{name:'mixSupplierText'},
		{name:'divideFlagText'},
		{name:'BDivideFlagText'},
		{name:'areaAttributeText'},
		{name:'attributeTypeText'},
		{name:'limitTypeText'},
		{name:'BPickText'},
		{name:'areaPickText'},
		{name:'AFlagText'},
		{name:'ioBufferFlagText'},
		{name:'pickFlagText'},
		{name:'advancerPickFlagText'},
		{name:'itemTypeText'},
		{name:'divideLineFlagText'},
		{name:'mixOwner'},
		
		{name:'maxWeight'},
		{name:'maxVolume'},
		{name:'maxqtyStrategyId'},
		{name:'pickLevel'},
		{name:'keepLabelFlag'},
		
		{name:'value'},
		{name:'text'},
		{name:'dropValue'},
    ],
    idProperty:'warehouseNo,wareNo,areaNo'
});