const main = document.querySelector(".main");
const btn = document.querySelector("#clear");

btn.onclick = () => {
    let rowRemove = document.querySelectorAll(".row");
    //for each row removes one child from main (so all the rows)
    rowRemove.forEach(child=>{main.removeChild(child)});
    let size = prompt("How big do you want your drawing board to be? Max size is 100!");
    if (size<=100 && size>0){
        generate(size);
    }
    else{
        alert("Error, please try again with a full number");
    }
}

const i = 32;

function generate (squareRowsAndColumns) {
    for (let y=0; y<squareRowsAndColumns; y++) {
        const row = document.createElement("div");
        main.appendChild(row);
        row.setAttribute("class", "row");

        for (let x=0; x<squareRowsAndColumns; x++) {
            const square = document.createElement("div");
            row.appendChild(square);
            square.setAttribute("class", "square");
           
            square.addEventListener('mouseout', () => {
                square.setAttribute('id', "black")
            });
        }    
    }
    const rowsHelperFunction = document.getElementsByClassName("row");
        const amount = 1/(rowsHelperFunction.length) * 940;

    const squareChange = document.getElementsByClassName("square");
    Array.from(rowsHelperFunction).forEach(el => 
        el.style.height = amount + "px");
    Array.from(squareChange).forEach(el =>
        el.style.width = amount + "px");
    
}
generate(i);