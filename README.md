**Gateway Service Frontend**

This is the frontend part of the Gateway Service project, which is a React web application designed to consume the Gateway Service API. The application provides a user-friendly interface to interact with the API and manage gateway information and their associated devices.

**Getting Started**

To run the frontend, ensure you have Node.js and npm (Node Package Manager) installed on your machine.

1. Clone the repository to your local machine.

2. Navigate to the `gateway-service-frontend` directory.

3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

4. After the installation is complete, start the development server with:

   ```bash
   npm start
   ```

   This will launch the frontend application, and you can access it in your browser at `http://localhost:3000`.

**Application Overview**

The frontend application offers the following features:

1. **Gateway List**: The homepage displays a list of all stored gateways with their name, serial number, and IPv4 address. Clicking on a gateway will toggle the display of its details.

2. **Gateway Details**: When clicking on a gateway from the list, the application displays detailed information about the selected gateway, including its name, serial number, IPv4 address, and a list of associated peripheral devices. You can add or remove devices associated with the gateway from this view.

3. **Add Gateway**: The application allows users to add a new gateway by providing its serial number, name, and IPv4 address. The fields are validated, and an error is displayed if any field is invalid.

4. **Add Device**: Users can add a new device to a selected gateway from the gateway details view. The device requires a unique UID, vendor name, date created, and status (online/offline). The fields are validated, and an error is displayed if any field is invalid.

5. **Remove Device**: The application provides an option to remove a device from a gateway. Users can remove a device from the gateway details view by clicking the "Remove" button associated with each device.

**Error Handling**

The application is designed to handle errors gracefully. If there is an issue with API requests (e.g., invalid data, server errors), appropriate error messages will be displayed to users, and the UI will not crash.

**Contributing**

If you wish to contribute to this project, please follow standard Git practices. Fork the repository, create a new branch for your changes, and submit a pull request to the main repository for review.

**Dependencies**

The application relies on various dependencies, including React, Axios, and other packages. You can find a list of dependencies in the `package.json` file.

**Author**

This project is maintained by lpozo1990. If you have any questions or concerns, feel free to reach out to lpozo1990@gmail.com.