import BookingForm from "@/components/BookingForm";
import ConfirmationScreen from "@/components/ConfirmationScreen";
import { BookingErrors, BookingFormData, BookingStatus } from "@/types/booking";
import { validateDate, validateGuests, validateName, validatePhone, validateTime } from "@/utils/validation";
import { ChangeEvent, SubmitEvent, useState } from "react";

// Константа для formData
const initialFormData: BookingFormData = {
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  }

export default function Home() {
  // Данные
  const [formData, setFormData] = useState<BookingFormData>(initialFormData)
  const [errors, setErrors] = useState<BookingErrors>();
  const [status, setStatus] = useState<BookingStatus>('idle');

  // Функция для получения данных при изменении
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const changedElement = e.target.name;
    let newValue: string | number = e.target.value;
    if (changedElement === 'guests') {
      newValue = Number(newValue)
    }
    setFormData({...formData, [changedElement]: newValue})
  }

  // Функция для проверки ошибок
  function validate() {
    const newErrors: BookingErrors = {}
    // Проверка имени
    const name = validateName(formData.name)
    if (name) { newErrors.name = name }
    // Проверка телефона
    const phone = validatePhone(formData.phone)
    if (phone) { newErrors.phone = phone }
    // Проверка даты
    const date = validateDate(formData.date)
    if (date) { newErrors.date = date }
    // Проверка слота
    const time = validateTime(formData.time)
    if (time) { newErrors.time = time }
    // Проверка гостей
    const guests = validateGuests(formData.guests)
    if (guests) { newErrors.guests = guests }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Функция для отправки формы
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const isValid = validate()
    if (isValid) {
      setStatus('loading')
      setTimeout(() => setStatus('success'), 1500)
    }
  }

  // Функция для отправки нового бронирования
  function handleReset() {
    setFormData(initialFormData)
    setStatus('idle')
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-10 md:py-16">
      {
        status !== 'success' ? <BookingForm formData={formData} errors={errors} status={status} onChange={handleChange} onSubmit={handleSubmit}/> : <ConfirmationScreen formData={formData} onReset={handleReset}/>
      }
    </div>
  );
}
