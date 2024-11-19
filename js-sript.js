const container = document.querySelector("#container");
const newGrid = document.querySelector("#new");

//rgb function grabbed from stack overflow but I added the opacity
function rgb(opacity)
{
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    let a = opacity;
    const color = `rgba(${r},${g},${b},${a})`;
    return color;
}

//rgba
let opacity = 0.1;
const randomColor = rgb();

//Creates the 16x16 grid
for(let i = 0; i < 16; i++)
{
    //creates the rows
    const i = document.createElement("div");
    i.setAttribute("style", "flex: 1; display: flex;");

    //loops to create multiple squares
    for(let j = 0; j < 16; j++)
    {
        //creates the squares
        const j = document.createElement("div");
        j.setAttribute("style", "flex: 1; border: 1px solid black;");
        i.appendChild(j);

        
        //colors the squares when hovered
        j.addEventListener("mouseover", () => {
            j.setAttribute("style", "flex: 1; border: 1px solid;");
            j.style.backgroundColor = rgb(opacity);//rgba
            opacity += 0.1;
        }); 
    }
    container.appendChild(i);
}

//creates new grid
newGrid.addEventListener("click", () => {
    //reset opacity
    opacity = 0.1;

    //asks for size of new grid
    let size = prompt("What size would you like the new grid to be?(Max 100)", "16");
    //checks if user pressed cancel on prompt
    if(size != null)
    {
        size = parseInt(size);

        console.log(size);
        while(isNaN(size))
        {
            size = prompt("Please input a number between 0-100(Max 100)", "16");
        }
        while(size < 0 || size > 100)
        {  
            size = prompt("Please input a number between 0-100(Max 100)", "16");
        }
        //removes the old grid
        while(container.firstChild)
        {
            container.removeChild(container.lastChild);
        }
    }
    
    //creates new grid
    for(let i = 0; i < size; i++)
        {
            const i = document.createElement("div");
            i.setAttribute("style", "flex: 1; display: flex;");
            for(let j = 0; j < size; j++)
            {
                const j = document.createElement("div");
                j.setAttribute("style", "flex: 1; border: 1px solid black;");
                i.appendChild(j);
                //colors the squares when hovered
                j.addEventListener("mouseover", () => {
                    j.setAttribute("style", "flex: 1; border: 1px solid;");
                    j.style.backgroundColor = rgb(opacity);//rgba
                    opacity += 0.1;
                });
                
            }
            container.appendChild(i);
        }

});