import './App.css';
import Button from './Components/Button'
import React,{useState, useEffect} from 'react';
import ExecuteButton from './Components/ExecuteButton';
import Input from './Components/UI/Input';
import ClearButton from './Components/ClearButton.jsx';
import ResultButton from './Components/ResultButton.jsx';

import calculate from './helpers'

function App() {

    const [result, setResult] = useState('0');
    const [posts, setPosts] = useState([]);

    const [counter, setCounter] = useState(0);

    const addToResult = (value) => {
        if( counter === 0) setResult(value);
        else setResult((prev) => prev.toString()+value);
        setCounter(counter + 1);

    }
    const fullClearButton = () => {
        setCounter(0);
        setResult('0');
    }
    const clearButton = () => {
        setCounter(counter - 1)
        if (result.length === 1){
            setResult('0')
        }else{
            setResult((prev) => prev.toString().slice(0, -1))
        }
    }
    const finalResult = () => {
        setResult(calculate(result))
        setCounter(0)
    }
    const numbers = [[1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9,  '/'],
        ['.', 0, '()', '*'], ['✕', 'AC', 'x2', '=']];

    useEffect(async ()  => {
        try {
            const resultFromBack = await fetch('https://portal.lama.tomsk.ru:5000/widgets')
            const result = await resultFromBack.json()
            setPosts(result)
        } catch (error) {
            console.log('error')
        }
    }, [result])

  return (
    <div className="App">
        <div className="button-desk">

            {posts.length !==0 && posts.map(post => (
                <div key={post.id}>
                    {post.title}
                </div>
            ))}
            <div className= "row result-window">
                <Input input = {result}>234</Input>
            </div>

            {numbers.map(row => {
                return (
                    <div className="row">

                        {row.map(number => {
                            if (number === '+' || number === '-' ||  number === '/'
                                ||  number === '*') {
                                return <ExecuteButton onClick = {addToResult}>{number}</ExecuteButton>
                            }
                            else if ( number === '✕'|| number === 'AC' ){
                                return <ClearButton onClick = {() => {
                                    if (number === '✕') clearButton()
                                    else fullClearButton()
                                }
                                }>{number}</ClearButton>
                            }
                            else if (number === '='){
                                return <ResultButton onClick = {finalResult} finalResult = {result}>=</ResultButton>
                            }
                            else {
                                return <Button onClick = {addToResult}>{number}</Button>
                            }
                        })}
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default App;
