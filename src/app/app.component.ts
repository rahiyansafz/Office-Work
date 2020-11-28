import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  LightOn = false;
  changeColor = false;

  // anArray = ['Angular', 'TypeScript', 'JavaScript', 'Foundation'];
  anArray = [
    { name: "TypeScript", releasedate: " Releasedate: 1 October 2012" },
    { name: "Angular", releasedate: " Releasedate: 14 September 2016" },
    { name: "RxJs", releasedate: " Releasedate: Sep 3, 2015" },
    { name: "NestJs", releasedate: " Releasedate: Nov 24, 2017" },
    { name: "JavaScript", releasedate: " Releasedate: March 1996" },
    { name: "Foundation", releasedate: " Releasedate:  September 2011" }
  ];

  selected = "";

  anObj: any = {};

  OnLightOn(): void {
    this.LightOn = !this.LightOn;
  }

  arrayPushing(pushed: string): void {
    const x = JSON.stringify(this.anArray);
    const y = x.indexOf(pushed.trim());
    if (y === -1) {
      this.anArray.push({
        name: pushed,
        releasedate: " Releasedate: unknown"
      });
    }

    // if (JSON.stringify(this.anArray).indexOf(pushed.trim()) === -1) {
    //   this.anArray.push({
    //     name: pushed,
    //     releasedate: 'unknown',
    //   });
    // }

    for (const item of this.anArray) {
      if (pushed === item.name) {
        this.anObj = item;
      }
    }

    this.selected = "";
  }
  highlightTest(param: string): void {
    this.selected = param;
    // console.log(param);
  }

  removeFromList(item: any): void {
    const index = this.anArray.indexOf(item);
    this.anArray.splice(index, 1);
  }

  select(item: any): void {
    this.selected = item.name;
    this.anObj = item;
  }
}
