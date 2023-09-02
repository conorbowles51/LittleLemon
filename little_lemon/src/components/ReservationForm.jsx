import React, { useEffect, useState } from 'react'
import { styles } from '../constants/styles';
import Button from './Button';

const ReservationForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numGuests, setNumGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [tableBooked, setTableBooked] = useState(false);

    useEffect(() => {}, [tableBooked]);

    const submitForm = (e) => {
        e.preventDefault();
        setTableBooked(true);
        console.log(tableBooked)
    }

    if(!tableBooked){
        return (
            <section id='reservation' className='bg-primary flex flex-row justify-center py-[100px]'>
                <form className='flex flex-col justify-center items-center p-6 bg-white rounded-[20px] ' onSubmit={submitForm}>
                    <h2 className={styles.heading2}>Reserve a Table</h2>
                    <label className={styles.formLabel} htmlFor="res-date">Choose Date</label>
                    <input className='border-[1px] p-2 rounded-[5px] w-[200px]' type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                    <label className={styles.formLabel} htmlFor="res-time">Choose Time</label>
                    <select className='border-[1px] p-2 rounded-[5px] w-[200px]' id="res-time " value={time} onChange={(e) => setTime(e.target.value) } required>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label className={styles.formLabel} htmlFor="guests">Number of Guests</label>
                    <input className='border-[1px] p-2 rounded-[5px] text-center w-[200px]' type="number" placeholder="1" min="1" max="10" id="guests"
                        value={numGuests} onChange={(e) => setNumGuests(e.target.value)} required/>
                    <label className={styles.formLabel} htmlFor="occasion">Occasion</label>
                    <select className='border-[1px] p-2 rounded-[5px] w-[200px]' id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <button type='submit' className='mt-[30px] w-[200px]'>Confirm</button>
                </form>
            </section>
        )
    }else{
        return(
            <section className='bg-primary flex flex-col items-center justify-center py-[100px] text-center'>
                <h2 className={styles.heading2}>Success!</h2>
                <p className={`${styles.paragraph} text-white`}>
                    Your reservation for {numGuests} people on {date} at {time} has been placed.<br/> You will receive an email confirmation shortly.
                </p>
            </section>
            );
    }
}

export default ReservationForm