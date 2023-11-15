let containersList = document.getElementById('list');

// create containers JSON
let containers = [
  {
    "id": 1,
    "company": "Private Limited<br> Company",
    "price": 999,
    "fees": "+ Govt Fees",
    "information": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo facere minus aliquid impedit, cumque nemo itaque fugiat totam. Doloremque, amet! Nisi ea natus debitis consectetur doloremque eius rerum impedit."
  },
  {
    "id": 2,
    "company": "Limited Liability<br> Partnership",
    "price": 999,
    "fees": "+ Statutory Fees",
    "information": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo facere minus aliquid impedit, cumque nemo itaque fugiat totam. Doloremque, amet! Nisi ea natus debitis consectetur doloremque eius rerum impedit."
  },
  {
    "id": 3,
    "company": "One Person<br> Company",
    "price": 5998,
    "fees": "All inclusive",
    "information": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo facere minus aliquid impedit, cumque nemo itaque fugiat totam. Doloremque, amet! Nisi ea natus debitis consectetur doloremque eius rerum impedit."
  },
  {
    "id": 4,
    "company": "Partnership<br> Firm",
    "price": 999,
    "fees": "+ Statutory Fees",
    "information": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo facere minus aliquid impedit, cumque nemo itaque fugiat totam. Doloremque, amet! Nisi ea natus debitis consectetur doloremque eius rerum impedit."
  }
]

// Convert the array to a JSON string
let containersJsoString = JSON.stringify(containers);

// Convert the JSON string back to an array
let containersArray = JSON.parse(containersJsoString);

for (let i = 0; i < containersArray.length; i++) {
  let container = containersArray[i];

        // Create a div element for each container
        let containerDiv = document.createElement('div');
        containerDiv.className = 'container';
  
        // Populate the div with container information
        containerDiv.innerHTML = `
          <div class="title">
            <h1>${container.company}</h1>
          </div>
          <div class="price">
            <b>Starting<b>
            <h3>₹${container.price}</h3>
            <span>${container.fees}</span>
          </div>
          <div class="information">
            <p>${container.information}</p>
          </div>
          <div class="more">
            <p>Know More</p>
          </div>
        `;
  
        // Append the container div to the containersList
        containersList.appendChild(containerDiv);

}