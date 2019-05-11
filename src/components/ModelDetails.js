import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './ModelDetails.css'

export default class ModelDetails extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string,
        year: PropTypes.number,
        origin: PropTypes.string
    }

    render() {
        return (
            <div className="ModelDetails">
                <ul>
                    <li>Name: {this.props.name}</li>
                    <li>Manufacturer: {this.props.manufacturer}</li>
                    <li>Year: {this.props.year}</li>
                    <li>Origin: {this.props.origin}</li>
                </ul>
            </div>
        )
    }
}