const loadPhone = async (searchText,isShowAll) => {
    const url = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await url.json();
    const phones = data.data;
    displayPhones(phones,isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    //display 10 phone only
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 10 && !isShowAll) {
        phones = phones.slice(0, 10);
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    









    //display all phones
    phones.forEach(phone => {
        // console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = `card bg-gray-100 shadow-xl`;
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img class="card-img-top" src=${phone.image} alt="..." />
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>                   
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
    //hide loading spinner
    toggleLoadingSpinner(false);
}

//handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll);
}

const handleShowAll = () => {
    handleSearch(true);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

//handle show details
const handleShowDetails = async (id) => {
    // console.log('click show details', id);
    const url = await fetch(`https://openapi.programming-hero.com/api/phones?search=${id}`)
    const data = await url.json();
    const phone = data.data;

    displayPhoneDetails(phone);

}

const displayPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('show-details-phone-name');
    phoneName.innerText = phone.name;

    

    show_details_modal.showModal();
}













