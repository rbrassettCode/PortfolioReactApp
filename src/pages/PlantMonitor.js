import React, {useState, useEffect} from "react";
import { API } from "aws-amplify";
import { listPlantStatuses } from "./../graphql/queries.js";
import PlantChart from "./PlantChart";
import './../Stylesheet.css';
import { Container, Row, Col} from "react-bootstrap";

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
        <Container>
            <Row>
                <h2>Plant Data</h2>
            </Row>
            <Row>
                <Col className="col-12">
                    <PlantChart data={allPlantData}/>
                </Col>

            </Row>
           
            <br/>
            <Row>
                <Col className="text-start col-12">
                    <h2>Welcome to my IoT garden project</h2>
                </Col>
                <br/>
                <Col className="text-start col-12">
                    <p>At the intersection of technology and nature, I've created a unique and innovative IoT project that brings the power of data and automation to your garden. My setup combines a Raspberry Pi, an Arduino Nano, AWS, and GraphQL to make your gardening experience smarter and more efficient.</p>
                </Col>
                <Col className="text-start col-12">
                    <h2>1. Soil Moisture Monitoring:</h2>
                </Col>
                <Col className="text-start col-12">
                    <p>I've implemented a cutting-edge soil moisture sensor using an Arduino Nano. It continuously measures the moisture levels in your garden soil to ensure your plants are getting just the right amount of water they need. </p>
               </Col>
                <Col className="text-start col-12">
                    <h2>2. Intelligent Plant Watering:</h2>
                </Col>
                <Col className="text-start col-12">
                    <p>My system doesn't just monitor soil moisture; it also controls plant watering. When the soil moisture drops below a certain threshold, my setup automatically triggers the irrigation system, ensuring your plants are consistently and adequately hydrated.</p>
                </Col>
                <Col className="text-start col-12">
                    <h2>3. AWS Database Integration:</h2>
                </Col>
                <Col className="text-start col-12">
                    <p>I use Amazon Web Services (AWS) to store and manage the data Collected from the sensors. This robust and scalable database solution keeps your garden data safe and easily accessible.</p>
                </Col>
                <Col className="text-start col-12">
                    <h2>4. Real-time Data Visualization:</h2>
                </Col>
                <Col className="text-start col-12">
                    <p>My website provides you with a real-time data visualization of your garden's soil moisture levels. You can monitor and track your garden's health from anywhere in the world.</p>
                </Col>
                <Col className="text-start col-12">
                    <h2>5. GraphQL Messaging:</h2>
                </Col>
                <Col className="text-start col-12">
                    <p>To seamlessly send and retrieve data, I've implemented GraphQL. This powerful query language allows efficient communication between your devices and the AWS database, ensuring data accuracy and speed.</p>
                    <br/>
                </Col>
            </Row>
        </Container>
    );
}

export default PlantMonitor;