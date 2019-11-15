import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './31-10-19.component.html',
  styleUrls: ['./form.component.css']
})
export class FrmComponent{
/*city=[  {id:1, name:"LDH"},
  {id:2, name:"ASR"},
  {id:3, name:"JLD"},

]*/
log(val)
{
  console.log(val);
}
accept()
{
  alert("data submitted");
}

}