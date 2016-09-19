#System Requirements:
- Latest version of node
- NPM


```
	> npm install
	> npm start
	> npm test
```

URL: localhost:8080

To mock different user, either use a cookie editor and edit the location value to be:
- ""
- "LONDON"
- "LIVERPOOL"


#Notes
The user is randomly created at the start of a session, clearing your cookies will get you a new user.
The cookies are host only, not bound to an actual session. and are not secure as this nothing else was needed for this tech test.

I wasn't sure how you wanted the confirmation page, so I made it fairly simple.
Your basket will only reset once you press the 'Accept and reset', this will not reset the user.

I used https://github.com/StephenGrider/ReduxSimpleStarter as my boiler plate.