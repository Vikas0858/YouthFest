const isMnitemail = (email) => {
  const trimmed_email = email.trim();
  const domain = trimmed_email.split("@")[1];
  return domain === "mnit.ac.in";
};

export default isMnitemail;
