const main = document.querySelector(".main");

// const row = document.createElement("div");
// main.appendChild(row);
// const square = document.createElement("div");
// row.appendChild(square);

// row.setAttribute("class", "row");
// square.setAttribute("class", "square");

const i = 100;

function generate (squareRowsAndColumns) {
    for (let y=0; y<=squareRowsAndColumns; y++) {
        const row = document.createElement("div");
        main.appendChild(row);
        row.setAttribute("id", "row");

        for (let x=0; x<=squareRowsAndColumns; x++) {
            const square = document.createElement("div");
            row.appendChild(square);
            square.setAttribute("id", "square");
            square.addEventListener('mouseout', () => {
                square.setAttribute('class', "black")
                // alert(square.class);
            });
        }
    }
}
generate(i);

// const element = document.getElementsByClassName("square");
// console.log(element);
// element.onhover = changeColor(element);
function changeColor(self) {
// var black = '#000000'
    self.style.backgroundColor = "black";
};

//edit padding depending on website lenght: website lenght *0,8/ squares

