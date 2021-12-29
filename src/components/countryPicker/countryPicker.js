import React , {useState , useEffect} from 'react';
import { NativeSelect , FormControl } from '@material-ui/core';
import { fetchCountries } from '../api/api';
export const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async()=>{
            setFetchedCountries(await fetchCountries())
        }
        fetchApi();
    }, [setFetchedCountries])
    return (
        <div>
            <FormControl className = 'formControl'>
                <NativeSelect className='select' defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                    <option value = ''>Globel</option>
                    {fetchedCountries.map((country,i )=> <option key = {i} value = {country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
