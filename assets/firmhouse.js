 
// ADMIN API token: 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


document.addEventListener('firmhouse:load:products', (event)=> {
  let shopifyVariantId = 'gid://shopify/ProductVariant/' + event.detail.variant.id
  let availableText = document.querySelector('.product__stock-cjs')
  availableText.innerHTML = (event.detail.variant.available)? availableText.dataset.in : availableText.dataset.out
  let access = false
  if (event.detail.variant.id) {
    access = true
  }
  getProduct(access, shopifyVariantId)
  let price = event.detail.variant.price
  changePrice(price)
})

document.addEventListener('DOMContentLoaded', ()=> {
  let access = false
  if (window.currentVariant) {
    access = true
  }
  let shopifyVariantId = 'gid://shopify/ProductVariant/' + window.currentVariant
  getProduct(access, shopifyVariantId)
})


function changePrice(price){
  let oldPrice = document.querySelector('.product_form_frequency .old_price')
  let standartPrice = document.querySelector('.product_form_frequency .standart_price')
  oldPrice.innerHTML = window.cartCurrency + (+price / 100).toFixed(2)
  standartPrice.innerHTML = window.cartCurrency + (+price / 100).toFixed(2)
}

function getProduct(access, id){
  if (!access) return
  let variantId = id
  let queryBody = `query MyQuery {
    products(shopifyVariantId : "${variantId}") {
      nodes {
        id
        priceCents
        intervalUnitOfMeasure
        interval
      }
    }
  }`
  const queryParam = { query: queryBody }

  fetch('https://portal.firmhouse.com/graphql', {
    method: "POST",
    headers: {
      "cors": "no-cors",
      "Content-Type":"application/json",
      "X-Project-Access-Token": "PGs1GJwUwqeNcQmRhNnb3y5U", 
      "Accept": "application/json"
    },
    body: JSON.stringify(queryParam)
  })
  .then( response => { return response.json() } )
  .then( data => {
    let allProducts = data.data.products.nodes
    createDropdownItems(allProducts)
  })
}

function createDropdownItems(products){
  let frequencyForm = document.querySelector('.product_form_frequency')
  let newPrice = frequencyForm.querySelector('.new_price')
  let dropdown = frequencyForm.querySelector('.product_form_frequency_subs_select-drop')
  
  console.log(products);
  if (products.length == 0) return
  uncheckAllInput()
  setActiveBlock('subs')
  frequencyForm.classList.remove('frequency_hidden')
  dropdown.innerHTML = ''
  for (let i = 0; i < products.length; i++) {
    let item = document.createElement('div')
    item.classList.add('product_form_frequency_subs_select-drop_item')
    item.dataset.id = products[i].id
    item.dataset.price = products[i].priceCents
    if (i == 0) newPrice.innerHTML = window.cartCurrency + (+products[i].priceCents / 100).toFixed(2)
    item.innerHTML = `${products[i].interval} ${products[i].intervalUnitOfMeasure}`
    item.setAttribute('onclick', 'setActiveItem(this)')
    dropdown.appendChild(item)
  }
}

function setActive(input){
  let activeBlock = input.closest('.product_form_frequency-attr').dataset.action
  setActiveBlock(activeBlock)
}

function setActiveBlock(activeClass){
  let allBlocks = document.querySelectorAll('.product_form_frequency_wrapper > div')
  allBlocks.forEach(block => {
    block.classList.remove('active_block')
    block.querySelector('input').checked = false
  })
  let activeBlock = document.querySelector(`.product_form_frequency_${activeClass}`)
  activeBlock.querySelector('input').checked = true
  activeBlock.classList.add('active_block')
}

function uncheckAllInput(){
  let allInputs = document.querySelectorAll('.product_form_frequency input[type="checkbox"]')
  allInputs.forEach( input => {
    input.checked = false
  })
}


function showDropdownItems(dropdown){
  let dropdownContent = dropdown.querySelector('.product_form_frequency_subs_select-drop')
  let dropdownContentItems = dropdown.querySelectorAll('.product_form_frequency_subs_select-drop > div')
  let dropdownContentItemsCount = dropdownContentItems.length
  if (dropdownContentItemsCount == 0)  return
  if (dropdown.classList.contains('product_form_frequency_subs_select_open')) {
    dropdownContent.style.maxHeight = '0px'
    dropdown.classList.remove('product_form_frequency_subs_select_open')
    return
  }
  let itemHeight = dropdownContentItems[0].offsetHeight
  dropdown.classList.add('product_form_frequency_subs_select_open')
  dropdownContent.style.maxHeight = (itemHeight * dropdownContentItemsCount) + 'px'

  document.addEventListener("click", function(e) {
    if (!dropdown.contains(e.target)) {
      dropdownContent.style.maxHeight = '0px'
      dropdown.classList.remove('product_form_frequency_subs_select_open')
    }
  })
}

function setActiveItem(item){
  let activeItem = document.querySelector('.drop_item_currently-active')
  if (activeItem) activeItem.classList.remove('drop_item_currently-active')
  let currentActive = document.querySelector('.product_form_frequency_subs_select-current')
  let newPriceWrapper = document.querySelector('.product_form_frequency .new_price')
  item.classList.add('drop_item_currently-active')
  newPriceWrapper.innerHTML = window.cartCurrency + (+item.dataset.price / 100).toFixed(2)
  currentActive.innerHTML = item.innerHTML
}