# React Developer Tools Debugging Report

## 1. Project Setup

I created a React application using Create React App.

The application contains a simple interface with:

* A user's name
* A counter
* An Increase Count button
* A Toggle Message button
* A message that can be shown or hidden

## 2. React Developer Tools

I installed the React Developer Tools browser extension and opened the application in Google Chrome.

I opened Chrome Developer Tools using:

`Ctrl + Shift + I`

Then I selected the **Components** tab.

## 3. Inspecting the Component

I selected the `<App>` component in React Developer Tools.

I inspected the component's state and found:

* `name` — stores the user's name
* `count` — stores the counter value
* `showMessage` — controls whether the message is displayed

## 4. Debugging Process

I clicked the **Increase Count** button and watched the `count` state in React Developer Tools.

The value changed correctly:

`0 → 1 → 2 → 3`

I then clicked the **Toggle Message** button and inspected the `showMessage` state.

The value changed between:

`true → false`

When the value became `false`, the message disappeared from the page.

When it became `true` again, the message appeared.

## 5. Issue Investigation

React Developer Tools was used to inspect the component state and confirm that the application was behaving as expected.

The tool made it easier to see the current state of the `<App>` component while interacting with the application.

## 6. Solution

No code changes were required because the application's state and behavior were already working correctly.

React Developer Tools was used to verify the state changes and confirm that the buttons were working properly.

## 7. Final Verification

After testing the application:

* The application loads correctly.
* The user's name displays correctly.
* The counter increases correctly.
* The message can be hidden and displayed.
* React Developer Tools correctly displays the component and its state.

The application is functioning correctly after debugging and verification.
