import { Typography, Button } from "@mui/material";
import React, { useRef } from "react";
// import EventContext from "../../Context/Event/EventContext";
import styles from "/styles/Events/Participant.module.css";

const Participants = ({ eventRegistrations, eventName }) => {
  function convertToCSV(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "";

    for (var i = 0; i < array.length; i++) {
      var line = "";
      for (var index in array[i]) {
        if (line != "") line += ",";

        line += array[i][index];
      }

      str += line + "\r\n";
    }

    return str;
  }

  function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
      items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + ".csv" || "export.csv";

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      var link = document.createElement("a");
      if (link.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilenmae);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  const print = () => {
    var formattedRes = [];
    var headers = {
      leaderID: "Leader ID".replace(/,/g, ""), // remove commas to avoid errors
      teamName: "Team Name",
      leaderName: "Leader Name",
      leaderContact: "Leader Contact",
      teamMemberIDs: "Team Member IDs",
      
    };
    if (eventRegistrations.length) {
      eventRegistrations.forEach((item) => {
        formattedRes.push({
          leaderID: item.leaderID,
          teamName: item.teamName,
          leaderName: item.leaderName,
          leaderContact: item.leaderContact,
          teamMemberIDs: item.teamMemberIDs,
          
        });
      });
    }

    var fileTitle = eventName;

    exportCSVFile(headers, formattedRes, fileTitle);
  };
  return (
    <div className={styles.plist} id="plist">
      <div className={styles.participant_top}>
        <Typography variant="h4">{eventName}</Typography>
        <Button
          // onClick={() => {
          //   // window.print();

          // }}
          onClick={print}
          variant="contained"
        >
          Print
        </Button>
      </div>

      <table border={1} frame="void" rules="rows">
        <tr>
          <th className={styles.table_header}>Team Name</th>
          {/* <th className={styles.table_header}>user email</th> */}
          {/* <th className={styles.table_header}>user Name</th> */}
          <th className={styles.table_header}>Leader Name</th>
          <th className={styles.table_header}>Leader Collge email</th>
          <th className={styles.table_header}>Leader Contact</th>
          <th className={styles.table_header}>Team</th>
        </tr>
        {eventRegistrations.length > 0 ? (
          <>
            {eventRegistrations.map((el) => (
              <tr key={el.email} style={{ border: "3px solid black" }}>
                {
                  <td className={styles.table_data}>
                    {el.teamName && el.teamName}
                  </td>
                }
                {/* <td className={styles.table_data}>{el.email}</td> */}
                {/* <td className={styles.table_data}>{el.name}</td> */}
                {
                  <td className={styles.table_data}>
                    {el.leaderName ? el.leaderName : el.name}
                  </td>
                }
                {
                  <td className={styles.table_data}>
                    {el.leaderID && el.leaderID}
                  </td>
                }
                {
                  <td className={styles.table_data}>
                    {el.leaderContact && el.leaderContact}
                  </td>
                }
                {el.teamMemberIDs &&
                  Object.keys(el.teamMemberIDs).map((oneKey, i) => {
                    return (
                      <div key={i} style={{ display: "grid", padding: "5px" }}>
                        <td>{el.teamMemberIDs[oneKey]}</td>
                      </div>
                    );
                  })}
              </tr>
            ))}
          </>
        ) : (
          <li>No Registrations</li>
        )}
      </table>
    </div>
  );
};

export default Participants;
