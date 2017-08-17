#See_2017_RFID_Pathways

TODOs::

JS:
  Test pageDefault.js and verify that it works to a local file
    (probably need to change the pathway of the offline's file)
    make sure it works on the RPi


  Finish pathway_redirect.js and test it. Possible redesign needed.
    add more security checks for the Scanned input
    figure out dynamic file query / getting extension for multimedia support

  updateData.js:
    Determine the user data/stats that Birch wants us to track and do that
      ( Visitors at a certain terminal, popular pathways, most popular terminal...)

      -Record user data
          --> add setPathway() to existing work (exhibitsplash.js I think)


  populateContent.js:
    better error message if error is catched

HTML:
  clean up all the files, comment and document.
  add better id tags, classes and that stuff

CSS:
  everything

Security:
  parse user inputs

Pi integration testing with the current system
  -make sure the offline default works / get it to work

-Come up with more, viable pathways

-Interactive design

-Think of ways to "extend the visit / stay in contact"

-Look into email option --> extending the visit
  (contingent on us storing emails)

-Research Facebook / social media sharing option
    --> Look into "login with Facebook"??


-Determine what kind of data we can/will store in database
  (Following ucsd guidelines or something)
