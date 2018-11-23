


let ws = null;
function sendws(id,command,values){
    let text = `${id},${command},${typeof values != 'undefined'?values:""},`;
    console.log(text);
    ws.send(text);

}

function setws(m_ws){
    ws = m_ws;
}

function setval(input,type){
    input.parent().find('#value').text(input.val());
    sendws(input.parent().parent().attr("id"),"set",`${type},${input.val()}`);
}
function savevals(input){
    sendws(input.parent().attr("id"),"save");
}
function testvals(input){
    sendws(input.parent().attr("id"),"test");
}

function addServoControll(id,name,parent,callback){
    let servotemplate  = `<div class="servo" id="servo_${id}">
    <label class="title">${name}</label>
    <div class="slider" id="minimum">
        <label class="name">Minimum: </label><label class="value" id="value">90</label>
        <input type="range" min="0" max="180" value="90" id="slider" onchange="setval($(this),'min')">
    </div>
    <div class="slider" id="maximum">
        <label class="name">Maximum: </label><label class="value" id="value">90</label>
        <input type="range" min="0" max="180" value="90" id="slider" onchange="setval($(this),'max')">
    </div>
    <div class="slider" id="overshoot">
        <label class="name">Overshoot: </label><label class="value" id="value">0</label>
        <input type="range" min="0" max="30" value="0" id="slider" onchange="setval($(this),'off')">
    </div>
    <button onclick="savevals($(this))">Save</button>
    <button onclick="testvals($(this))">Test</button>
</div>`;
    let servo = $.parseHTML(servotemplate);
    parent.append(servo);
}