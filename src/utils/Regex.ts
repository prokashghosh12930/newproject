const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
const mobileRegex = /^([+]\d{2})?\d{10}$/;
const nameRegex = /^[a-zA-Z ]{2,30}$/;
export { emailRegex, passwordRegex, mobileRegex, nameRegex }