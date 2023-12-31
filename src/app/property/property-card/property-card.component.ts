import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    templateUrl: './property-card-component.html',
    styleUrls: ['./property-card-component.css']
})
export class PropertyCardComponent {
    properties = [
        { "Id": 1, "Name": "Birla House", "Type": "House", "Price": 12000 },
        { "Id": 2, "Name": "Erose Villa", "Type": "House", "Price": 14000 },
        { "Id": 3, "Name": "Mark Hill", "Type": "Flat", "Price": 12500 },
        { "Id": 4, "Name": "Gun Hill", "Type": "Duplex", "Price": 11400 },
        { "Id": 5, "Name": "Macro House", "Type": "House", "Price": 14300 },
        { "Id": 6, "Name": "Pearl White House", "Type": "House", "Price": 18000 },
    ]
}