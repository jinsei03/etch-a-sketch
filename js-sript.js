const container = document.querySelector("#container");
const newGrid = document.querySelector("#new");

//Creates the 16x16 grid
for(let i = 0; i < 16; i++)
{
    //creates the rows
    const i = document.createElement("div");
    i.setAttribute("style", "flex: 1; display: flex;");
    for(let j = 0; j < 16; j++)
    {
        //creates the squares
        const j = document.createElement("div");
        j.setAttribute("style", "flex: 1; border: 1px solid black;");
        i.appendChild(j);

        //colors the squares when hovered
        j.addEventListener("mouseover", () => {
            j.setAttribute("style", "flex: 1; background-color: black; border: 1px solid;");
        });
        
    }
    container.appendChild(i);
}

//creates new grid
newGrid.addEventListener("click", () => {
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
        
                j.addEventListener("mouseover", () => {
                    j.setAttribute("style", "flex: 1; background-color: black; border: 1px solid;");
                });
                
            }
            container.appendChild(i);
        }

});