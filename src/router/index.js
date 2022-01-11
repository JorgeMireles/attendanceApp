import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth_login from "../views/Auth_login";
import Home_Layout from "../views/Home_Layout";
import members from "../components/members/members_control";
import attendance_control from "../components/attendance/attendance_control";
import attendance_admin from "../components/attendance/attendance_admin";
import reports from "../components/discipled/reports";
import add_discipler from "../components/discipled/add_discipler";
import add_disciples from "../components/discipled/add_disciples";
import transferDisciple from "../components/discipled/transferDisciple";
import withdrawDisciple from "../components/discipled/withdrawDisciple";
import monitoringDiscipleship from "../components/discipled/monitoringDiscipleship";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Auth_login
  },

  {
    path: '/report',
    name:'report',
    component: reports
  },

  {
    path: '/disciplers',
    name:'disciplers',
    component: add_discipler
  },

  {
    path: '/disciples',
    name:'disciples',
    component: add_disciples
  },

  {
    path: '/transferDisciple',
    name:'transferDisciple',
    component: transferDisciple
  },

  {
    path: '/withdrawDisciple',
    name:'withdrawDisciple',
    component: withdrawDisciple
  },

  {
    path: '/monitoringDiscipleship',
    name:'monitoringDiscipleship',
    component: monitoringDiscipleship
  },

  {
    path: '/app',
    name:'index',
    component:Home_Layout,
    children:[
      {
        path:'/members',
        name:'Members',
        component:members
      },
      {
        path: '/attendance_control',
        name:'Attendance_control',
        component: attendance_control
      },
      {
        path: '/attendance',
        name:'Attendance',
        component: attendance_admin
      },

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
