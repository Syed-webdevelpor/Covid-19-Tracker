import React, { useState, useEffect} from 'react';
import { Bar, Line } from 'react-chartjs-2'; 
import { Chart as ChartJS } from 'chart.js/auto'
import { fetchdailyData } from '../api/api';
import './chart.css'
export const Charts = ({data:{confirmed,recovered,deaths}, country}) => {
    const [dailyData, setdailyData] = useState([]);
    useEffect(() => {
        const fetchApi = async()=>{
            setdailyData(await fetchdailyData())
        }
        fetchApi();
    },[]);
    const lineChart = (
        dailyData.length 
       ? (
           <Line
           data ={
               {
                   labels : dailyData.map(({date})=>date),
                   datasets : [{
                       data : dailyData.map(({confirmed})=> confirmed),
                       label : 'Infected',
                       borderColor : '#3333ff',
                       fill :'true'
                   },
                {
                    data : dailyData.map(({deaths})=> deaths),
                       label : 'deaths',
                       borderColor : 'red',
                       backgroundColor :' rgba (250,0,0,0.5)',
                       fill :'true'
                }]
               }
           }
           />) : null
           )
           const barChart = (
               confirmed
               ?(
                   <Bar
                   data = {{
                       labels : ['infected','confirmed','deaths'],
                       datasets : [{
                           label : 'people',
                           backgroundColor : ['blue' , 'green' ,' red'],
                           data : [confirmed.value , recovered.value , deaths.value]
                       }]
                   }}
                   options={{
                       legend: {display : false },
                       title : { display : true, text : `current state in ${country}`}
                   }}
                   />
               ) : null
           )
    return (
        <div className= 'container'>
         {country ? barChart : lineChart}
        </div>
    )
}
