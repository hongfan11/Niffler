var fs = require('fs');
import {defaultGnodeOptions, nifflerPath, logDir, getConfig, updateConfig, tempTxDir} from './config';

export function checkFirstTime(){
    console.log(nifflerPath)
    const isFirstTime = fs.existsSync(nifflerPath)?false:true
    if(isFirstTime){
        fs.mkdirSync(nifflerPath)
        fs.mkdirSync(logDir)
        fs.mkdirSync(tempTxDir)
        updateConfig({'firstTime':true})
        updateConfig({'gnode': defaultGnodeOptions})
    }
    else{
        updateConfig({'firstTime':false})
    }
}

export function isFirstTime(){
    return getConfig()['firstTime']
}

