'use strict';

angular.module('app').controller('filteringCtrl', function ($scope, dataService) {
	$scope.ctx = {
		data: dataService.getData(50),
		flexSheet: null,
		filterEnable: true
	};

	$scope.$watch('ctx.flexSheet', function () {
	    var flexSheet = $scope.ctx.flexSheet;
	    if (flexSheet) {
	        flexSheet.selectedSheetChanged.addHandler(function (sender, args) {
	            $scope.ctx.filterEnable = !!flexSheet.itemsSource;
	            if (!$scope.$root.$$phase) {
	                $scope.$apply('ctx.filterEnable');
	            }
	        });
	    }
	});

	$scope.initialized = function (flexSheet) {
		flexSheet.deferUpdate(function () {
			var column;

			// initialize the dataMap for the bound sheet.
			if (flexSheet) {
				column = flexSheet.columns.getColumn('countryId');
				if (column && !column.dataMap) {
					column.dataMap = buildDataMap(dataService.getCountries());
				}
				column = flexSheet.columns.getColumn('productId');
				if (column && !column.dataMap) {
					column.dataMap = buildDataMap(dataService.getProducts());
				}
			}
		});
	};

	// Show the column filter for the flexSheet control.
	$scope.showFilter = function () {
		var flex = $scope.ctx.flexSheet;

		if (flex) {
			flex.showColumnFilter();
		}
	};

	// build a data map from a string array using the indices as keys
	function buildDataMap(items) {
		var map = [];
		for (var i = 0; i < items.length; i++) {
			map.push({ key: i, value: items[i] });
		}
		return new wijmo.grid.DataMap(map, 'key', 'value');
	};
})