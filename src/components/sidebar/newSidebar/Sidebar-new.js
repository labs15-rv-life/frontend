import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import VehicleForm from '../../vehicleForm/VehicleForm.js';
import Vehicles from '../../vehicleForm/Vehicles';
import RoutingForm from '../../map/routingForm.js';
import '../sidebar.css';
import RoutingSidebar from '../sidebar-routing/sidebar-routing';
import SidebarMenu from '../SidebarMenu';

//SCSS Styles
// import './Sidebar-new.scss'

const Sidebar = (props) => {
    const [state, setState] = useState({
        vehicleForm: "off",
        routing: "on",
        vehicles: "off",
        directions: "off" //<-- for routing side bar component -Jerry
    })
    // console.log('props on Sidebar', props)

    //selects the tab when it is clicked on, deselects all others
    const buttonSelect = (event) => {
        console.log("event", event.target);
        setState({
            ...state,
            vehicleForm: "off",
            routing: "off",
            vehicles: "off",
            directions: "on",
            [event.target.id]: "on"
        })
            // if(state.directions === 'on'){
                
            //     let sidebar = document.querySelector('#overlayNav.overlay.open')
            //         sidebar.style.height = '100%'
            //         sidebar.style.margin = '0'
            //         sidebar.style.width = '375px'
        
            //     document.getElementsByClassName('dropdown dropdown btn-group')[0].style.display = 'none'
    
            //     let overlayContent = document.getElementById('overlayNav')
            //     overlayContent.style.height = '100%'
            //     overlayContent.style.margin = '0'
            //     overlayContent.style.width = '375px'
                
            //     let on = document.getElementsByClassName('on')[0]
            //     on.style.margin = '0'
            //     on.style.height = '100%'
            //     on.style.width = '375px'
        
            // } else {

            //     let sidebar = document.querySelector('#overlayNav.overlay.open')
            //         sidebar.style.height = '400px'
            //         sidebar.style.margin = '0'
            //         sidebar.style.width = '375px'
        
            //     // document.getElementsByClassName('dropdown dropdown btn-group')[0].style.display = 'block'
    
            //     let overlayContent = document.getElementById('overlayNav')
            //     overlayContent.style.height = '400px'
            //     // overlayContent.style.margin = '0'
            //     overlayContent.style.width = '375px'
    
            //     let on = document.getElementsByClassName('on')[0]
            //     on.style.height = '400px'
            //     on.style.width = '375px'

            // }

           
    }

    const selectVehicles = () => { //This have the user able to return from vehicle form to the initial form
        setState({
            ...state, 
            vehicleForm: "off",
            routing: "on",
            vehicles: "off",
            directions: "off", 
        })
    }

    const addAVehicleForm = () => { //This have the user able to go the form to add their vehicle
        setState({
            ...state,
            vehicleForm: "on",
            routing: "off",
            vehicles: "off",
            directions: "off", 
        })
        
       
        // let sidebar = document.getElementsByClassName('open')[0]
        // sidebar.style.height = '100%'
        // sidebar.style.margin = 0
        // sidebar.style.width = '375px'

        // let overlay = document.getElementsByClassName('overlay')[0]
        // overlay.style.height = '100%'
        // overlay.style.margin = 0
        // overlay.style.width = '375px'
        
        // let overlayNav = document.getElementById('overlayNav')
        // overlayNav.style.margin = 0
        // overlayNav.style.height = '100%'

        // let on = document.getElementsByClassName('on')[0]
        // on.style.margin = 0
        // on.style.height = '100%'
    } 

    return (
        <div className='mainSidebarContainer'>
            <SidebarMenu />
                <div className={`${state.routing}`}>
                    <RoutingForm
                        addAVehicleForm={addAVehicleForm}
                        state={state}
                        setState={setState}
                        buttonSelect={buttonSelect}
                        textDirections={props.textDirections}
                        toggle={props.toggle}
                        walmartSelected={props.walmartSelected}
                        campsiteSelected={props.campsiteSelected}
                        pointOfInterestDistance={props.pointOfInterestDistance}
                        loading={props.loading}
                        arcRoute={props.arcRoute}
                        onChangeHandler={props.onChangeHandler}
                        routeChangeHandler={props.routeChangeHandler}
                        start={props.start}
                        end={props.end}
                    />
                </div>

                {state.vehicles === 'on' ?  //List of vehicles
                    <Vehicles /> : null
                }

                {state.vehicleForm === 'on' ?
                    <VehicleForm 
                        selectVehicles={selectVehicles}
                        state={state} 
                        setState={setState} 
                        buttonSelect={buttonSelect} 
                    />
                    : null
                }

            {/* vv Neccesary to render routing sidebar for directions vv -Jerry */}
            {state.directions === 'on' ?
                    <RoutingSidebar
                        state={state}
                        setState={setState}
                        toggleSidebar={props.toggleSidebar}
                        textDirections={props.textDirections}
                        toggle={props.toggle}
                        walmartSelected={props.walmartSelected}
                        campsiteSelected={props.campsiteSelected}
                        pointOfInterestDistance={props.pointOfInterestDistance}
                        loading={props.loading}
                        arcRoute={props.arcRoute}
                        onChangeHandler={props.onChangeHandler}
                        routeChangeHandler={props.routeChangeHandler}
                        start={props.start}
                        end={props.end}
                    />
                    : null
            }
        </div>

    )
}



export default Sidebar;