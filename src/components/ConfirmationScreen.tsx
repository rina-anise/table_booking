import { BookingFormData } from "@/types/booking"

type ConfirmationScreenProps = {
    formData: BookingFormData;
    onReset: () => void;
}
export default function ConfirmationScreen({formData, onReset}: ConfirmationScreenProps) {
    return <>
        <h2>Бронирование подтверждено</h2>
        <p>Имя: {formData.name}</p>
        <p>Дата: {new Date(formData.date).toLocaleDateString('ru-RU')}</p>
        <p>Время: {formData.time}</p>
        <p>Гости: {formData.guests}</p>
        <button onClick={onReset}>Забронировать ещё</button>
    </>
}