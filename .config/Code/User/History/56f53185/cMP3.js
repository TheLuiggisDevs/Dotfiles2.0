var data = [
    'Programer',
    'Linux User',
    'Game desing',
    'Create systems',
    'ewe'
]

var div = document.querySelector('div')
var root = document.querySelector(':root')
var initialDataIndex = 0
var writtingTime = 50
var delayTime = 2500
var clearingTime = 15
var caretBlinking = 700

// initialize
writeText(initialDataIndex)

// write text function
function writeText(index){
    var i = 0
    var interval = setInterval(() => {
        // get firts char and inter in div and then increment index
        Section.innerHTML += data[index][i]
        if(i == data[index].length - 1){
            // if data in data[index] completed then
            // stop intreval
            // clear text after delay
            i = 0
            clearInterval(interval)
            setTimeout(clearText, delayTime)
        }else{
            i++;
        }
        // stop blinking during writting
        root.style.setProperty('--caret-display', 'inline-block')
    }, writtingTime);
    // play button press sound here if you need
    // playSound()
}

// play sound
function playSound(){
    // to play sound user neet to intract the document first
    var aud = document.createElement('audio')
    aud.src = '30_char_keyboard_sound.mp3';
    aud.play();
}

// clear text function
var dataIndex = initialDataIndex+1
function clearText(){
    var interval = setInterval(() => {
        var divData = div.innerHTML
        if(divData !== ''){
            // it will get div data and remove last char each interval
            // and again save it
            div.innerHTML = divData.substring(0, divData.length-1)
            // stop blinking during removing
            root.style.setProperty('--caret-display', 'inline-block')
        }else{
            // when all data removed
            // stop interval
            clearInterval(interval)
            // write text again with new index
            writeText(dataIndex);
            // now if all index of data is complete then restart
            // otherwise increment index
            (dataIndex == data.length-1) ? dataIndex = 0 : dataIndex++
        }
    }, clearingTime);
}

setInterval(() => {
    var prop = getComputedStyle(root).getPropertyValue('--caret-display')
    if(prop == 'none'){
        root.style.setProperty('--caret-display', 'inline-block')
    }else{
        root.style.setProperty('--caret-display', 'none')
    }
}, caretBlinking);