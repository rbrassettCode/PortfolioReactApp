import React, {useState, useEffect} from "react";
import { API } from "aws-amplify";
import { listPlantStatuses } from "./../graphql/queries.js";
import PlantChart from "./PlantChart";


function PlantMonitor() {

    const [allPlantData, setDataList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await API.graphql({
                    query: listPlantStatuses
                });
                setDataList(response.data.listPlantStatuses.items);
                console.log("Data has been aquired:", response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Plant Data</h2>
            <PlantChart data={allPlantData}/>
        </div>
    );
}

export default PlantMonitor;