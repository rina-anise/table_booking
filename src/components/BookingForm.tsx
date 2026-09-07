import { BookingErrors, BookingFormData, BookingStatus, TIME_SLOTS } from "@/types/booking"
import { ChangeEvent, SubmitEvent } from "react";


type BookingFormProps = {
    formData: BookingFormData;
    errors?: BookingErrors;
    status: BookingStatus;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
}

export default function BookingForm({formData, errors, status, onChange, onSubmit}: BookingFormProps) {
    return (
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="name">Имя гостя</label>
                <input type="text" name="name" id="name"
                value={formData.name}
                onChange={onChange}
                />
                {errors?.name && <p>{errors?.name}</p>}
            </p>
            <p>
                <label htmlFor="phone">Телефон</label>
                <input type="tel" name="phone" id="phone" 
                value={formData.phone}
                onChange={onChange}
                />
                {errors?.phone && <p>{errors?.phone}</p>}
            </p>
            <p>
                <label htmlFor="date">Дата</label>
                <input type="date" name="date" id="date"
                value={formData.date}
                onChange={onChange}
                />
                {errors?.date && <p>{errors?.date}</p>}
            </p>
            <p>
                <label htmlFor="time">Время</label>
                <select name="time" id="time"
                value={formData.time}
                onChange={onChange}
                >
                    {
                    TIME_SLOTS.map((slot) => (
                    <option key={`${slot}`} value={`${slot}`}>{slot}</option>
                ))
                }
                </select>
                {errors?.time && <p>{errors?.time}</p>}
            </p>
            <p>
                <label htmlFor="guests">Гости</label>
                <input type="number" name="guests" id="guests"
                min={1} max={12}
                value={Number(formData.guests)}
                onChange={onChange}
                />
                {errors?.guests && <p>{errors?.guests}</p>}
            </p>
            <button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Бронирую...' : 'Забронировать'}
            </button>
        </form>
    )
}