$(document).ready(function() {
	
	$('#Sumbit').click(function(){

		stock = getStockDetails();
		tradeStock = initalTradeStock();
		if(stock.totalShart >0)
		{
			if(stock.bPrice >0)
			{
				tradeStock.totalPrice = stock.bPrice*stock.totalShart;
				tradeStock.commission = calCommission(tradeStock.totalPrice,stock.commissionRate,stock.minCommission);
				var totalBuyCost = CalTotalCost(tradeStock.totalPrice,tradeStock.commission)
				tradeStock.bCost = parseFloat(tradeStock.totalPrice+totalBuyCost).toFixed(2);
			}
				//costing price;
			if(stock.sPrice>0)
			{
				tradeStock.totalPrice = stock.sPrice*stock.totalShart;
				tradeStock.commission = calCommission(tradeStock.totalPrice,stock.commissionRate,stock.minCommission);
				var totalSellCost = CalTotalCost(tradeStock.totalPrice,tradeStock.commission)
				tradeStock.sCost =  parseFloat(tradeStock.totalPrice - totalSellCost).toFixed(2);
			}
			if(stock.bPrice > 0 && stock.sPrice > 0)
			{
				tradeStock.earning = parseFloat(parseFloat(tradeStock.sCost) - parseFloat(tradeStock.bCost)).toFixed(2);	
				tradeStock.changeRate =parseFloat((tradeStock.earning/tradeStock.bCost)*100).toFixed(2);
			}
			displayResult(stock,tradeStock);
		}
		
	});

	function getStockDetails(){
		var stock = new Object();
		stock.bPrice = $('#BuyPrice').val();
		stock.sPrice = $('#SellPrice').val();
		stock.totalShart = $('#NoofShare').val();
		stock.commissionRate = $('#CommissionRate').val();
		stock.minCommission = $('#MinCommission').val();
		stock.stockName =$('#StockName').val().toUpperCase();
		return stock;
		}

	function initalTradeStock()
	{
		var tradeStock = {
		bCost : 0,
		sCost :0,
		totalPrice:0,
		commission:0,
		earning :0,
		changeRate:0,
		SAF :0,
		CF:0,
		GST :0
		}
		return tradeStock;
	}

	function calCommission(totalPrice,commissionRate,minCommission){
		commission = totalPrice*commissionRate*0.01;
		if(commission < minCommission ){
			commission = minCommission;
		}
		return parseFloat(commission).toFixed(2);
	}

	function CalCF(totalPrice){
		CF = parseFloat(totalPrice*0.04*0.01).toFixed(2);
				if(CF>600)
				{
					CF = 600;
				}
				return parseFloat(CF).toFixed(2);
	}

	function CalTotalCost(totalPrice,Commission){
				CF =  CalCF(totalPrice);
				SAF = parseFloat(totalPrice*0.0075*0.01).toFixed(2);
				GST = parseFloat((Number(Commission)+Number(CF)+Number(SAF))*0.07).toFixed(2);
				return totalBuyCost = Number(Commission)+Number(CF)+Number(SAF)+Number(GST);
	} 

	function displayResult(stock,tradeStock){
		//* Please be informed w.e.f 1st March 2007, the Clearing Fee will be at 0.04% of contract value subject to a maximum of S$600 
				// SGX Access Fee (0.0075%)
				// Calculations through the online calculator include GST of 7% on brokerage,clearing fee and Sgx Access Fee.
				$('#StoreField span').html(
				"<span>"+stock.stockName+"</span>"		
				);
				$('#BuyField span').html(
					"<span>S$ "+tradeStock.bCost+"</span>"
						
					);
				$('#SellField span').html(
					"<span>S$ "+tradeStock.sCost+"</span>"
						
					);
				$('#ProfitField span').html(
					"<span>S$ "+tradeStock.earning+"</span>"	
					);
				$('#ChangeField span').html(
						"<span>"+tradeStock.changeRate+"%</span>"
					);
				if(tradeStock.earning<0){
					$('#ProfitField span').css( "color", "red")
				}
				else{
					$('#ProfitField span').css( "color", "green")
				}

				if(tradeStock.earning<0){
					$('#ChangeField span' ).css( "color", "red")
				}
				else{
					$('#ChangeField span').css( "color", "green")
				}
	}
	
});

