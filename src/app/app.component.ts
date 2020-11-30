import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  LightOn = false;
  // changeColor = false;

  // anArray = ['Angular', 'TypeScript', 'JavaScript', 'Foundation'];
  anArray = [
    { name: "TypeScript", releasedate: " was released in 1 October 2012" },
    { name: "Angular", releasedate: " was released in 14 September 2016" },
    { name: "RxJs", releasedate: " was released in Sep 3, 2015" },
    { name: "NestJs", releasedate: "was released in Nov 24, 2017" },
    { name: "JavaScript", releasedate: " was released in March 1996" },
    { name: "Foundation", releasedate: "  was released in September 2011" }
  ];

  selected = "";

  anObj: any = {};

  OnLightOn(): void {
    this.LightOn = !this.LightOn;
  }

  arrayPushing(pushed: string): void {
    pushed = pushed.trim();
    if (pushed) {
      const x = JSON.stringify(this.anArray);
      console.log(x);
      const y = x.indexOf(`"name":"${pushed}"`);
      if (y === -1) {
        this.anArray.push({
          name: pushed,
          releasedate: " releasedate is unknown"
        });
      }
    }
    // if (JSON.stringify(this.anArray).indexOf(pushed.trim()) === -1) {
    //   this.anArray.push({
    //     name: pushed,
    //     releasedate: 'unknown',
    //   });
    // }

    // for (const item of this.anArray) {
    //   if (pushed === item.name) {
    //     this.anObj = item;
    //   }
    // }

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
    console.log(this.selected);
  }
}
