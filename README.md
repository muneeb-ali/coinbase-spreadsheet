coinbase-spreadsheet
====================

Get Coinbase BTC price in a Google spreadsheet

1. Open the Google spreadsheet where you want to import the Coinbase price
2. Go to "Tools" --> "Script Manager". Click on "New" --> "Blank Project"
3. Replace: 

   ```
   function myFunction() {
  
   }
   ```

   with the code from '[coinbase_fetch.gs](coinbase_fetch.gs)' (simply copy/paste it from '[coinbase_fetch.gs](coinbase_fetch.gs)') 

4. Change the following two variables: 
   ```
   var buy_price_cell = 'E4'
   var sell_price_cell = 'E3'
   ```
   and put the cells (from your Google spreadsheet) where you want the respective prices to appear e.g., 'A1', 'B4' etc. 

5. Go to "File" --> "Rename" and in "Enter new project name" enter something like 'coinbase_price'
6. Go to "Resources" --> "Current project's triggers" --> and add a new trigger. In "Events" make it "Time-driven" and select the hours/minutes after which you want the price to refresh.  
7. Google will say "Authorization required", give the script the required authorization to run. 
8. Go back to your spreadsheet window and reload the 'Script manager', you should see the 'coinbase_price' script there now. 

If you followed these steps correctly, you should now see the Coinbase buy and sell price appear in the cells you entered (in step 4). 

If you have questions, contact [Muneeb Ali](http://twitter.com/muneeb)



