// Формат данных
export interface BookingFormData {
name: string;
phone: string;
date: string;
time: string;
guests: number;
}

// Состояние формы
export type BookingStatus = 'idle' | 'loading' | 'success';

// Формат ошибки
export type BookingErrors = {
name?: string;
phone?: string;
date?: string;
time?: string;
guests?: number | string;
};

// Доступные слоты
export const TIME_SLOTS = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];