//import { useState } from "react";
import { handleClick } from "./redux/quoSt"
import { React} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

let QuoteBox = () => {
    let { quotes, int } = useSelector((state) => state.quoter);
    const dispatch = useDispatch();
   return quotes.length>1 ? (
        <div id="theBody" style={{ backgroundColor: quotes[int].color }}>
            
            <div id="quote-box">
                <h1>QUOTES</h1>
                <div id="text">
                    <p style={{ color: quotes[int].color }} className="text-center">{quotes[int].text}</p>
                </div>
                <div className="blwText">
                    <div style={{ color: quotes[int].color }} id="author">
                        <p>"{quotes[int].author}"</p>
                    </div>
                    <a href="https://twitter.com/intent/tweet" target="blank" id="tweet-quote">
                        <span  className="fa fa-twitter-square"></span>
                    </a>
                    <Link id="create" to="/create"><i class="fa fa-plus-square"></i></Link> 
                </div>
                <button onClick={() => dispatch(handleClick(quotes))} className="btn btn-primary btn-block" id="new-quote"> New Quote</button>

            </div>
        </div>
    ): (
        
        <div id="theBody" style={{ backgroundColor: quotes[0].color }}>
            
            <div id="quote-box">
                <h1>QUOTES</h1>
                <div id="text">
                    <p style={{ color: quotes[0].color }} className="text-center">{quotes[0].text}</p>
                </div>
                <div className="blwText">
                    <div style={{ color: quotes[0].color }} id="author">
                        <p>"{quotes[0].author}"</p>
                    </div>
                    <a href="https://twitter.com/intent/tweet" target="blank" id="tweet-quote">
                        <span  className="fa fa-twitter-square"></span>
                    </a>
                    <Link id="create" to="/create"><i class="fa fa-plus-square"></i></Link> 
                </div>
                <button onClick={() => dispatch(handleClick(quotes))} className="btn btn-primary btn-block" id="new-quote"> New Quote</button>

            </div>
        </div>
    );
}

export default QuoteBox;
