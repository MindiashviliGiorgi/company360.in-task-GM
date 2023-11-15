let containersList = document.getElementById('list');
let paginationElement = document.getElementById('pagination');
let currentPage = 1;
let containersPerPage = calculateContainersPerPage();

// create containers JSON
let containers = [
  {
    "id": 1,
    "newRelease": true,
    "company": "Private Limited<br> Company",
    "price": 999,
    "fees": "+ Govt Fees",
    "information": "The default option for start-ups and growing businesses as only private limited companies car raise venture capital. This type of company offers limited liability for its shareholders with certain restrictions placed on the ownership. Private limited company registration, directors may be different from shareholders."
  },
  {
    "id": 2,
    "newRelease": false,
    "company": "Limited Liability<br> Partnership",
    "price": 999,
    "fees": "+ Statutory Fees",
    "information": "LLP was introduced to provide a form of business that is easy to maintain and to help owners by providing them with limited liability. Limited Liability Partnership Registration combines the benefits of a partnership with that of a limited liability company."
  },
  {
    "id": 3,
    "newRelease": false,
    "company": "One Person<br> Company",
    "price": 5998,
    "fees": "All inclusive",
    "information": "The best structure for solo entrepreneurs looking beyond the opportunities a sole proprietorship affords. Here, a single promoter gains full authority over the company, restricting his/her liability towards their contributions on the enterprise. The said person will be the sole shareholder and director."
  },
  {
    "id": 4,
    "newRelease": false,
    "company": "Partnership<br> Firm",
    "price": 999,
    "fees": "+ Statutory Fees",
    "information": "A business structure in which two or more individuals manage a business per the terms in Partnership Deed. It's best suitable for home businesses that are unlikely to take any debt due to low cost, ease of setting up and minimal compliance requirements."
  }
]

// Convert the array to a JSON string
let containersJsonString = JSON.stringify(containers);

// Convert the JSON string back to an array
let containersArray = JSON.parse(containersJsonString);

function calculateContainersPerPage() {
  return window.innerWidth <= 1200 ? 1 : 4;
}

function displayContainers() {
  let startIndex = (currentPage - 1) * containersPerPage;
  let endIndex = startIndex + containersPerPage;
  let visibleContainers = containers.slice(startIndex, endIndex);

  // Clear the current content
  containersList.innerHTML = '';

  // Iterate over the visible containers and create HTML elements
  for (let i = 0; i < visibleContainers.length; i++) {
    let container = visibleContainers[i];

    // Create a div element for each container
    let containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    let releaseDiv = document.createElement('div');
    releaseDiv.className = 'release';

    releaseDiv.innerHTML = `
      <p>New</p>
    `

    if (container.newRelease) {
      releaseDiv.style.display = 'flex';
    } else {
      releaseDiv.style.display = 'none';
    }

    containerDiv.appendChild(releaseDiv)

    // Populate the div with container information
    containerDiv.innerHTML += `
      <div class="title">
        <h1>${container.company}</h1>
      </div>
      <div class="price">
        <b>Starting</b>
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

  // Update the active pagination dot
  updatePaginationDots();
}

// Function to show a specific page of containers
function showPage(pageNumber) {
  if (pageNumber >= 1 && pageNumber <= Math.ceil(containers.length / containersPerPage)) {
    currentPage = pageNumber;
    displayContainers();
  }
}

// Function to update the active pagination dot
function updatePaginationDots() {
  let totalPages = Math.ceil(containers.length / containersPerPage);

  // Clear the current pagination dots
  paginationElement.innerHTML = '';

  // Create and append new pagination dots
  for (let i = 1; i <= totalPages; i++) {
    let dot = document.createElement('div');
    dot.className = 'pagination-dot';
    if (i === currentPage) {
      dot.classList.add('active');
    }
    dot.setAttribute('data-page', i);
    dot.addEventListener('click', function () {
      showPage(parseInt(this.getAttribute('data-page')));
    });
    paginationElement.appendChild(dot);
  }
}

window.addEventListener('resize', function () {
  containersPerPage = calculateContainersPerPage();
  displayContainers();
});

// Display the initial set of containers
displayContainers();


