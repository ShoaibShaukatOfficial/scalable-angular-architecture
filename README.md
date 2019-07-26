# angular-8-boilerplate-AngularMaterial
Boiler Plate using Angular 8 ,Angular Material 8 , Auth0 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

# Feature Modules
A feature module is a module in which all of the content is going to be encapsulated inside of a single area.
Applications should be made up of multiple feature modules.
Think of a feature module as a mini stand alone application inside your full application.
# Shared Modules
Use shared modules for pieces of your application that need to be used across multiple areas (features) of your application.
If a component is going to be re-used in multiple features, declare it in a shared module.
Services and Pipes are more commonly declared in shared modules.
Shared modules don’t necessarily follow the “section” idea  Instead they provide a way to share common pieces to fill out feature module.
# Core Module
A core module as a way to separate the configuration layer of your application with the rest of your application.
To do so, you declare all of your feature and shared modules in your CoreModule and just provide your CoreModule to your AppModule
For anything that needs to be used across all feature modules, declare it in the CoreModule.
Think of it as the parent feature module for all of the content you are going to add to your application.

# Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
