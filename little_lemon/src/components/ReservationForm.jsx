import React, { useState } from 'react'
import { styles } from '../constants/styles';
import Button from './Button';

const ReservationForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numGuests, setNumGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    return (
        <section className='bg-primary flex flex-row justify-center py-[100px]'>
            <form className='flex flex-col justify-center items-center p-6 bg-white rounded-[20px]'>
                <label className={styles.formLabel} htmlFor="res-date">Choose Date</label>
                <input className='border-[1px] p-2 rounded-[5px]' type="date" id="res-date"/>
                <label className={styles.formLabel} htmlFor="res-time">Choose Time</label>
                <select className='border-[1px] p-2 rounded-[5px]' id="res-time ">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label className={styles.formLabel} htmlFor="guests">Number of Guests</label>
                <input className='border-[1px] p-2 rounded-[5px] text-center' type="number" placeholder="1" min="1" max="10" id="guests"/>
                <label className={styles.formLabel} htmlFor="occasion">Occasion</label>
                <select className='border-[1px] p-2 rounded-[5px]' id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <Button style='mt-[30px]'>Confirm</Button>
            </form>
        </section>
    )
}

export default ReservationForm