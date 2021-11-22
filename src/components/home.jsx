import React, { useEffect, useState } from "react";
import Card from "./Card";


function Home(){
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try{
            const res = await fetch("https://data.covid19india.org/data.json");
            //console.log(data);
            const actualData = await res.json();
            console.log(actualData.statewise[4]);
            setData(actualData.statewise[4]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();
    });// eslint-disable-next-line

    return(
        <div>
            <h3>🔴Live</h3>
            <h1>Covid-19 Tracker (Assam)</h1>
            <div className="all-cards">
                <Card 
                    class="confirmed"
                    head="Confirmed"
                    value={data.confirmed}
                />
                <Card 
                    class="active"
                    head="Active"
                    value={data.active}
                />
                <Card 
                    class="recovered"
                    head="Recovered"
                    value={data.recovered}
                />
                <Card 
                    class="deceased"
                    head="Deceased"
                    value={data.deaths}
                />
                <Card 
                    class="confirmed"
                    head="Delta Confirmed"
                    value={data.deltaconfirmed}
                />
                <Card 
                    class="recovered"
                    head="Delta Recovered"
                    value={data.deltarecovered}
                />
                <Card 
                    class="deceased"
                    head="Delta Deceased"
                    value={data.deltadeaths}
                />
                <Card 
                    class="migrated"
                    head="Migrated"
                    value={data.migratedother}
                />
            </div>
            <p>Last Updated: {data.lastupdatedtime}</p>
        </div>
    );
}

export default Home;