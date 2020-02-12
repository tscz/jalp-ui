import { HttpErrorResponse } from '@angular/common/http';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage = '';

  constructor(private router: Router) {}

  public handleError = (error: HttpErrorResponse) => {
    switch (error.status) {
      case 500:
        this.handle500(error);
        break;
      case 404:
        this.handle404(error);
        break;
      default:
        this.handleOther(error);
    }
  };

  private handle500 = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  };
  private handle404 = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  };
  private handleOther = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    // TODO
  };

  private createErrorMessage(error: HttpErrorResponse) {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
