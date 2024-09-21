// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];


let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

let formData = {
    sitename: "",
    siteurl: ""
};

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";

    } else {
        siteNameErrMsgEl.textContent = "";
    }


    formData.sitename = event.target.value;

});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";

    } else {
        siteUrlErrMsgEl.textContent = "";
    }
    formData.siteurl = event.target.value;
});

function validateFormData(formData) {
    let {
        sitename,
        siteurl
    } = formData;
    if (sitename === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (siteurl === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }
}
for (let i of bookmarks) {
    let sitesEl = document.createElement("li");
    sitesEl.classList.add("designed", "d-flex", "flex-row");
    sitesEl.textContent = i.name;
    bookmarksListEl.appendChild(sitesEl);
    let anchorEl = document.createElement("a");
    anchorEl.setAttribute("href", siteUrlInputEl.value);
    anchorEl.classList.add("anchor");
    anchorEl.textContent = "Vist";
    sitesEl.appendChild(anchorEl);
}

function Sites(bookmarks) {
    let sitesEl = document.createElement("li");
    sitesEl.classList.add("designed", "d-flex", "flex-row");
    sitesEl.textContent = siteNameInputEl.value;
    bookmarksListEl.appendChild(sitesEl);
    let anchorEl = document.createElement("a");
    anchorEl.setAttribute("href", siteUrlInputEl.value);
    anchorEl.classList.add("anchor");
    anchorEl.textContent = "Vist";
    sitesEl.appendChild(anchorEl);
}


bookmarkFormEl.addEventListener("submit", function(event) {

    event.preventDefault();
    validateFormData(formData);
    Sites(formData);
});
