import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Company from '../components/companyProfile'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

const CompanyProfiles = () => {
    const [user, setUser] = useState([
        {
            id: 1,
            name: "Gilang Rangga",
            sector: "Financial",
            image: "https://images.unsplash.com/photo-1633423010179-a9e26e1f7c8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80",
            city: "Purwokerto, Jawa Tengah",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
            email: "gilang@mail.com",
            no_telp: "0891234",
            ig : "@rangga1917",
            github: "github.com/gilang666",
            gitlap :"gilangggg",
            linkedin : "linkedin.com/gilang"
        }
    ])
    return(
        <><div><Navbar /> </div>
        <div>
            <Company companydata={user} />
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}
export default CompanyProfiles