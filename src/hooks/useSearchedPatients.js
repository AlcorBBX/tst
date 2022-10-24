import {
    ref,
    computed
} from 'vue'

export default function useSearchedPatients(patients) {
    const searchNameQuery = ref('')
    const searchMiddleNameQuery = ref('')
    const searchSurnameQuery = ref('')
    const searchSnilsQuery = ref('')

    const searchedMiddleNamePatients = computed(() => {
        return patients.value.filter(post => post.middleName.toLowerCase().includes(searchMiddleNameQuery.value.toLowerCase()))
    })

    const searchedNamePatients = computed(() => {
        return searchedMiddleNamePatients.value.filter(post => post.name.toLowerCase().includes(searchNameQuery.value.toLowerCase()))
    })
    const searchedSurnamePatients = computed(() => {
        return searchedNamePatients.value.filter(post => post.surname.toLowerCase().includes(searchSurnameQuery.value.toLowerCase()))
    })
    const searchedSnillsPatients = computed(() => {
        return searchedSurnamePatients.value.filter(post => post.snils.toLowerCase().includes(searchSnilsQuery.value.toLowerCase()))
    })
    

    return {
        searchNameQuery,
        searchMiddleNameQuery,
        searchSurnameQuery,
        searchSnilsQuery,
        
        searchedSnillsPatients,
        searchedNamePatients
    }
};