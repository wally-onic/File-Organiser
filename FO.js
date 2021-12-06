const helpObject=require('./commands/help')
const treeObject=require('./commands/tree');
const organizeObject=require('./commands/organize')

// to get 'organise' and 
//'path of our target folder' in an array
let inputArr=process.argv.slice(2);

//get our command which is 'organise'
let command=inputArr[0];

switch(command){
    case 'tree':
        treeObject.treeFnKey(inputArr[1])
    break;
    
    case 'organise':
        organizeObject.organizeKey(inputArr[1])    
    break;
        
    case 'help':
        helpObject.helpFnKey()

    break;

    default:
        console.log('Wrong Command...Please enter a valid command')
    
}    







