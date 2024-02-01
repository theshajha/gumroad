# Application Directory Structure

The `app/` directory contains the core application code for the Gumroad Discover page redesign project, structured according to the Rails convention over configuration philosophy. Each component within this structure has a specific role, ensuring a clean separation of concerns.

## Directory Structure

```plaintext
app/
├── controllers/
│   ├── application_controller.rb
│   ├── products_controller.rb
│   └── categories_controller.rb
├── models/
│   ├── application_record.rb
│   ├── product.rb
│   └── category.rb
├── views/
│   ├── layouts/
│   ├── products/
│   └── categories/
├── services/
│   └── gumroad_api_service.rb
├── jobs/
│   └── gumroad_api_sync_job.rb
├── helpers/
│   ├── application_helper.rb
│   ├── products_helper.rb
│   └── categories_helper.rb
├── mailers/
└── channels/
```

## Controllers

### `application_controller.rb`
Serves as the base controller from which all other controllers inherit. It includes common functionality across the application.

### `products_controller.rb`
Handles product-related requests and actions, such as listing products, showing a single product, and searching products.

### `categories_controller.rb`
Manages category-related actions, including listing all categories and showing products within a selected category.

## Models
### `application_record.rb`
Acts as an abstract superclass for all models, setting the default behavior.

### `product.rb`
Represents the products with attributes and associations. It includes validations, scopes for querying, and any business logic related to products.

### `category.rb`
Represents categories, potentially including a hierarchical relationship for sub-categories, along with necessary validations and business logic.

## Views
### layouts/
Contains the template files for global application layouts.

### products/
Holds the templates for product views, such as partials for product cards and forms for searching.

### categories/
Includes the templates for category-related views, such as category lists and category-based product listings.

## Services
### `gumroad_api_service.rb`
Encapsulates the logic for communicating with the Gumroad API, abstracting the complexities of API interaction away from the model and controller layers.

## Jobs
### `gumroad_api_sync_job.rb`
Responsible for periodically synchronizing local product information with the Gumroad API, ensuring the application's data is up-to-date.

## Helpers
### `application_helper.rb`
Provides helper methods available across all views.

### `products_helper.rb`
Includes helper methods specific to product-related views, such as formatting prices or product statuses.

### `categories_helper.rb`
Contains helper methods related to category processing, like displaying category hierarchies or badges.

## Mailers
Directory for mailer classes, should the application need to send emails.

## Channels
Houses any ActionCable channel files for real-time features in the application.

## Usage
1. Controllers respond to web requests and initiate interactions with models.
2. Models handle data logic and database interactions.
3. Views render the UI, which is sent back to the client.
4. Services provide functionality that isn't specific to web requests, such as API communication.
5. Jobs handle tasks that should be run asynchronously outside of the web request-response cycle.
6. Helpers provide utility functions to assist with view rendering.
7. Mailers are used for sending emails.
8. Channels are used for real-time communication with the client.

For further details on each component, refer to the corresponding files and their inline documentation.
