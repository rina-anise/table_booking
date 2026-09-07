import { BookingFormData } from "@/types/booking"

type ConfirmationScreenProps = {
    formData: BookingFormData;
    onReset: () => void;
}
export default function ConfirmationScreen({formData, onReset}: ConfirmationScreenProps) {
    return <div className="w-full max-w-md md:max-w-lg flex flex-col rounded-2xl border p-6 md:p-8 gap-y-2 text-lg text-text">
        <h1 className="text-xl md:text-2xl font-semibold text-text mb-4">Бронирование подтверждено</h1>
        <p>Имя: <span className="font-semibold">{formData.name}</span></p>
        <p>Дата: <span className="font-semibold">{new Date(formData.date).toLocaleDateString('ru-RU')}</span></p>
        <p>Время: <span className="font-semibold">{formData.time}</span></p>
        <p>Гости: <span className="font-semibold">{formData.guests}</span></p>
        <button 
        className="w-full bg-accent text-white font-medium rounded-lg py-2.5 mt-2 hover:bg-[#b3822f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        onClick={onReset}>Забронировать ещё</button>
    </div>
}