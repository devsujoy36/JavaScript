const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}



const displayPhones = phones => {
    //step1: get phone container using dom
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');
    //show all button if there are more than 12phones
    if (phones.length > 12) {
        phones = phones.slice(0, 12);
        showAllContainer.classList.remove = 'hidden';
        showAllContainer.classList = 'flex justify-end mt-3'
    }
    else {
        showAllContainer.classList = 'hidden';
        
    }








    phones.forEach(phone => {
        console.log(phone);
        //step2: create a div
        const phoneCard = document.createElement('div');
        //step3: add class in the div
        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        //step4: add innerhtml innner the div
        phoneCard.innerHTML = `
            <figure ><img class="m-4" src=${phone.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        //step5: append the div with phone container
        phoneContainer.appendChild(phoneCard);
    });
}


//handle search button
const handleSearch = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);

}

//handle search recap
const handleSearch2 = () => {
    toggleLoadingSpinner();
    const searchField2 = document.getElementById('input-field2');
    const searchText2 = searchField2.value;
    loadPhone(searchText2);
}

const toggleLoadingSpinner = () => {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.classList.remove('hidden')


}









