import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';

//importing Router Module 
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';

const modules = [
  CommonModule,
  RouterModule,
  LayoutModule
];

const components = [
  ShellComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule { }
