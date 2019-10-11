import React, { useEffect } from 'react'
import SmurfCard from './smurfcard'
import {fetchSmurfs} from '../actions'
import { connect } from 'react-redux'

const SmurfList = props => {
    useEffect(()=> {
        props.fetchSmurfs()
    }, [])

    if (props.isLoading) {
        return <h2>Snagging Smurfs...</h2>
    }

    return (
        <div className="card-container">
            {props.error && <p>{props.error}</p>}
            {props.smurfData.map(smurf => (
                <SmurfCard name={smurf.name} key={smurf.id} height={smurf.height} age={smurf.age} />
            ))} 
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isLoading: state.isLoading,
        error: state.error
    }
    

}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)