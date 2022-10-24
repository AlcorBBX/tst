import {
    reactive,
    computed
} from 'vue'

export function useForm(props) {
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
            id: Date.now().toString(),
            middleName: form.middleName.trim(),
            name: form.name.trim(),
            surname: form.surname.trim(),
            date: form.date.trim(),
            gender: form.gender.trim(),
            snils: form.snils.trim(),
        }

        form.middleName = form.name = form.surname =  form.date = form.snils = form.gender = ''

        props.addPatient(patientNew)
    }

    // const valid = computed(() => {
    //     return form.middleName.trim() && form.name.trim()
    // })

    const valid =  computed((gps) => {
        gps = form.snils.replace(/[^0-9]+/g, '');
        if( gps.length == 11 ) {
          var checksum = 0;
          for( var i = 0; i < 9; i++ ) {
            checksum += parseInt(gps.charAt(i)) * (9 - i);
          }
          if( checksum > 101 ) {
            checksum = checksum % 101;
          }
          if( checksum == 100 || checksum == 101 ) {
            checksum = 0;
          }
          return checksum == parseInt(gps.substr(9));
        }
        return false;
      })

    return {
        form,
        submit,
        valid
    }
}