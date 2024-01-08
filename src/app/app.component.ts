import { Component } from '@angular/core';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  userList = [

    {
    
    "id": 1,
    
    "name": "Leanne Graham",
    
    "username": "Bret",
    
    "email": "Sincere@april.biz"
    
    },
    
    {
    
    "id": 2,
    
    "name": "Ervin Howell",
    
    "username": "Antonette",
    
    "email": "Shanna@melissa.tv"
    
    },
    
    {
    
    "id": 3,
    
    "name": "Clementine Bauch",
    
    "username": "Samantha",
    
    "email": "Nathan@yesenia.net"
    
    },
    
    {
    
    "id": 4,
    
    "name": "Patricia Lebsack",
    
    "username": "Karianne",
    
    "email": "Julianne.OConner@kory.org"
    
    },
    
    {
    
    "id": 5,
    
    "name": "Chelsey Dietrich",
    
    "username": "Kamren",
    
    "email": "Lucio_Hettinger@annie.ca"
    
    }
    
    ]

  ExcelData: any;
  readExcel(event: any){
    let file = event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e)=>{
      var workBook = XLSX.read(fileReader.result, {type: 'binary'});
      var sheetNames = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
      console.log("ExcelData", this.ExcelData);
      
    }
  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
