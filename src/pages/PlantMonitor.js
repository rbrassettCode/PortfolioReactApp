import React, {useState, useEffect} from "react";
import { API } from "aws-amplify";
import { listPlantStatuses } from "./../graphql/queries.js";
import PlantChart from "./PlantChart";
import './../Stylesheet.css';

function PlantMonitor() {

    const [allPlantData, setDataList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await API.graphql({
                    query: listPlantStatuses
                });
                
                setDataList(sortList(response.data.listPlantStatuses.items));
                console.log("Data has been aquired:", response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
    
    function sortList(list) {
        list.sort((a, b) => {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
        return list;
    }
    return (
        <div>
            <h2>Plant Data</h2>
            <div className="plant-monitor">
                <PlantChart data={allPlantData}/>
            </div>
            <br/>
            <div className="plant-text-box ">
                <h2>Welcome to my IoT garden project</h2>
                <br/>
                <div className="plant-text">
                    At the intersection of technology and nature, I've created a unique and innovative IoT project that brings the power of data and automation to your garden. My setup combines a Raspberry Pi, an Arduino Nano, AWS, and GraphQL to make your gardening experience smarter and more efficient.
                </div>
                <div className="plant-title">
                    1. Soil Moisture Monitoring:
                </div>
                <div className="plant-text">
                    I've implemented a cutting-edge soil moisture sensor using an Arduino Nano. It continuously measures the moisture levels in your garden soil to ensure your plants are getting just the right amount of water they need. 
                </div>
                <div className="plant-title">
                    2. Intelligent Plant Watering:
                </div>
                <div className="plant-text">
                    My system doesn't just monitor soil moisture; it also controls plant watering. When the soil moisture drops below a certain threshold, my setup automatically triggers the irrigation system, ensuring your plants are consistently and adequately hydrated.
                </div>
                <div className="plant-title">
                    3. AWS Database Integration:
                </div>
                <div className="plant-text">
                    I use Amazon Web Services (AWS) to store and manage the data collected from the sensors. This robust and scalable database solution keeps your garden data safe and easily accessible.
                </div>
                <div className="plant-title">
                    4. Real-time Data Visualization:
                </div>
                <div className="plant-text">
                    My website provides you with a real-time data visualization of your garden's soil moisture levels. You can monitor and track your garden's health from anywhere in the world.
                </div>
                <div className="plant-title">
                    5. GraphQL Messaging:
                </div>
                <div className="plant-text">
                    To seamlessly send and retrieve data, I've implemented GraphQL. This powerful query language allows efficient communication between your devices and the AWS database, ensuring data accuracy and speed.
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default PlantMonitor;