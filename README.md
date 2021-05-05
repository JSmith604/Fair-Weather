# Fair-Weather

A full-stack web application where users can get the weather for a specific city via an API.

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

   The UI was built was React and React-Bootstrap, these frameworks made getting started fairly fast. However, finishing the UI took me more time than any other      aspect of this project. Before this project, I had limited experience with these technologies and wanted to challenge myself by learning sometime fairly new. 
   I am happy with how the general aesthetic of the app and components, however, there are some spacing and responsive design issues that I would like to change. 

2. Deploy your API.

   https://fair-weather-ocqsx.ondigitalocean.app/
   
   I decided to use the app-platform at Digital Ocean since they were offering $100 worth of free credits to new memebers. I had also heard that it was the          fastest and easiest way to deploy an app. While the process was quick, it would not be a very cost effective way to deploy without free credits. Deploying Fair 
   Weather cost $20 per month, which seems a bit steep for a project this size. I think I will move the project to Heroku or Docker in the future. 
    
5. Proxy a real weather API to fetch actual weather. 
    
   This part of the project was highly enjoyable. Open Weather Map is very user-friendly and their documentation is straightforward. Open Weather Map returns an 
   abundance of data, giving developers many choices and the option to take their projects in different directions. 

The only stretch goal I did not attempt was adding authentication to the service. This was partly due to time constraints, since it was the most time intensive of all the stretch goals. Also, I thought about it from a users point of view and did not think that it would greatly improve the users experience. 

### Instructions to run assignment locally

The API can be tested locally with or without the frontend. 

To test the API separately:

1. Clone this git repository and cd into the top level directory (Fair-Weather)
2. Make sure Node and NPM are installed 
3. Cd into the backend folder (api) and install the dependencies:
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "node-fetch": "^2.6.1"
    "cors": "^2.8.5",
4. Start the server with the command `node express_server.js`
5. To test the api type http://localhost:8080/forecast?q=Vancouver,canada in the address bar of your browser
6. Try it out with different cities by typing the city of your choice after = 
*You can type the name of the city followed by the name of the country, or just the name of the city

To run the back end and front end together:

1. Complete steps 1-4 of "To test the API separately" if you haven't already. 
2. Open another terminal and cd Fair-Weather/webb
3. Install the dependencies: 
    "axios": "^0.21.1"
4. Type `npm start`
5. Navigate to localhost:3000

### What did you not include in your solution that you want us to know about?

I think that I could have worked more on the CSS to make the UI more pleasing. Adding responsive design and changing some of the spacing would make the user experience better, particularly on mobile. I am aware of a few bugs with the UI on smaller mobile phones, such as the logo getting cut off, the logo being off centre, and unexpected white space. 

There are other ways this project could be improved such as; adding authentication, adding a database and adding additional features. However, I decided early on that these stretch goals would be outside the scope of my project and I am satisfied with that decision.  Overall, I am happy that I was able to complete the core requirement and the majority of the stretch goals. 


### Your feedback on this technical challenge

I enjoyed this challenge because it is open-ended and allows for pleanty of creativity. The challenge could work for many skill sets and levels of experience. While the core requirements only took me a couple of hours, I spent a lot of time on the stretch goals. My schedule was pretty open this weeek, so I did not mind taking more time for this challenge.  I do not think anything about this assessment needs to be changed. However, it might be difficult for someone with a very busy schedule given the potential for scope creep inherant in open-ended projects. 
