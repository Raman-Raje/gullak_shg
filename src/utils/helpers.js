export const preventDefault = () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', e => e.preventDefault());
    });
    document.querySelectorAll('a[href="#"]').forEach(a => {
        a.addEventListener('click', e => e.preventDefault());
    });
}

export function generateAlphabet() {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}

export const createMongoQuery = (search, category, doctor) => {
    const query = {};

    if (search) {
        query.$or = [
            { fullName: new RegExp(search, 'i') },
            { doctor: new RegExp(search, 'i') },
            { appointmentType: new RegExp(search, 'i') }
        ];
    }

    if (category && category.value !== 'all') {
        query.appointmentStatus = category.value;
    }

    if (doctor && doctor.value !== 'all') {
        query.doctor = doctor.value;
    }

    return query;
};