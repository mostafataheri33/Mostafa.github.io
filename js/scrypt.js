//toggle icon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scrol Sections

let Sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active Navbar Links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active section for Animatoon
            sec.classList.add('show-animate');
        } //Animation on Scrool Repit beshe 
        else {
            sec.classList.remove('show-animate');
        }
    });


    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    //remove toggle icon on scroll on Icons 
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
    //animate footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

const form = document.querySelector('form');

const FullName = document.getElementById("name");
const EmailAddress = document.getElementById("emailaddress");
const MobileNumber = document.getElementById("mobileNumber");
const EmailSubject = document.getElementById("EmailText");
const EmailText = document.getElementById("TextArea");

function sendEmail() {
    const EmailContent = "Full Name :" + FullName.value +
        "\n\EmailAddress: " + EmailAddress.value +
        "\n\Mobile Number: " + MobileNumber.value +
        "\n\Email Subject: " + EmailSubject.value +
        "\n Email Text: " + EmailText.value;
    Email.send({
        SecureToken: "6a96a234-a067-4a80-87fa-7241037abf87",
        To: 'mostafataheribusiness@gmail.com',
        From: "mostafataheribusiness@gmail.com",
        Subject: EmailSubject.value,
        Body: EmailContent
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Sending Email!",
                    text: "Email Has Been Sent",
                    icon: "success"
                });
            }
        }
    );
}

function CheckInputs() {
    const items = document.querySelectorAll(".item")
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyUp", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    CheckInputs();
    sendEmail();
});
