import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-new-detail",
  templateUrl: "./new-detail.component.html",
  styleUrls: ["./new-detail.component.css"]
})
export class NewDetailComponent implements OnInit {
    @Input() inputObj: any = {};
  constructor() {}

  ngOnInit() {
    console.log(this.inputObj)
  }
}
