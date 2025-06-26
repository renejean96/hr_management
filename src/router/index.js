import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import SignupView from '../views/Signup.vue'
import HomeView from '../views/Home.vue'
import CandidateView from '../views/Candidate.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/signup', name: 'Signup', component: SignupView },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/candidate', name: 'Candidate', component: CandidateView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 