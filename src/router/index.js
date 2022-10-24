import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import PatientTablePage from '@/pages/Patient/PatientTablePage.vue'
import PatientDataPage from '@/pages/Patient/PatientDataPage.vue'
import PatientCreatePage from '@/pages/Patient/PatientCreatePage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/patient',
    name: 'Patients',
    component: PatientTablePage
  },
  {
    path: '/patient/:id',
    name: 'patient',
    component: PatientDataPage
  },
  {
    path: '/patient/create',
    name: 'patient/create',
    component: PatientCreatePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
