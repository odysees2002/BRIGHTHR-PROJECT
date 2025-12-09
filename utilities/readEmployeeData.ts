//This script to read the testdata from the csv file
// Interface Name :  EmpData ; Function Name: ReadEmpData

import fs from 'fs';
import { parse } from 'csv-parse/sync';

export interface EmpData {
 
  First_Name : string;
  Last_name : string;
  Email_Address : string;
  Phone_Number : string;
  Start_Year : string;
  Start_Month : string;
  Start_Date : string;
  Job_Title : string;
}

export function ReadEmpData(filepath: string): EmpData[] {

  const content = fs.readFileSync(filepath, 'utf-8');
  
  return parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  });

}