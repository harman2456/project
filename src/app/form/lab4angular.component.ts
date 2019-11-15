import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab',
  templateUrl: './lab4.component.html',
  styleUrls: ['./form.component.css']
})
export class LabComponent{
streams=[  {id:1, name:"Engineering"},
  {id:2, name:"Sciences"},
  {id:3, name:"Medical"},
  {id:4, name:"Humanity"}
]
log(val)
{
  console.log(val);
}
accept()
{
  alert("data submitted");
}

}