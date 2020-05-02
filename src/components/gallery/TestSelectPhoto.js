import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../../styles/TestGallery.css';

class TestSelectPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSlide: 1,
            copiesArray: [],
            numberOfCopies: 0,
            numberOfCopies1: 0,
            numberOfCopies2: 0,
            numberOfCopies3: 0,
            numberOfCopies4: 0,
            numberOfCopies5: 0,
            max: 5
        }
        //Since we use Arrow function, we are not required to bind this 
        // as arrow function will ensure this is present to the handle methods
        //this.handleOnChange = this.handleOnChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    next = () => {
        let increased = this.state.currentSlide + 1
        if (increased > this.state.max) {
            this.setState({currentSlide: 1})
        } else {
            this.setState({currentSlide: increased})
        }
    }

    previous = () => {
        let decreased = this.state.currentSlide - 1
        if (decreased === 0) {
            this.setState({currentSlide: this.state.max})
        } else {
            this.setState({currentSlide: decreased})
        }

    }

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = () => {
        let slide = this.state.currentSlide;
        let numberOfCopies = this.state.numberOfCopies;
        let copiesArray = this.state.copiesArray;
        copiesArray[slide] = numberOfCopies;
        this.setState({copiesArray: copiesArray});
    }

    render() {
        const location = {
            pathname: "/order",
            state: {
               copiesArray: this.state.copiesArray
            }
        }

        console.log("num of copies" + this.state.numberOfCopies1);

        return (
            <div className="slideshow no-select">
                <h2>Gallery</h2>
                <h3>Ref: #{this.state.currentSlide}</h3>
                <table className="Photo-table">
                    <tbody>
                    <td>
                        <div className="nav" onClick={() => this.previous()}>
                            <span>&#8678;</span>
                        </div>
                    </td>
                    <td>
                        <img alt="Phuket snap"
                             src={require('../../assets/images/gallery/' + this.state.currentSlide + '.jpg')}/>

                        <div className="TestText">
                            <input className="TestText" type="number" name="numberOfCopies"
                                   value={this.state.numberOfCopies} onChange={this.handleOnChange}/>
                        </div>
                    </td>
                    <td onClick={() => this.next()}>
                        <div className="nav d-flex" onClick={() => this.next()}>
                            <span>&#8680;</span>
                        </div>
                    </td>
                    </tbody>
                </table>

                <input className="Button Button-Margin" type="submit" value="Add to cart" onClick={this.handleSubmit}/>

                <Link to ={location} className="Button" >Pay Now</Link>
            </div>
        );
    }
}

export default TestSelectPhoto;