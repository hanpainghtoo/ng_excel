import { Component } from '@angular/core';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
}
