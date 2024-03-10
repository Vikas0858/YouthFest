import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";
import useToast from "/Hooks/useToast";
import { initializeRazorpay } from "../helper/paymentHelper";
import LoaderContext from "./LoaderContext";
const axios = require("axios");

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const { currentUser, isAdmin } = useAuth();
  const [allEvents, setAllEvents] = useState([]);
  const [myCoins, setMyCoins] = useState();
  const notify = useToast();

  const fetchAllEvents = async () => {
    // setIsLoading(true);
    const res = await fetch("/api/getAllEvents", {
      method: "GET",
      // headers: {
      //   Authorization: currentUser.accessToken,
      // },
    });
    const resjson = await res.json();
    // console.log("fetch success", resjson);
    setAllEvents(resjson.events);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);
  };

  const fetchEventById = async (eventId) => {
    // setIsLoading(true);
    const res = await fetch("/api/getEvent", {
      method: "POST",
      headers: {
        Authorization: currentUser.accessToken,
      },
      body: JSON.stringify({
        email: currentUser.email,
        eventID: eventId,
      }),
    });
    const resjson = await res.json();

    let events = allEvents.map((event) => {
      if (event.eventID === eventId) {
        return { ...event, registrations: resjson.message.registrations };
        // event.registrations = resjson.registrations;
      }
      return event;
    });

    setAllEvents(events);

    // setIsLoading(false);
  };

  const fetchMyCoins = async () => {
    const res = await fetch("/api/getCoins", {
      method: "POST",
      body: JSON.stringify({
        email: currentUser.email,
      }),
      headers: {
        Authorization: currentUser.accessToken,
      },
    });
    const resjson = await res.json();
    if (resjson.status === "success") {
      setMyCoins(resjson.message);
    }
  };

  const makePayment = async (amount, email, username, callback) => {
    const res = await initializeRazorpay();

    if (!res) {
      notify("error", "Razorpay SDK Failed to load");
      return;
    }
    const response = await fetch("/api/razorPay", {
      method: "POST",
      body: JSON.stringify({
        email: currentUser.email,
        amount: amount,
      }),
    });
    const data = await response.json();
    console.log(`helper` + process.env.RAZORPAY_KEY);
    var options = {
      key: process.env.RAZORPAY_KEY,
      name: "YouthfestMnit",
      currency: data.currency,
      amount: parseInt(data.amount),
      order_id: data.id,
      description: "Thankyou for buying credits",
      // image: "",
      handler: async function (response) {
        const razorData = {
          orderCreationId: data.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await fetch("/api/paymentSuccess", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(razorData),
        });

        const res = await result.json();
        // console.log(res);
        if (res.status === "success") {
          notify("success", res.message);
          await callback();
        } else {
          notify("error", res.error);
        }
      },
      prefill: {
        name: username,
        email: email,
        // contact: "9999999999",
      },
      theme: {
        color: "#61dafb",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const registerInEvent = async (eventID, eventPrice, eventName, team) => {
    const registerCallback = async () => {
      setIsLoading(true);
      const res = await fetch("/api/registerInEvent", {
        method: "POST",
        headers: {
          Authorization: currentUser.accessToken,
        },
        body: JSON.stringify({
          email: currentUser.email,
          event_name: eventName,
          eid: eventID,
          team: team,
          val: eventPrice,
        }),
      });
      const resJSON = await res.json();

      if (resJSON.status === "success") {
        // fetchAllEvents();
        fetchEventById(eventID);
        fetchMyCoins();
        notify("success", "Registered Successfully");
        setIsLoading(false);
      } else {
        notify("error", resJSON.message);
      }
    };
    if (currentUser) {
      if (eventPrice > 0) {
        registerCallback();
      } else {
        registerCallback();
      }
    }
  };

  const createEvent = async (details) => {
    if (currentUser && isAdmin) {
      const res = await fetch("/api/createEvent", {
        method: "POST",
        body: JSON.stringify({
          email: currentUser.email,
          event_details: {
            name: details.title,
            category: details.categ,
            about: details.description,
            price: details.price,
            venue: details.venue,
            date: new Date(details.date + " " + details.time),
            // eventImageURL: details.eventImageURL,
            teamSize: details.teamSize,
            shortDesc: details.shortDesc,
          },
        }),
        headers: {
          Authorization: currentUser.accessToken,
        },
      });
      const resjson = await res.json();

      if (resjson.status === "success") {
        notify("success", "Event Created Successfully");
      } else {
        notify("error", resjson.message);
      }
    } else {
      notify("error", "Login first");
    }
  };

  const closeRegistration = async (eid) => {
    if (currentUser && isAdmin) {
      const res = await fetch("/api/closeRegistration", {
        method: "POST",
        headers: {
          Authorization: currentUser.accessToken,
        },
        body: JSON.stringify({
          email: currentUser.email,
          eventID: eid,
        }),
      });
      const resjson = await res.json();
      if (resjson.status === "success") {
        notify("success", "Event Closed Successfully");
      } else {
        notify("error", resjson.message);
      }
    }
  };

  useEffect(() => {
    // if (currentUser) {
    fetchAllEvents();
    // }
    if (currentUser) {
      fetchMyCoins();
    }
  }, []);

  return (
    <EventContext.Provider
      value={{
        allEvents,
        registerInEvent,
        createEvent,
        closeRegistration,
        makePayment,
        myCoins,
        fetchMyCoins,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
