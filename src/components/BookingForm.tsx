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
        <form onSubmit={onSubmit}
        className="w-full max-w-md md:max-w-lg flex flex-col rounded-2xl border p-6 md:p-8 gap-y-2">
            <h1 className="text-2xl font-semibold text-text">Бронирование стола</h1>
            <div>
                <label htmlFor="name" className="block text-base text-text">Имя гостя*</label>
                <input type="text" name="name" id="name"
                className={`w-full border text-text rounded-lg px-3 py-1 transition-colors ${errors?.name ? `border-red-500 focus:border-red-500` : 
                    `border-gray-600 focus:outline-none focus:border-accent`}`
                }
                value={formData.name}
                onChange={onChange}
                />
                {errors?.name && <span className="text-red-500 text-sm mt-1">{errors?.name}</span>}
            </div>
            <div>
                <label htmlFor="phone" className="block text-base text-text">Телефон*</label>
                <input type="tel" name="phone" id="phone" 
                className={`w-full border text-text rounded-lg px-3 py-1 transition-colors ${errors?.phone ? `border-red-500 focus:border-red-500` : 
                    `border-gray-600 focus:outline-none focus:border-accent`}`
                }
                value={formData.phone}
                onChange={onChange}
                />
                {errors?.phone && <span className="text-red-500 text-sm mt-1">{errors?.phone}</span>}
            </div>
            <div>
                <label htmlFor="date" className="block text-base text-text">Дата*</label>
                <input type="date" name="date" id="date"
                className={`w-full border text-text rounded-lg px-3 py-1 transition-colors ${errors?.date ? `border-red-500 focus:border-red-500` : 
                    `border-gray-600 focus:outline-none focus:border-accent`}`
                }
                value={formData.date}
                onChange={onChange}
                />
                {errors?.date && <span className="text-red-500 text-sm mt-1">{errors?.date}</span>}
            </div>
            <div>
                <label htmlFor="time" className="block text-base text-text">Время*</label>
                <select name="time" id="time"
                className={`w-full border text-text rounded-lg px-3 py-1 transition-colors ${errors?.time ? `border-red-500 focus:border-red-500` : 
                    `border-gray-600 focus:outline-none focus:border-accent`}`
                }
                value={formData.time}
                onChange={onChange}
                >
                    {
                    TIME_SLOTS.map((slot) => (
                    <option key={`${slot}`} value={`${slot}`}>{slot}</option>
                ))
                }
                </select>
                {errors?.time && <span className="text-red-500 text-sm mt-1">{errors?.time}</span>}
            </div>
            <div>
                <label htmlFor="guests" className="block text-base text-text">Количество гостей*</label>
                <input type="number" name="guests" id="guests"
                className={`w-full border text-text rounded-lg px-3 py-1 transition-colors ${errors?.guests ? `border-red-500 focus:border-red-500` : 
                    `border-gray-600 focus:outline-none focus:border-accent`}`
                }
                min={1} max={12}
                value={Number(formData.guests)}
                onChange={onChange}
                />
                {errors?.guests && <span className="text-red-500 text-sm mt-1">{errors?.guests}</span>}
            </div>
            <p className="text-text text-sm mt-1">* - обязательны к заполнению</p>
            <button type="submit" disabled={status === 'loading'}
            className="w-full bg-accent text-white font-medium rounded-lg py-2.5 mt-2 hover:bg-[#b3822f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                {status === 'loading' ? 'Бронирую...' : 'Забронировать'}
            </button>
            
        </form>
    )
}