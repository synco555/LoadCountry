LOADCHALLENGE

Here's a sum up of the code and functions:

App.js - Responsible for the main routing and main props connector for all components, most importantly I had to change the useeffet I was using for the All countries Data Get.  

header.js - Header from the page, title and responsibvle for the light mode/ dark mode color change (imported to App to have the header always present)

home.js - responsible for the regions dropdown selection and filter from the region selected from the original countrydata (Dropdown from Prime React, needed to push props to dropdown.js), Search bar call and push the fetch and inputchange to the searchbar.js where InputText (from Prime React) is ready to receive both functions (Use enter to search a country). Finally it has the first Card, on a display grid that passes all countrydata (countrycard.js), when used and consumed by the fetchdata it will only get the info from the user input not from all countries. Useeffect only works on home.

countrydata.js - map to iterate over the countrydata prop to have all data and all countries, introduction of Link to detail page thats is obtained by using the fifa code since i used react routing from app i can make a simple call (advice read carefully the json provided by the api)

detailcountry - composed by back button where i used navigate from react router (-1 to bring the last page), DetailCountryCard and BorderCountryCard, here i narrowed the countrydata to selected country, using find since i used fifa code as an URL param i could use for comparison with the selectedcountry. If it finds the country it will pull up the selected country data and then came the borders. 
Borders aren't working as i wanted the fact i had no id and through some console logs i could see that Fifa code from portugal (POR) for example was diferent from the border code from Spain (PRT) so in some cases you might find some undefined countries borders and they can even appear with no detailed data if they have no fifa code. So as you can Fifa code was my trick but i had no time to explore it well...
For dark and light mode you'll nottice 2 roots weith diferent values on a 4 color for 4 types of elements (componentes.css).

Well I had a lot of fun with the challenge I know it's not perfect but since I'm working 8hours a day it's a bit hard to get through all the console logs and debugging to get it just right. I hope you like. Before you ask why the screen is divided on the details page by half, it is ready for google maps view since i had maps info it would be a nice extra, maybe I will finish it later in the weekend. 

Thank you for the challenge one more time (fingers crossed).

Rodolfo Santos 








### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
