import {ref, computed} from 'vue';

export function usePatients(patientId) {
    const patients = ref([
        { id: 1, middleName: 'Иванов', name: 'Иван', surname: 'Иванович', date: '24.01.1992', gender: 'муж', snils: '3545345' },
        { id: 2, middleName: 'Олегов', name: 'Олег', surname: 'Олегович', date: '24.01.1992', gender: 'муж', snils: '3545345' },
        { id: 3, middleName: 'Иванов', name: 'Наруто', surname: 'Евгеньевич', date: '24.01.1992', gender: 'муж', snils: '3545345' },
        { id: 4, middleName: 'Зайцев', name: 'Оптимус', surname: 'Генадьевич', date: '24.01.1992', gender: 'муж', snils: '3545345' },
        { id: 5, middleName: 'Фантазиязакончилов', name: 'Сосиска', surname: 'Ктототамович', date: '24.01.1992', gender: 'муж', snils: '3545345' },
        { id: 6, middleName: 'Шилов', name: 'Евгений', surname: 'Очествович', date: '24.01.1992', gender: 'муж', snils: '3545345' },
        { id: 7, middleName: 'Ножков', name: 'Даниил', surname: 'Владимирович', date: '24.01.1992', gender: 'муж', snils: '3545345' },
        { id: 8, middleName: 'Стулкова', name: 'Елена', surname: 'Вилковичевна', date: '24.01.1992', gender: 'муж', snils: '3545345' },
        { id: 9, middleName: 'Стулкова', name: 'Елена', surname: 'Вилковичевна', date: '24.01.1992', gender: 'муж', snils: '2321434' },
        { id: 10, middleName: 'Стулкова', name: 'Елена', surname: 'Вилковичевна', date: '24.01.1992', gender: 'муж', snils: '867453' },
    ])
    const updatePatient = (patientNew, patientId) => {
        const {middleName, name, surname, date, gender, snils} = patientNew
        patients.value[patientId - 1] = {
            id: patientId,
            middleName: middleName,
            name: name,
            surname:surname,
            date:date,
            gender:gender,
            snils:snils
        }
    }

    const createNewPatient = (patientNew) => {
        patients.value.push(patientNew)
    }

    const removePatient = (id) => {
        patients.value = patients.value.filter(p => p.id !== id)
      }
    

    return {
        patients,
        updatePatient,
        createNewPatient,
        removePatient
    }
}
