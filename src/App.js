import './App.css'

import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { CssBaseline,ThemeProvider } from '@mui/material'
//import { theme } from './theme'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar'
import LogIn from './pages/login'
import UserDashboard from './pages/user/UserDashboard'
import UserRoute from './component/UserRoute'
import AdminRoutes from './component/AdminRoutes'
import Layout from './pages/global/Layout'
import UserJobHistory from './pages/user/UserJobHistory'
import UserInfoDashboard from './pages/user/UserInfoDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import SingleJob from './pages/SingleJob'
import DashUsers from './pages/admin/DashUsers'
import DashJobs from './pages/admin/Dashjobs'

import {createTheme} from '@mui/material/styles'
import { themeColors } from './theme'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
//HOC
const UserDashboardHOC=Layout(UserDashboard)
const UserJobHistoryHOC=Layout(UserJobHistory)
const UserInfoDashboardHOC=Layout(UserInfoDashboard)
const AdminDashboardHOC=Layout(AdminDashboard)
const DashUserHOC=Layout(DashUsers)
const DashJobsHOC=Layout(DashJobs)

const App =()=>{

    const {mode}=useSelector(state=>state.mode);
    const theme=useMemo(()=>createTheme(themeColors(mode)),[mode])

  return (
    <>


<ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />

                            <Route path="/search/category/:category" element={<Home />} />
                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            <Route path='/login' element={<LogIn />} />
                            <Route path='/job/:id' element={<SingleJob/>} />
                            <Route path='/admin/dashboard' element={<AdminRoutes><AdminDashboardHOC/></AdminRoutes>} />
                            <Route path='/admin/users' element={<AdminRoutes><DashUserHOC/></AdminRoutes>} />
                            <Route path='/admin/jobs' element={<AdminRoutes><DashJobsHOC/></AdminRoutes>} />
                            {/* <Route path='/user/dashboard' element ={<UserDashboard/>}/> */}
                            <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC/></UserRoute>} />
                            <Route path='/user/jobs' element={<UserRoute>< UserJobHistoryHOC/></UserRoute>} />
                            <Route path='/user/info' element={<UserRoute>< UserInfoDashboardHOC/></UserRoute>} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
    
    
    </>
  )

}
export default App