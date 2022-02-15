/* eslint-disable */
export const emailRegExp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export const userName = new RegExp(/^[a-zA-z][a-zA-Z0-9_(.)-]{3,}$/);
export const landline_num = new RegExp(/^(0[1-9]{2})-([1-9][0-9]{2,7})+$/);
export const mobileRegExp = new RegExp('^[0][9][0-9]{9,9}$');
export const usernameRegExp = new RegExp(/^[a-zA-z][a-zA-Z0-9_(.)-]{3,}$/);
export const passwordRegExp = new RegExp(/^(?=.*\d).{8,12}$/);

export default (value: any) => {
    let letter = false;
    let capital = false;
    let number = false;
    let perfect = false;
    let message;
    const progressBar = { bg: '', width: '' };
    let validElements = 0;

    if (!value) {
        progressBar.width = '0px';
        progressBar.bg = 'bg-danger';
        message = 'این فیلد نمیتواند خالی باشد.';
        return {
            letter,
            capital,
            number,
            progressBar,
            validElements,
            message,
        };
    }
    // Validate length
    if (value.length >= 8) {
        letter = true;
    } else {
        letter = false;
    }
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;

    // Validate capital letters
    if (value && value.match(upperCaseLetters) && value.match(lowerCaseLetters)) {
        capital = true;
    } else {
        capital = false;
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if (value && value.match(numbers)) {
        number = true;
    } else {
        number = false;
    }

    if (passwordRegExp.test(value)) {
        perfect = true;
    } else {
        perfect = false;
    }

    [letter, capital, number, perfect].forEach((element) => {
        if (element) validElements += 1;
    });
    /* eslint-disable */
    switch (validElements) {
        case 0:
            progressBar.width = '0px';
            progressBar.bg = 'bg-danger';
            message = 'امنیت رمز عبور قابل قبول نمیباشد';
            break;
        case 1:
            progressBar.width = '25%';
            progressBar.bg = 'bg-danger';
            message = 'امنیت رمز عبور قابل قبول نمیباشد';
            break;
        case 2:
            progressBar.width = '50%';
            progressBar.bg = 'bg-warning';
            break;
        case 3:
            progressBar.width = '75%';
            progressBar.bg = 'bg-success';
            break;
        case 4:
            progressBar.width = '100%';
            break;
    }

    return { letter, capital, number, progressBar, validElements, message };
};
