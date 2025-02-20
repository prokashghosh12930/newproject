import { emailRegex, passwordRegex, mobileRegex, nameRegex } from "./Regex"
/**
 * @name isItEmail
 * @description
 * If the email is proper then it will return true otherwise false.
 * @param email it is take string of email
 * @returns boolean
 */
export const isItEmail = (email: string): boolean => {
    if (email.match(emailRegex)) {
        return true;
    } else {
        return false;
    }
}

/**
 * @description
 * It is use to detect the filed is totally blank or not.
 * @param value 
 * @returns boolean
 */
export const isBlank = (value: string): boolean => {
    if (!value.trim()) {
        return true;
    } else {
        return false;
    }
}

/**
 * @description
 * It is validate password. Password should be eight character long and minimum one letter should be Uppercase.
 * one should be lowercase, one should be special character.
 * @param password 
 * @returns boolean
 */
export const isStrongPassword = (password: string): boolean => {
    if (password.match(passwordRegex)) {
        return true;
    } else {
        return false;
    }
}

/**
 * @description
 * +91 it is allow total twelve numbers. with out 91 it allows only ten numbers.
 * @param phone take phone number in string
 * @returns boolean
 */
export const isPhoneNumber = (phone: string): boolean => {
    if (phone.match(mobileRegex)) {
        return true;
    } else {
        return false;
    }
}

export const isValidName = (name: string): boolean => {
    if (name.match(nameRegex)) {
        return true;
    } else {
        return false;
    }
}

export const isOnlyDigits = (val: string): boolean => {
    if (val == null || val == undefined || val == "") {
        return false;
    }
    for (let i = 0; i < val.length; i++) {
        var ascii = val.charCodeAt(i);
        if (ascii < 48 || ascii > 57) {
            return false;
        }
    }
    return true;
}

export const getFirstName = (name: string): string => {
    let nameArr = name.split(" ");
    let firstName = nameArr[0];
    return firstName;
}

export const getLastName = (name: string): string => {
    let locationPoint = name.indexOf(" ");
    let lastName = name.slice(locationPoint);
    return lastName;
}
/**
 * @description
 * It handle long string. If string is long 25th character then it will add ...
 * @param name 
 * @returns none
 */
export const longStringHandler = (name: string): string => {
    if (name.length > 25) {
        let value = name.slice(0, 25);
        return `${value}...`;
    } else {
        return name;
    }
}

/**
 * @name setDifficultyLevel
 * @description
 *  It detect the difficulty level according to the condition. Drop down always return address of the value. So thats why it need to create.
 * @param val receave number which is return from dropdown.
 * @returns String
 */
export const setDifficultyLevel = (val: string): string => {
    switch (val) {
        case "1":
            return "Easy";
        case "2":
            return "Medium";
        case "3":
            return "Hard";
        default:
            return "Easy"
    }
}
/**
 * It is use to return status which is active or not. 
 * @param val only take 1 or 2 .
 * @returns return 1 for active. and 2 for InActive.
 */
export const setStatusText = (val: string): string => {
    switch (val) {
        case "1":
            return "Active";
        case "2":
            return "InActive";
        default:
            return " ";
    }
}
/**
 * This function is use to create selected module id JSON according to api needs.
 * @param arr 
 * @returns Json object.
 */
export const setModuleArrayToJson = (arr: any[]): object => {
    let tempJson: any = {};
    let primeJson: any = {};
    for (let id in arr) {
        primeJson[`module_id${Number(id) + 1}`] = arr[id];
        tempJson = { ...tempJson, primeJson }
    }
    return tempJson.primeJson;
};
/**
 * It is use to format date. like dd/mm/yyyy;
 * @param time take date using date dataType.
 * @returns string date.
 */
export const setDateFormate = (time: any) => {
    const date = new Date(time);
    const stringDate: string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return stringDate;
}
/**
 * It is use to format date. like dd/mm/yyyy hour:minute;
 * @param time take date using date dataType.
 * @returns string date.
 */
export const setDateTimeFormate = (time: any) => {
    const date = new Date(time);
    let hours: number = date.getHours();
    let minutes: number | string = date.getMinutes();
    let amPm: string = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const stringDate: string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + hours + ':' + minutes + ' ' + amPm;
    return stringDate;
}

export const setHourToMinuteConverter = (time: Date) => {
    let minute: number = time.getMinutes();
    let hours: number = time.getHours();
    return (hours * 60) + minute;
}

export const getBase64 = (file: any) => new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject('Error: ');
});

export const setMinuteToHourConverter = (n: number) => {
    let num = n;
    let hours = (num / 60);
    let rhours: string | number = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes: string | number = Math.round(minutes);
    rhours = rhours <= 9 ? `0${rhours}` : `${rhours}`;
    rminutes = rminutes <= 9 ? `0${rminutes}` : `${rminutes}`;
    return `${rhours}:${rminutes}`
}

export const percentageFormatter = (val: string, total: string) => {
    val = String(val)
    const valArray = val.split(".");
    return `${total} (${valArray[0]}%)`;
}