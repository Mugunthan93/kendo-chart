import { Component } from '@angular/core';
import { GanttDependency } from '@progress/kendo-angular-gantt';
import { Task, tasks, dependencies } from './hierarchical-data';

@Component({
  selector: 'my-app',
  template: `
        <kendo-gantt
            [style.height.px]="800"
            [kendoGanttHierarchyBinding]="data"
            childrenField="subtasks"
            kendoGanttExpandable
            [initiallyExpanded]="true"
            [filterable]="true"
            [sortable]="true"
            [columnMenu]="true"
            [columnsResizable]="true"
            [columnsReorderable]="true"
        >

        <ng-template kendoGanttTaskTemplate let-dataItem let-elementWidth="elementWidth">
               {{ dataItem.title }}
           </ng-template>

            <kendo-gantt-column
                field="title"
                title="Title"
                [width]="200"
                [expandable]="true"
            >
            </kendo-gantt-column>
            <kendo-gantt-column
                field="start"
                title="Initial Date"
                format="dd-MMM-yyyy"
                [width]="120"
                filter="date"
            ></kendo-gantt-column>
            <kendo-gantt-column
                field="end"
                title="IMP (P6) Date"
                format="dd-MMM-yyyy"
                [width]="120"
                filter="date"
            > </kendo-gantt-column>
            <kendo-gantt-timeline-month-view></kendo-gantt-timeline-month-view>
        </kendo-gantt>
    `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  public data: Task[] = tasks;
  public dependencies: GanttDependency[] = dependencies;
}
