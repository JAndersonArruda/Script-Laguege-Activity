document.addEventListener("DOMContentLoaded", () => {
    const celsiusInput = document.querySelector("#celsius");
    const spanFahrenheit = document.querySelector("#temp-fahrenheit");
    const spanKelvin = document.querySelector("#temp-kelvin");

    celsiusInput.addEventListener("keyup", () => {
        const converterFahrenheit = (graus) => (graus *9/5) + 32;
        const converterKelvin = (graus) => parseFloat(graus) + 273.15;

        const fahrenheit = converterFahrenheit(celsiusInput.value);
        const kelvin = converterKelvin(celsiusInput.value);
        spanFahrenheit.textContent = fahrenheit.toFixed(2) + " °F";
        spanKelvin.textContent = kelvin.toFixed(2) + " °K";
    });
});
