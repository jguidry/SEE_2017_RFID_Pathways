#!/bin/bash

# Runs website in kiosk mode

while true;
do

wget -q --tries=10 --timeout=20 --spider http://google.com

if [[ $? -eq 0 ]];
#then chromium-browser --kiosk --incognito https://birchaquarium-fd036.firebaseapp.com
then 
#chromium-browser --kiosk --incognito file:///home/pi/SEE_2017_RFID_Pathways/Terminal/terminal-home.html &
chromium-browser --incognito file:///home/pi/SEE_2017_RFID_Pathways/Terminal/terminal-home.html &
break
fi
done 


