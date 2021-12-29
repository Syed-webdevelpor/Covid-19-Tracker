import React from 'react'
import {Card , CardContent , Grid , Typography } from '@material-ui/core'
import './cards.css';
import CountUp from 'react-countup';
export const Cards = ( {data: {confirmed,recovered,deaths,lastUpdate}}) => {
   if(!confirmed){
       return 'loading...'
   }
    return (
        <div>
            <div >
          <Grid container spacing = {3} justify = 'center'>
              <Grid item component = {Card} className = 'infect'>
                      <CardContent>
                          <Typography color = 'textSecondary' gutterBottom >Infected</Typography>
                          <Typography variant='h5' > <CountUp start ={0} end ={confirmed.value} duration = '2.5' /></Typography>
                          <Typography color = 'textSecondary' > {new Date(lastUpdate).toDateString()}</Typography>
                          <Typography variant = 'body2' >Number of active cases of covid-19</Typography>
                      </CardContent>
              </Grid>
          
              <Grid item component = {Card}  className = 'recover'>
                      <CardContent>
                          <Typography color = 'textSecondary' gutterBottom> Recovered</Typography>
                          <Typography variant='h5' > <CountUp start ={0} end ={recovered.value} duration = '2.5'/> </Typography>
                          <Typography color = 'textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                          <Typography variant = 'body2' >Number of recoveries from covid-19</Typography>
                      </CardContent>
              </Grid>
    
          
              <Grid item component = {Card}  className = 'deaths'>
                      <CardContent>
                          <Typography color = 'textSecondary' gutterBottom>Deaths</Typography>
                          <Typography variant='h5' ><CountUp start ={0} end ={deaths.value} duration = '2.5' /> </Typography>
                          <Typography color = 'textSecondary' > {new Date(lastUpdate).toDateString()}</Typography>
                          <Typography variant = 'body2' >Number of Deaths by covid-19</Typography>
                      </CardContent>
              </Grid>
          </Grid>
            </div>
          
        </div>
    )
}
