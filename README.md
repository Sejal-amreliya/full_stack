# User Management App

## Overview
This project is a user management application built with Angular. It includes a form to input user details, a table to display the list of users, and features to generate, download, and view PDF documents containing the user data.

## Features
- Add user details through a form
- Display user details in a table
- Edit and delete user details
- Generate PDF document of the table data
- Download and view the generated PDF

## Installation

1. Clone the repository
    ```sh
    git clone <repository_url>
    cd UserManagementApp
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Run the application
    ```sh
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`

## Additional Libraries Used
- `jspdf`: To generate PDF documents
- `jspdf-autotable`: To create tables in PDF documents

## Usage
1. Fill in the user details in the form and submit.
2. The submitted details will appear in the table.
3. Use the 'Generate PDF' button to create a PDF of the table data.
4. Use the 'Download PDF' button to download the generated PDF.
5. View the PDF within the application using the PDF viewer component.

## Notes
- The project assumes basic knowledge of Angular and TypeScript.
- Feel free to modify the components as needed for your use case.

## Contributing
If you wish to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## License
This project is licensed under the MIT License.
