import {
    reactive,
    computed
} from 'vue'

export function useUpdatePatient(props) {
    const form = reactive({
        name: '',
        middleName: '',
        surname: '',
        gender: '',
        snils: '',
        date: '',
    })

    const submit = () => {
        const patientNew = {
            middleName: form.middleName.trim(),
            name: form.name.trim(),
            surname: form.surname.trim(),
            date: form.date.trim(),
            gender: form.gender.trim(),
            snils: form.snils.trim(),
        }

        form.middleName = form.name = ''

        props.updatePatient(patientNew, props.patientId)
    }

    const valid = computed(() => {
        return form.middleName.trim() && form.name.trim()
    })

    return {
        form,
        submit,
        valid
    }
}