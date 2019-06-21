import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit 
{
  constructor() { }
  ngOnInit() 
  {
  }

  Previous()
  {
    $.ajax
    ({
        type        : "GET",
        url         : "./QP1/Question1.xml",
        dataType    : "xml",
        success     : function(xml)
        {
            alert(xml)
        },
        error : function()
        {
            alert("error");
        }
    });
  }



}
