import { Component, OnInit } from "@angular/core";
import { fromEvent, timer } from "rxjs";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  standalone: false,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}

/*

 ngOnInit() {
    //  interval$ = timer(3000, 1000); this line const
    //  is not the stream of value. this is the definition for a stream of values
    //the blueprint how the stream will behave  if we instantitate it

    // const interval$ = interval(1000); // define the stream

    const interval$ = timer(3000, 1000); // define the stream // wait 3 seconds emit values each second

    // an observable become a stream if we subscribe to it
    const sub = interval$.subscribe((val) => console.log("stream 1 " + val)); // create the stream

    setTimeout(() => sub.unsubscribe(), 5000);

    // fromEvent -create an observable from a DOM event. - (source of event, event)
    const click$ = fromEvent(document, "click"); // define the stream

    // observable will emit values and then it will either error out or complete. If it errors out it will not complete
    click$.subscribe(
      (evt) => console.log(evt),
      (err) => console.log(err),
      () => console.log("complete") // 3rd subscribe parameter is about stream completion
    ); // create the stream
  }
*/
