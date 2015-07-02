#!/bin/sh
echo "* check file existed" 
[ -f "injectoneline.js" ] && rm -f "injectoneline.js"
echo "* wrap in one line" 
cat inject.js | while read line ; 
do 
	echo "${line}"
	printf "${line}" >> "inject1line.js"; 
done