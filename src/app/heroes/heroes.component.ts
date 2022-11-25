import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  reviewing = ["ăn", "ngủ", "code", "repeat"];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(`
      event.container.data: ${event.container.data}, 
      event.previousIndex: ${event.previousIndex}, 
      event.currentIndex: ${event.currentIndex}`)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(`
      event.previousContainer.data: ${event.previousContainer.data},
      event.container.data: ${event.container.data},
      event.previousIndex: ${event.previousIndex},
      event.currentIndex: ${event.currentIndex},
      `)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
