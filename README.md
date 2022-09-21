# Space X Guided Project

## Setup
Steps to be ready for the GP today:
1. clone the repo to your machine (no need to fork, unless you want to)
1. cd to project
1. run npm install (all dependencies we need to start are there, so no need to add new dependencies)
1. run npm start to fire up project in the browser
1. Open the project in your editor


# Notes:
### End to End Tests:
- stimulates a user clicking through the site
- evaluates entire applications
- cypress

### Integration Tests:
- verify that several components work together
- evaluates application systems
- react-testing-library

### Unit Tests:
- test individual functions/components
   - testing what is ONLY in the function/component being tested
- evaluates small units of code
- jest 

Questions to ask yourself during Unit Tests:
- Does the component render by default w/o errors?
- How does the component change depending on the props passed in?
- Does the component respond to user input?
- Does the component respond to state change(s) (async calls/redux)?
- Does the component have error states?

### Mocks:
#### What are Mocks?
- fake functions
- allows us to fake function props:
   - use to pass in props of a component
   - can create own fake output
   - can monitor its use through the mock property
         const mockGetData = jest.fn()
   - allows to fake a library call


# Q+A:
There seems like there could be an inifinite amount of things you could test - how do you know what to focus on? Or when it is enough?
- You definitely could go on for a long time testing. The reccommendation is: test what is most important to the functioning of the application. What will change the most, what the user will interact the most. 
-  You should have an intuitive sense of what to test for based on the ways the application will be used. 
- What are things people expect to work on your application?



