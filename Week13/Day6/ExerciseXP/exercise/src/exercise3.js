import './Exercise.css'

/*
Exercise 3 : HTML Tags in React
Instructions
PART I:

In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
create a <h1> tag and set its color to red, and the background color to lightblue.
create a paragraph, a link, a form, an image and a list.
Import Exercise component to the App.js file and display it.*/

// const Exercise = ()=>{
//     <h1></h1>
//     <p></p>

// }

const Exercise = (props)=>{
    //Part1

    // return(
    //     <>
    //     <h1 style={{color:"red", backgroundColor:"blue"}}>Header</h1>
    //     <p>this is a paragraph</p>
    //     <a href="https://www.google.com/">to google</a>
    //     <form>
    //         <input type="text"></input>
    //         <button>Submit</button>
    //     </form>
    //     <img src="https://robohash.org/1?size=150x150"></img>
    //     </>
    // )

    //Part2

    // const style_header = {
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arial"
    //   };


    // return(
    //     <>
    //     <h1 style={style_header}>Header</h1>
    //     <p>this is a paragraph</p>
    //     <a href="https://www.google.com/">to google</a>
    //     <form>
    //         <input type="text"></input>
    //         <button>Submit</button>
    //     </form>
    //     <img src="https://robohash.org/1?size=150x150"></img>
    //     </>
    // )

    //Part3
    return(
        <>
        <h1 className='para'>Header</h1>
        <p>this is a paragraph</p>
        <a href="https://www.google.com/">to google</a>
        <form>
            <input type="text"></input>
            <button>Submit</button>
        </form>
        <img src="https://robohash.org/1?size=150x150"></img>
        </>
    )
}

export default Exercise;