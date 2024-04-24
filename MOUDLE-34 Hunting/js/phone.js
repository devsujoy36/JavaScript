const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}



const displayPhones = phones => {
    console.log(phones);

    //step1: get phone container using dom
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');
    //show all button if there are more than 12phones
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    
    phones = phones.slice(0, 12);


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
    })

    //hide loading spinner
    toggleLoadingSpinner(false);


}


//handle search button
const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);

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









