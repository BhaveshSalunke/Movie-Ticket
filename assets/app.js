let seatInnerHTML = '';
let row = 5;
let column = 5;
let section = 2;
let rightShift = 0;
for (let k = 0; k < section; k++) { //adding seats in sections [section0] [section1]

    if (k == 1) {
        rightShift = column; //adding leftShift when you are in second seat section
    }

    seatInnerHTML += '<div class="section-seat" id="section-'+String.fromCharCode(65+k)+'">'
    for (let j = 0; j < row; j++) { // adding seats top to bottom
        seatInnerHTML += '<div class="seat-column" id="column-'+String.fromCharCode(65+j)+'">'
        for (let i = 0; i < column; i++) { //adding seats left to right
            seatInnerHTML += '<div class="seat" id="'+String.fromCharCode(65+j)+(i+rightShift)+'"></div>'
        }
        seatInnerHTML += '</div>'
    }
    seatInnerHTML += '</div>'
}



document.getElementsByClassName('seat-container')[0].innerHTML = seatInnerHTML;

$(".seat").click(function(){
    $(this).toggleClass("selected");
});

$(".screen-time li").click(function(){
    $(".screen-time ul li").removeClass("reserved");
    $(this).toggleClass("reserved");
});
