import PhoneIcon from './phone.svg';
import ClockIcon from './clock.svg';

const mapCoordinates = `https://www.openstreetmap.org/export/embed.html?bbox=-4.2984867095947275,53.18988759662502,-4.130258560180665,53.25535521592485&amp;layer=mapnik`;

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('contact-header');

    const headerText = document.createElement('span');
    headerText.textContent = 'Contact Us';

    header.appendChild(headerText);

    return header;
}

function createForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('contact-form');

    const form = document.createElement('form');

    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.placeholder = 'Name';
    nameField.name = 'name';
    nameField.required = true;
    nameField.classList.add('feedback-input');

    const emailField = document.createElement('input');
    emailField.type = 'email';
    emailField.placeholder = 'Email';
    emailField.name = 'email';
    emailField.required = true;
    emailField.classList.add('feedback-input');

    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Message';
    textArea.name = 'text';
    textArea.required = true;
    textArea.classList.add('feedback-input');

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    const formArray = [nameField, emailField, textArea, submitButton];

    formArray.forEach((element) => {
        form.appendChild(element);
    });

    formContainer.appendChild(form);

    return formContainer;
}

function createContactDetails() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-details');

    const phone = document.createElement('div');
    phone.classList.add('phone');

    const phoneIcon = document.createElement('img');
    phoneIcon.src = PhoneIcon;
    phoneIcon.id = 'phone-icon';

    const phoneNumber = document.createElement('span');
    phoneNumber.innerText = 'PHONE: 0113 123 1234';

    phone.appendChild(phoneIcon);
    phone.appendChild(phoneNumber);

    const workingHours = document.createElement('div');
    workingHours.classList.add('work-times');

    const clockIcon = document.createElement('img');
    clockIcon.src = ClockIcon;
    clockIcon.id = 'clock-icon';

    const workingHoursText = document.createElement('span');
    workingHoursText.innerText = 'SUN-THUR: 08:00 - 22:00';

    const workingHoursWeekend = document.createElement('span');
    workingHoursWeekend.id = 'weekend';
    workingHoursWeekend.innerText = 'FRI-SAT: 08:00 - 13:00';

    workingHours.appendChild(clockIcon);
    workingHours.appendChild(workingHoursText);
    workingHours.appendChild(document.createElement('br'));
    workingHours.appendChild(workingHoursWeekend);

    const mapIframe = document.createElement('div');
    mapIframe.classList.add('iframe-container');

    const iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('src', mapCoordinates);

    mapIframe.appendChild(iframe);

    const contactDetails = [phone, workingHours, mapIframe];

    contactDetails.forEach((element) => {
        contactContainer.appendChild(element);
    });

    return contactContainer;
}

function contact() {
    const container = document.createElement('div');
    container.classList.add('container');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const header = createHeader();
    const formContainer = createForm();
    const contactDetails = createContactDetails();

    contactContainer.appendChild(formContainer);
    contactContainer.appendChild(contactDetails);

    const contactArray = [header, contactContainer];

    contactArray.forEach((element) => {
        container.appendChild(element);
    });

    return container;
}

export default contact;
