## create angular project

```shell
# setup enviornment
npm install -g @angular/cli
ng version

# new project app_name
ng new app_name 

# new component for the project
ng generate component component 


```

## display a component 
* need to put selector in to app.component.html as      
```html
<app-component></app-component>
```
---
## data binding

* porperty binding
* class binding
* style binding

----
## two way binding     

view -->(Event Binding)--> Class --(Data Binding)--> view       

**we use ngModel to solve this problem.**
```js
<p>two way binding</p>
<input [(ngModel)]="namee" type="text">
{{namee}}
```
```ts
export class TwoWayBindingComponent implements OnInit {
  public namee = "";
  constructor() { }

  ngOnInit(): void {
  }

}
```
---
## Structural Directives
**use for add or remove html elements**
* ngIf
```ts
<!--html-->
<button (click)="onClick($event)">show/hide Me text</button>
<h2 *ngIf="isdisable">ngif_demo</h2>

<h2 *ngIf="isdisable; else elseBlock">
    displayName
</h2>
<ng-template #elseBlock>
    <h2>
        Name is hidden
    </h2>
</ng-template>

<div *ngIf="isdisable; then thenBlock; else elseblock"></div>
<ng-template #thenBlock>
    <h2>codevolution</h2>
</ng-template>

<ng-template #elseblock>
    <h2>hidden</h2>
</ng-template>


//component.ts
public isdisable = false;
  onClick(event){
    this.isdisable = !this.isdisable;
  }
```
* ngSwitch
```ts
<input [(ngModel)]="color" type="text"><!--two way binding-->
<div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">you pick red color</div>
    <div *ngSwitchCase="'blue'">you pick blue color</div>
    <div *ngSwitchCase="'green'">you pick green color</div>
    <div *ngSwitchDefault>{{color}}</div>
</div>
```
* ngFor
```ts
<div *ngFor="let color of colors; index as i; first as f">
    <h2>{{i}} {{f}} {{color}}</h2>
</div>

will show this:
0 true red
1 false blue
2 false orange
3 false yellow
```