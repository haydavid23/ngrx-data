import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";


@Injectable()
export class CoursesResolver implements Resolve<boolean>
{

    constructor(private coursesService:CourseEntityService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> 
    {
        return this.coursesService.getAll().pipe(map((courses)=>{return !!courses }))
    }
}

