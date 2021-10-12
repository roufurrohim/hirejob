import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Company from "../components/companyProfile";
import Worker from "../components/Worker";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";

const Profile = () => {
  const { id } = useParams();
  // console.log(id)

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState([
    {
      id: 1,
      name: "Gilang Rangga",
      sector: "Financial",
      image:
        "https://images.unsplash.com/photo-1633423010179-a9e26e1f7c8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80",
      city: "Purwokerto, Jawa Tengah",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
      email: "gilang@mail.com",
      no_telp: "0891234",
      ig: "@rangga1917",
      github: "github.com/gilang666",
      gitlap: "gilangggg",
      linkedin: "linkedin.com/gilang",
    },
  ]);

  const data = [
    {
      id: 1,
      name: "Louis Tomlinson",
      pict: "https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      special_skill: "Web Developer",
      workplace: "freelance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
      city: "Purwakarta, Jawa Tengah",
      email: "Louistommo@gmail.com",
      ig: "@Louist91",
      github: "@Louistommo",
      gitlab: "@Louistommo91",
      skills: [
        {
          name: "Phyton",
        },
        {
          name: "Laravel",
        },
        {
          name: "Golang",
        },
        {
          name: "JavaScript",
        },
        {
          name: "PHP",
        },
        {
          name: "HTML",
        },
        {
          name: "C++",
        },
        {
          name: "Kotlin",
        },
        {
          name: "Swift",
        },
      ],
      portfolio: [
        {
          id: 1,
          name: "Reminder App",
          picture:
            "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          id: 2,
          name: "Reminder App",
          picture:
            "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          id: 3,
          name: "Reminder App",
          picture:
            "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          id: 4,
          name: "Reminder App",
          picture:
            "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          id: 5,
          name: "Reminder App",
          picture:
            "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          id: 6,
          name: "Reminder App",
          picture:
            "https://s3-alpha-sig.figma.com/img/5c71/e11f/e280c7c56c85ab391a054dfa068f74b0?Expires=1634515200&Signature=Y5ZvR2k-hSZNJLO7CZrwFkcUhjrchSO49EB0dLDBK~VWo1cojh4oADJfnmB5L7h9UD-kcK~fn39FMZ43Cw769dpfdWBVRsBdAk5J81qt-h-f3QxXMPDfZbF9A6xZzd2IDn1Z48M~W92FqsHrFnx~afpSdRdWR7zHOLDm43GIoGBdsw1OHjCPArQhVtyHiTffByoPLiWqcmWG2OKoY0lC7N2Sf1MOiGkSCT5ra4qag8f0u-oq-gKljiwWV9G6DIWqYJ5Off-SVbe0t62G~WgUhYs9TBoyyncm61mpJEVWxsw3dC~rAdRr9zQc5nKtbooEJQyGd9Uccqx9L-AT4oYNSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
      ],
      workExperience: [
        {
          id: 1,
          position: "Engineer",
          company: "Tokopedia",
          startWork: "July 2019",
          endWork: "January 2020",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
        },
        {
          id: 2,
          position: "Engineer",
          company: "Tokopedia",
          startWork: "July 2019",
          endWork: "January 2020",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
        },
      ],
    },
  ];

  const [statusBtn, setStatusBtn] = useState(false);

  const history = useHistory();
  const hire = (id) => {
    console.log(id);
    history.push("/hire");
  };

  const editProfile = (id) => {
    history.push(`/editprofile/${id}`)
  }

  const statusActive = () => {
    setStatusBtn(!statusBtn);
    console.log(statusBtn);
  };

  return (
    <div>
      <div className="navbarHome border-bottom">
        <NavbarHome />
      </div>

      <div className={id === '0' ? "d-block" : "d-none"}>
        <Company companydata={user} />
      </div>

      <div className={ id === '1' ? "d-block" : "d-none" }>
        <Worker
          workerData={data}
          portfolio={data[0].portfolio}
          toHire={hire}
          statusHandle={statusActive}
          statusBtn={statusBtn}
          status={id}
          handleEdit={editProfile}
          work={data[0].workExperience}
        />
      </div>

      <div className="h-25 footerHome">
        <FooterHome />
      </div>
    </div>
  );
};

export default Profile;
