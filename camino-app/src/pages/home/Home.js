import React, {Component} from "react";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            item: {}
        };
    }


    componentDidMount(){
        fetch("https://api.magicthegathering.io/v1/cards/1")
        .then(res => res.json())
        .then(
            (result) => {
                console.log("hola")
                console.log(result.card.name)
                console.log(Array.isArray(result.card))
                this.setState({
                    isLoaded: true,
                    item: result.card
                });
            },
            //catch errors here
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items, item } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
        return (
            <ul>
            {
                
                    <li >
                        {item.name}
                        <img src={item.imageUrl} />
                    </li>
                
            }
            </ul>
        );
        }
    }
};

export default Home;