import React from "react";

const App = () => {
    return (
        <>
            <div className="container">
                <div className="contact-box">
                    <div className="contact-left">
                        <h3>Connect With Us</h3>
                    </div>
                    <div className="contact-right">
                        <h3>Reach Us</h3>
                        <table>
                            {/* <tr className="data1">
                                <td>Email</td>
                                <td>timnitevent@gmail.com</td>
                            </tr> */}
                            <tr className="data2">
                                <td>Phone</td>
                                <td>+91 9555517577</td>
                                <br />
                                <td>+91 8529724671</td>
                            </tr>
                            <tr className="data3">
                                <td>Adress</td>
                                <td>
                                    MNIT JAIPUR CAMPUS
                                    <br />
                                    MALVIYA NAGAR
                                    <br />
                                    JAIPUR,INDIA 302017{" "}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
