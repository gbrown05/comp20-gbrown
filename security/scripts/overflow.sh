#!/bin/sh 
i=0 
while [ $i -lt 10000 ] 
do 
curl --data '{"username":"overflowing!!!!!!!!!!!!", "score":"999999999999999999999999999999999999999999999999999999", "grid":"xxxxxxxxxxxxxxx"}' http://sleepy-atoll-6532.herokuapp.com/submit.json -verbose -H "Content-Type: application/json" 
i=$(($i+1)) 
done 