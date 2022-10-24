import {
    reactive,
    computed
} from 'vue'

export function useConsultationForm(props) {
    const form = reactive({
        date: '',
        time: '',
        symptoms: '',
    })

    const submit = () => {
        const consultationNew = {
            id: Date.now().toString(),
            date: form.date.trim(),
            time: form.time.trim(),
            symptoms: form.symptoms.trim(),
            patientId: props.patientId.toString()
        }
        form.date = form.time = form.symptoms = ''
        props.consultationPicked 
            ? props.addConsultation(consultationNew, props.consultationPicked)
            : props.addConsultation(consultationNew)
    
        

    }


    return {
        form,
        submit,
    }
}