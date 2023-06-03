
import { useState } from "react";
import { Link } from "react-router-dom";

const Create = () => {
    const [color, setColor]= useState("#1F9BF9");
    const [text, setText] = useState('');
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending]= useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const quote = { text, author, color };
        fetch('http://localhost:4000/quotes', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quote)
        }).then((res)=> {
            if (!res.ok){
                throw Error("could not post the quote due to server errors!")
            } else {
                console.log("new quote added");
                window.location.reload();
            }
        }).catch (err => {
            console.log(err.message);
        })
    }
    return (
        <div className="aroundCreate" style={{backgroundColor: color}}>
            <form onSubmit={handleSubmit}>
                <h2>ADD YOUR QUOTE</h2>
                <textarea style={{color: color}} onChange={(e)=> setText(e.target.value) } value={text} placeholder="Write the quote here" id="addText" cols="30" rows="10"></textarea>
                <input style={{color: color}} onChange={(e)=> setAuthor(e.target.value) } value={author} type="text" placeholder="Enter the author of the quote here"/>
                <div className="colorPicker">
                    <label htmlFor="">Select your preferred color here<i class="fa fa-hand-o-right"></i></label>
                    <input onChange={(e)=> setColor(e.target.value) } value={color} className="picker" type="color" />
                </div>
                <button className="btn btn-primary">Add Your Quote</button>
               <Link id="home" to="/"><i class="fa fa-hand-o-left"></i>Back to quote machine</Link> 
            </form>
        </div>
    );
}
 
export default Create;