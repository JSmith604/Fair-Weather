# Fair-Weather

A full-stack web application where users can get the weather for a specific city via an API

### Date

May 4th 2021

### Location of deployed application

Try it out:
https://fair-weather-ocqsx.ondigitalocean.app/

### Time spent

About 10-12 hours

### Assumptions made

Throughout this assignment, I made several assumptions about what type of data users would like to see for their weather forecast. 

1. Users want to see the temperature in celcius. The Open Weather MAP API gives developers the option to request standard, imperial or metric units depending on how the get request is set up. I chose metric simply because it is the standard in most countries, including Canada. If I were targeting American users, imperial would likely be a more appropriate choice. 

2. Users are most interested in a description of the weather, i.e. rain, some clouds, etc. and temperature. Although I had the option to include more data from Open Weather Map, i.e. wind speed, time of sunrise, time of sunset, etc. I choose not to display most of the data to keep the UI simple. 

### Shortcuts/Compromises made

One compromise I made was with respect to responsive design. The UI has a desktop-first design, which is probably not ideal for a weather forecast app. If I had more time I would love to make the design responsive. The project looks best on a desktop, laptop, tablet or larges phones such as the Galaxy Note. On medium sized and small phones there are some obvious issues with the layout. 

### Stretch goals attempted

1. Build a simple UI for the service.
2. Deploy your API.
3. Proxy a real weather API to fetch actual weather. 

The only stretch goal I did not attempt was adding authentication to the services. This was partly due to time constraints, since it was the most time intensive of all the stretch goals. Also, I thought about it from a users point of view and did not think that it would greatly improve the users experience. 
### Instructions to run assignment locally
If applicable, please provide us with the necessary instructions to run your solution.
To Run API on Localhost 
1. Make node and npm are installed
2. Install the dev depencies:  
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "node-fetch": "^2.6.1"
4. Start the server with node express_server.js
5. To test api type http://localhost:8080/forecast?q=Vancouver,canada (insert city and country of your choice to see weather for difference places, also works if you type the city with no country)

 "axios": "^0.21.1",

### What did you not include in your solution that you want us to know about?
Were you short on time and not able to include something that you want us to know
about? Please list it here so that we know that you considered it.
### Other information about your submission that you feel it's important that we know if applicable.
### Your feedback on this technical challenge
