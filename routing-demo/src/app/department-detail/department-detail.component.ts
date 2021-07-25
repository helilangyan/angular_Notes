import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>you selected department id is :{{departmentID}}</h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">contact</button>
    </p>
    <router-outlet></router-outlet>

    <button (click)="goPrevious()">previous</button>
    <button (click)="goNext()">next</button>
    <div>
      <button (click)="gotoDepartment()">Back</button>
    </div>

  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentID = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.departmentID = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentID - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext(){
    let nextId = this.departmentID + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartment(){
    let selectedId = this.departmentID ? this.departmentID : null;
    //this.router.navigate(['/departments', {id: selectedId, test: 'testvalue'}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
