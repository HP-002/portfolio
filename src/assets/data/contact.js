
const GITHUBID = "HP-002";
const LINKEDINID = "hetpatel19";
const PERSONALEMAIL = "hetfaldu19";
const SCHOOLEMAIL = "hetpatel"

const email = `${PERSONALEMAIL}@gmail.com`;
const schoolEmailAddress = `${SCHOOLEMAIL}@buffalo.edu`;

const contact = {
    github: `https://github.com/${GITHUBID}`,
    linkedin: `https://www.linkedin.com/in/${LINKEDINID}`,
    email,
    schoolEmailAddress,
    personalEmail: `mailto:${email}`,
    schoolEmail: `mailto:${schoolEmailAddress}`,
}

export default contact;