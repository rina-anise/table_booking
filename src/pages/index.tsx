import BookingForm from "@/components/BookingForm";
import { BookingErrors, BookingFormData, BookingStatus } from "@/types/booking";
import { validateDate, validateGuests, validateName, validatePhone, validateTime } from "@/utils/validation";
import { ChangeEvent, SubmitEvent, useState } from "react";

export default function Home() {
  // Данные
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  })
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

  return (
    <div>
      {/* {
        status !== 'success' ? <BookingForm /> : <ConfirmationScreen />
      } */}
      <BookingForm formData={formData} errors={errors} status={status} onChange={handleChange} onSubmit={handleSubmit}/>
    </div>
  );
}
