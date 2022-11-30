import React, { useState } from "react";

//Form validation
import './userdatastyle.css';

export const Userdata = () => {

    fetch('https://sheet.best/api/sheets/4c0c457a-ea97-4ac5-a409-3b1e779e95c8')
    .then(response => response.json())
    .then(data => {

        console.log(data) 

    if(data.length>0){
        var temp = "";
        var data1 = data.reverse()
        data1.forEach((u)=>{
                temp += "<tr>"
                temp += "<td>" + u.name + "</td>"
                temp += "<td>" + u.email + "</td>"
                temp += "<td>" + u.password + "</td>"
                temp += "<td>" + u.mobile + "</td></tr>"
        })
        document.getElementById("data").innerHTML = temp;
    }
    });

    return (
        <div className="form">
            <form id="userform" className="login-form" >
            {/* handleSubmit(required) */}

                <div id="content">
                    <h1>User Data</h1>
                    <center>
                        <table border={1}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Mobile</th>
                            </tr>

                        <tbody id="data">
        
        
                        </tbody>
                        </table>    
                    </center>
                </div>
            </form>
        </div>
    )
}