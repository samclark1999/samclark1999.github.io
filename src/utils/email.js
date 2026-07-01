// Stored reversed so the address never sits as a literal, regex-matchable
// string in the page source or the built JS bundle — a free, zero-maintenance
// deterrent against the automated scrapers that harvest most spam targets.
// Not a substitute for real verification; there's no form here to protect.
const REVERSED_USER = "99krowkralcmas";
const REVERSED_DOMAIN = "moc.liamg";

const reverse = (str) => str.split("").reverse().join("");

export const getEmailAddress = () => `${reverse(REVERSED_USER)}@${reverse(REVERSED_DOMAIN)}`;

export const getMailtoHref = () => `mailto:${getEmailAddress()}`;
