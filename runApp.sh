#!/bin/bash

# Runs website in kiosk mode

while true;
do

# Pings google.com to test internet
wget -q --tries=10 --timeout=20 --spider http://google.com

# If there is internet, load web app index and continue running
if [[ $? -eq 0 ]];
then
chromium-browser --incognito file:///home/pi/SEE_2017_RFID_Pathways/Terminal/index.html &
break
fi
done
