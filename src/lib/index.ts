import moment from 'moment-jalaali';
export const isEmpty = (obj: any) => {
    if (obj === null || obj === '' || obj === undefined) return true;
    if (!Object.entries(obj).length) return true;
    return false;
};
export const commafy = (num: number, delimiterChar = ','): string => {
    let number = num?.toString();
    number = number?.split(delimiterChar).join('');
    if (isNaN(Number(number))) {
        return number;
    }
    const str = number.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1' + delimiterChar);
    }
    if (str[1] && str[1].length >= 4) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
};

export const calculateDiscountPercent = (price: number, discount: number) => {
    if (discount === 0) return false;
    if (discount !== 0) {
        price - price * discount;
    }
};
export const _calculateDiscountPercent = (price: number, discount: number) => {
    const discountPercent = price / 100;
    const percent = 100 - discount;
    const newPrice = discountPercent * percent;

    if (discount !== 0) {
        return newPrice;
    }
    return price;
};
export const ConvertToJalali = (time: any) => {
    // joda kardane tarikh az saat
    const dateTime: string = time?.split('T');

    // faqat tarikh
    const date = dateTime[0].split('-');

    const year = date[0];
    const month = date[1];
    const day = date[2];

    const khorshidi = moment(`${year}/${month}/${day}`);
    return khorshidi.format('jYYYY/jMM/jDD');
    // console.log( khorshidi.format('jYYYY/jM/jD'))
};
export const logger = (logData: any, msg: string, color?: 'red' | 'blue' | 'green') => {
    console.log(`%c ${msg}==============>`, `color:${color ?? 'green'};`, logData);
};

export const range = (start: number, end: number) => {
    const ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
};
