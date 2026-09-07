import { TIME_SLOTS } from "@/types/booking";

export function validateName(value: string): string | null {
    if (value.trim().length < 2) {
        return 'Минимум 2 символа';
    } 
    return null
}

export function validatePhone(value: string): string | null {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 11 && 
    (digits[0] === '7' || digits[0] === '8')) {
        return null;
    }
    return 'Введите номер в формате "7XXXXXXXXXX"'
}

export function validateDate(value: string): string | null {
    if (!value) {
        return 'Введите дату'
    }

    const today = new Date()
    const selectedDay = new Date(value)

    // обнуляем время, чтобы сравнить дни
    today.setHours(0, 0, 0, 0);
    selectedDay.setHours(0, 0, 0, 0);

    if (today > selectedDay) {
        return 'Дата не может быть раньше сегодняшней'
    }

    return null;
}

export function validateTime(value: string): string | null {
    if (TIME_SLOTS.includes(value)) {
        return null
    }
    return 'Выберите слот'
}

export function validateGuests(value: number): string | null {
    if (value >= 1 && value <= 12) {
        return null
    }
    return 'Укажите число от 1 до 12'
}