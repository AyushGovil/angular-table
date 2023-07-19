# TableDisplay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Overview

### Folder Structure

The App folder consists of the following:

- App component => Root component
- Components Folder => Contains the components which are being routed. Components include home and operations. home component is a dummy component that is present in the sidebar to showcase we can route to different page too.
- Interfaces Folder => Contains activity and item interface. Activity interface is a blueprint for the row item in the table. Item interface is a blueprint for the card (present above the table).
- Shared Folder => Contains the table and task component. Table component displays the table and task component displays the card above the table. Both of the components act as reusable components in the project.
- App routing module => Contains the routes.

The components are build with the help of Angular material.

### Features 

- Side-menu
- Header
- Routes
- Table with pagination. Items can be added dynamically in the table via the following tasks.
  ![image](https://github.com/AyushGovil/angular-table/assets/33975149/dd2dd443-9128-41a7-abb8-06d921742101)
- Compleletely Responsive
  
## Project Deployment

- Used Firebase to deploy the project.
- Link => https://angular-table-82e96.web.app/operations.

### Formatter

- Added prettier extension to format the code.

   
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
