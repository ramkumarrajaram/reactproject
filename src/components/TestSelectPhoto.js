import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../styles/TestGallery.css';

class TestSelectPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSlide: 1,
            numberOfCopies: 0,
            numberOfCopies1: 0,
            numberOfCopies2: 0,
            numberOfCopies3: 0,
            numberOfCopies4: 0,
            numberOfCopies5: 0,
            max: 5
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    next = () => {
        var increased = this.state.currentSlide + 1
        if (increased > this.state.max) {
            this.setState({currentSlide: 1})
        } else {
            this.setState({currentSlide: increased})
        }
    }

    previous = () => {
        var decreased = this.state.currentSlide - 1
        if (decreased === 0) {
            this.setState({currentSlide: this.state.max})
        } else {
            this.setState({currentSlide: decreased})
        }

    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        var slide = this.state.currentSlide;
        var numberOfCopies = this.state.numberOfCopies;
        var name = "numberOfCopies" + slide;
        this.setState({[name]: numberOfCopies})
    }

    render() {
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
                             src={require('../assets/images/gallery/' + this.state.currentSlide + '.jpg')}/>

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

                <Link to ={{
                    pathname: "/order",
                    state: {
                        numberOfCopies1: this.state.numberOfCopies1,
                        numberOfCopies2: this.state.numberOfCopies2,
                        numberOfCopies3: this.state.numberOfCopies3,
                        numberOfCopies4: this.state.numberOfCopies4,
                        numberOfCopies5: this.state.numberOfCopies5
                    }
                }} className="Button" >Pay Now</Link>
            </div>
        );
    }
}

export default TestSelectPhoto;