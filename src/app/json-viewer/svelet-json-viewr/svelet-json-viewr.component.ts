import { Component, ElementRef, ViewChild } from '@angular/core';
import { JSONEditor } from 'vanilla-jsoneditor'

@Component({
  selector: 'app-svelet-json-viewr',
  templateUrl: './svelet-json-viewr.component.html',
  styleUrls: ['./svelet-json-viewr.component.css']
})
export class SveletJsonViewrComponent {

  
    @ViewChild('jsonEditorContainer', { static: true }) jsonEditorContainer!: ElementRef;
  
    ngAfterViewInit() {
      const container = this.jsonEditorContainer.nativeElement;
      const editor = new JSONEditor({
        target: container,
        props: {
          content: {
            text: undefined,
            json: {
              "name": "John",
              "age": 30,
              "occupation": "Developer"
            }
          },
          onChange: (updatedContent, previousContent, { contentErrors, patchResult }) => {
            // Handle changes to the JSON data
          }
        }
      });
    }


}
