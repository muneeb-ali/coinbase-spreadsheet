function coinbase_price() {
 
  //---------- edit these two variables ----
  var buy_price_cell = 'E4'
  var sell_price_cell = 'E3'
  //------------------------------------
  
  var sell_url = "https://coinbase.com/api/v1/prices/sell"
  var buy_url = "https://coinbase.com/api/v1/prices/buy"
  
  var response = UrlFetchApp.fetch(sell_url)
  var data = JSON.parse(response)
  
  var sell_price = data.amount
  
  response = UrlFetchApp.fetch(buy_url)
  data = JSON.parse(response)
  
  var buy_price = data.amount
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet()
  
  sheet.getRange(buy_price_cell).setValue(buy_price)
  sheet.getRange(sell_price_cell).setValue(sell_price)
  
}
