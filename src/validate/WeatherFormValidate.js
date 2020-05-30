export const validate = (formValues) => {
    const errors = {};

    if (!formValues.cityName) {
        errors.cityName = "Please enter a city name";
    }

    var regex = new RegExp(/^[a-zA-Z\s]*$/);

    if (formValues.cityName && !regex.test(formValues.cityName)) {
        errors.cityName = "Please enter letters of English alphabet";
    }

    return errors;
}