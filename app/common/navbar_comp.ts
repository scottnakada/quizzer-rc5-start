import {Component} from '@angular/core';

// annotations come from TS
@Component({
    selector: 'navbar_comp',
    templateUrl: './templates/common/navbar_comp.html'
})
export class Navbar_CompComponent {

    isActive = function(viewLocation) {
        console.log("Location = " + $location.path() + "\n");
        return viewLocation === $location.path();
    }
}