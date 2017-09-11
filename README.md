# See_2017_RFID_Pathways

An RFID kiosk, terminal, and admin update system to be used by the [Birch Aquarium](https://aquarium.ucsd.edu). The RFID kiosk allows users to
register their RFID tags using their name, highest education completed, email, and "professional pathway"; a "professional pathway" is the concept in which the content a user sees is based on the viewpoint of a chosen profession in regard to the theme of the exhibit that is displayed on a terminal. The terminal will be used to display personalized content based on a user's chosen "professional pathway" and theme of the exhibit. The admin update system allows Birch employees to update the media content(images and videos) that is displayed on any terminal.    

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project uses [firebase](http://firebase.google.com/) as a database and hosting platform. If you need to access our firebase, you can contact us at.
Or you can create your own firebase.

### Installing

With our application, we are using HTML, CSS, Vanilla JS, and jQuery. It doesn't need any
special installing. Once cloned, it is ready for editing or deployment.

## Deployment

To Deploy the Admin application, simply run
```
firebase deploy
```
If you want to deploy the entire application, you will need to edit the [firebase.json](firebase.json) as well as changed the file system to include
all necessary files in a public folder

To run the web application on a Raspberry Pi, first make sure you are in the "~"
directory then run  

```
./SEE_2017_RFID_Pathways/runApp.sh
```
This will launch the app in the browser (Note: this should automatically launch on the pi
  when it has internet)

## Outside Libraries Used
* Scroller
* Bootstrap
* Keyboard js


## Authors

* **Bryle Castro** - [b2castro](https://github.com/b2castro)
* **Josh Duhay** - [jeduhay](https://github.com/jeduhay)
* **Wyatt Guidry** - [jguidry](https://github.com/jguidry)
* **Samm Iwamasa** - [Sammifer](https://github.com/Sammifer)
* **Matthew Rice** - [mhrice](https://github.com/mhrice)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Birch Aquarium](https://aquarium.ucsd.edu)
* [Envision Maker Studio](http://jacobsschool.ucsd.edu/envision/index.sfe)
* Jesse DeWald
* Paul Llanura
* Daniel Yang
* Adam Johnson
* Nan Renner
* Dale Stokes

(TODO put others here)
