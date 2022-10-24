import {ref, computed} from 'vue';

export function useConsultation() {
    const сonsultations = ref([
        { id: 1, date: '24.01.1992', time: '20:15', symptoms: 'Головная боль, Рвота, Головокружение', patientId: '1'},
        { id: 2, date: '25.01.1992', time: '10:15', symptoms: 'Рвота, Головокружение', patientId: '2'},
        { id: 3, date: '26.01.1992', time: '12:15', symptoms: 'Головная боль', patientId: '1'},
        { id: 4, date: '22.01.1992', time: '09:15', symptoms: 'Головокружение', patientId: '4'},
        { id: 5, date: '20.01.1992', time: '11:15', symptoms: 'Головная боль, Головокружение', patientId: '2'},
        { id: 6, date: '21.01.1992', time: '13:15', symptoms: 'Боль в животе', patientId: '6'},
        { id: 7, date: '10.01.1992', time: '14:15', symptoms: 'Озноб', patientId: '5'},
        { id: 8, date: '01.01.1992', time: '15:15', symptoms: 'Головокружени, озноб', patientId: '2'},
        { id: 9, date: '02.01.1992', time: '16:15', symptoms: 'Головная боль, озноб', patientId: '3'},
        { id: 10, date: '03.01.1992', time: '17:15', symptoms: 'Головная боль, Рвота, Головокружение, озноб', patientId: '7'},
        { id: 11, date: '05.01.1992', time: '18:15', symptoms: 'Рвота, озноб', patientId: '8'},
        { id: 12, date: '15.01.1992', time: '19:15', symptoms: 'Боль в животе, озноб', patientId: '6'},
    ])

    const updateConsultations = (сonsultationNew, props) => {
        const {date, time, symptoms, patientId} = сonsultationNew
        сonsultations.value[props - 1] = {
            id: props,
            date: date,
            time: time,
            symptoms: symptoms,
            patientId: patientId
        }
    }

    const createNewConsultations = (сonsultationNew) => {
        сonsultations.value.push(сonsultationNew)
    }
   

    

    return {
        сonsultations,

        updateConsultations,
        createNewConsultations,
    }
}
