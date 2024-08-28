import { Component, ElementRef, ViewChild } from '@angular/core';
// import { JSONEditor } from 'vanilla-jsoneditor'
import JSONEditor from 'jsoneditor';

@Component({
  selector: 'app-svelet-json-viewr',
  templateUrl: './svelet-json-viewr.component.html',
  styleUrls: ['./svelet-json-viewr.component.css']
})
export class SveletJsonViewrComponent {

  @ViewChild('jsonEditorContainer', { static: true }) jsonEditorContainer!: ElementRef ;

  editor: any;
  

  getCurrentJsonData() {
    return this.editor.get()
    
  }

  ngAfterViewInit() {
    const container = this.jsonEditorContainer.nativeElement;
     this.editor = new JSONEditor(container, {
      modes: ['tree', 'text'],
      onChange: () => {

        console.log('data changedc',this.getCurrentJsonData())
        // Handle changes to the JSON data
      }
    });
    this.editor.set({
      // Initialize the JSON data
      "name": "John",
      "age": 30,
      " occupation": "Developer"
    });
  }

  


}
