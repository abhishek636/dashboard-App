import React from "react";
import people from "../data/got.json"

class Peoples extends React.Component {
    state = {
      searchTerm: ""
    };
    handleChange = ({ target: { value } }) => {
      this.setState({ searchTerm: value });
    };
    render() {
        let allPeople = people.reduce((acc, cv) => {
            acc = acc.concat(cv.people);
            return acc;
        }, []);
  
        let filteredPeople = allPeople.filter((person) =>
            person.name.toLowerCase().includes(this.state.searchTerm)
        );
        return (
            <div className="container">
                <div className="search-box">
                    <input
                    placeholder="Search"
                    className="search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    />
                </div>
                <ul className="people">
                    {filteredPeople.map((sp) => (
                    <SinglePerson {...sp} />
                    ))}
                </ul>
            </div>
        );
    }
}
  
function SinglePerson(props) {
    return (
        <li className="people-card">
            <div className="info">
            <img className="people-image" src={props.image} alt={props.name} />
            <h2 className="people-name">{props.name}</h2>
            </div>
            <p className="people-description">{props.description}</p>
            <a className="buy-button learn" href={props.wikiLink}>Learn More!</a>
        </li>
    );
}
export default Peoples;