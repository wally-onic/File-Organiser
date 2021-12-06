
const fs=require('fs');
const path=require('path');function helpFn(){
    
    console.log(`List of all the commands:
                1) Tree     =Node FO.js tree <dirName>
                2) Organise =Node FO.js organise <dirName>
                3) Help     =Node FO.js help `)
                
}

module.exports={
    helpFnKey: helpFn
}