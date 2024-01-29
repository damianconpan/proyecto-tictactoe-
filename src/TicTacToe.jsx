import React, { useRef, useState } from "react";
import './TicTacToe.css'
import circle_icon from'./circle.png'
import cross_icon from'./cross.png'


let data = [ " ", " ", " ", " ", " ", " ", " ", " ", " " ];

const Scoreboard = ({ xWins, oWins }) => {
    return (
      <div className="scoreboard">
        <p className="equis"><strong>X victorias: {xWins}</strong></p>
        <p className="circulo"><strong>O victorias: {oWins}</strong></p>
      </div>
    );
  };

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let caja1 = useRef(null);
    let caja2 = useRef(null);
    let caja3 = useRef(null);
    let caja4 = useRef(null);
    let caja5 = useRef(null);
    let caja6 = useRef(null);
    let caja7 = useRef(null);
    let caja8 = useRef(null);
    let caja9 = useRef(null);

    let [xWins, setXWins] = useState(0);
    let [oWins, setOWins] = useState(0);
  

    let caja_array = [caja1, caja2, caja3, caja4, caja5, caja6, caja7, caja8, caja9];

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count%2===0){
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num]="X";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num]="O";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==" "){
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==" "){
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==" "){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==" "){
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==" "){
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==" "){
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==" "){
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==" "){
            won(data[6])
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner==="X"){
            titleRef.current.innerHTML = `felicitaciones: <img src=${cross_icon}> ganaste`;
            setXWins(xWins + 1);
        }
        else {
            titleRef.current.innerHTML = `felicitaciones: <img src=${circle_icon}> ganaste`;
            setOWins(oWins + 1);
        }
    }

    const reset = () => {
        setLock(false);
        data = [ " ", " ", " ", " ", " ", " ", " ", " ", " " ];
        titleRef.current.innerHTML = '¡que empiece la batalla!';
        caja_array.map((e)=>{
        e.current.innerHTML = "";
        })
    } 

    return (
    <div className="container">
        <h1 className="titulo" ref={titleRef}>¡que empiece la batalla!</h1>
        <div className="board">
            <div className="row1">
                <div className="caja" ref={caja1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="caja" ref={caja2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="caja" ref={caja3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="caja" ref={caja4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="caja" ref={caja5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="caja" ref={caja6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="caja" ref={caja7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="caja" ref={caja8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="caja" ref={caja9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
         <Scoreboard xWins={xWins} oWins={oWins} />
        <button className="reset" onClick={()=>{reset()}}>reset</button>
    </div>
    )
}
export default TicTacToe