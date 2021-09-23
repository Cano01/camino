import { useHistory } from 'react-router-dom'

function Button({path, text}) {
    const history = useHistory();
    function handle(){
        if(path !== "") history.push(path);
    }
    return(
        <button onClick={handle}>
            {text}
        </button>
    );
}

function Butto1({path, text}) {
    const history = useHistory();
    function handle(){
        history.push(path);
    }
    return(
        <button onClick={handle}>
            {text}
        </button>
    );
}

export {Button, Butto1};