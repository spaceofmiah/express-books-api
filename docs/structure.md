# Project Folder Structure

Project follows an MVC pattern which clearly seperate concerns and allows for easy navigation across the codebase.

### MVC Pattern

The application structure follows an MVC  (Model, View, Controller) approach where

Model are contained within `models` folder: A model represent database relational entities such as schemas, models and the model interface.

View are contained within `routes` folder: Routes maps request handlers to request path describing how clients could reach resources contained in the system.

Controller are contained within `controllers` folder: Controller handles all business logic against a client's request ensuring the request is valid and processable.


#### Support Folders

Other folders that makes up the project are the

- DTO (Data Transfer Object): DTOs helps ensure data provided in client's requests are as expected and responses are deterministic. All DTOs are situated at `dtos` folder 

- settings: holds configurations needed to run the application such as database configuration. Project configurations are located within `settings` folder.

- utils: contains utilities which are small programs or functions that provide commonly needed functionality or perform specific tasks. Utilities are located in `utils` folder.


### File Naming Convention

Two naming conventions are used for files contained within the project all of which follows entity/domain driven convention

- `TitleCase` naming convention: This naming convention is only used for files contained within `models` folder. This ensures Entities are well represented. 

- `camelCase` naming convention: This naming convention is used for every other files except those in `models`.

