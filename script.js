/*
Date: 2/11/2018      CS290 DOM and Events
Andrei Pestovski
Description: create 4x4 table, top row is a header, using javascript and DOM
add buttons up, down, left, right to traverse (using events listeners) within the table boarders,
The current cell shoul dhave highloighted boarder.
*/
           var table, up, down, left, right, markCell;
          
           // to store current positions of highlighted cell
           var currentPositionRow = 1, currentPositionCol = 1;
          
           // create a button
           function getButton(text) {
               var bt = document.createElement('button');
               var btName = document.createTextNode(text);
               bt.appendChild(btName);
               return bt;
           }
          
           // identifying location of current cell in the table
           function curCell(row, col) {
               // limiting to 3 by 4 table size
               if(row < 1 || row > 3 || col < 1 || col > 4)
                   return undefined;

               var tRow = table.childNodes[row];//taking row cell
              
               var tableCell = tRow.childNodes[col-1];//reducing size to ignore headers
              
               return tableCell;
           }
          
// Create table
           function generate_table() {      
               // construct table
               table = document.createElement('table');
              //create headers
               var row = document.createElement('tr');
               for (var i = 1; i < 5; i++){
                   var th = document.createElement('th');
                   th.appendChild(document.createTextNode('Header ' + i));
                   row.appendChild(th);
                   th.style.background = "pink";//adding some color for header
               }
               table.appendChild(row);
              //create data cells
               for (var i = 1; i < 4; i++){
                   var tr = document.createElement('tr');   
                   for(var j=1; j<5; j++) {
                    var td = document.createElement('td');
                       td.appendChild(document.createTextNode(i + ',' + j));
                       tr.appendChild(td);
                       td.style.border = "1px solid black";//normal boarder
                   }
                   table.appendChild(tr);
                   }  
               table.style.border = "1px solid ";
               document.body.appendChild(table);

               // creating direction buttons
               up = getButton("Up");
               down = getButton("Down");
               left = getButton("Left");
               right = getButton("Right");
               markCell = getButton("Mark Cell");
              
               // adding the buttons to the page
               document.body.appendChild(up);
               document.body.appendChild(down);
               document.body.appendChild(left);
               document.body.appendChild(right); 
               document.body.appendChild(markCell);
           }
          
           // create structure
           generate_table();
           //starting cell is 1,1 with normal boarder
           changeBorder(curCell(currentPositionRow, currentPositionCol), curCell(currentPositionRow, currentPositionCol)); 

           function changeBorder(current, next) {
               current.style.border = "1px solid black"; //de-selected boarder            
               next.style.border = "2px solid black"; //active-current cell boarder
           }
          
           // adding listeners
           up.addEventListener("click", function(){
               // get Up cell
               var tableCell = curCell(currentPositionRow - 1, currentPositionCol);
               if(tableCell != undefined) {
                   changeBorder(curCell(currentPositionRow, currentPositionCol), tableCell);                  
                   currentPositionRow--;
               }
           });
          
           down.addEventListener("click", function(){
               // get Down cell
               var tableCell = curCell(currentPositionRow + 1, currentPositionCol);
               if(tableCell != undefined) {
                   changeBorder(curCell(currentPositionRow, currentPositionCol), tableCell);                  
                   currentPositionRow++;
               }
           });
          
           left.addEventListener("click", function(){
               // get Left cell
               var tableCell = curCell(currentPositionRow, currentPositionCol - 1);
               if(tableCell != undefined) {
                   changeBorder(curCell(currentPositionRow, currentPositionCol), tableCell);                  
                   currentPositionCol--;
               }
           });
          
           right.addEventListener("click", function(){
               // get Right cell
               var tableCell = curCell(currentPositionRow, currentPositionCol + 1);
               if(tableCell != undefined) {
                   changeBorder(curCell(currentPositionRow, currentPositionCol), tableCell);                  
                   currentPositionCol++;
               }
           });
          
           markCell.addEventListener("click", function(){
               // get Right cell
               var tableCell = curCell(currentPositionRow, currentPositionCol);
               if(tableCell != undefined) {
                   tableCell.style.backgroundColor = "yellow";
               }
           });          
          
