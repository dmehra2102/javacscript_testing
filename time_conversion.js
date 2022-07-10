function Time(millisec){
    if(millisec<60000){
        var res = Math.floor(millisec/1000);
        return `${res} Seconds`;
    }
    else if(millisec<3600000){
        var remain = millisec%60000;
        var res = Math.floor(millisec/60000);
        var sec = Math.floor(remain/1000);
        return `${res} Minutes ${sec} Seconds`
    }
    else{
        var remain = millisec%3600000;
        var secremain = (remain%60000);
        var sec = Math.floor(secremain/1000);
        var min = Math.floor(remain/60000);
        var res = Math.floor(millisec/3600000);
        return `${res} Hours ${min} Minutes ${sec} Seconds`;
    }
}


module.exports = Time;