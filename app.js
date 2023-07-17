const rangeSlider = document.getElementById('range-slider')
const pageviews = document.getElementById('pageviews')
const rateEl = document.getElementById('rate')
const toggleBtn = document.querySelector('.toggle-btn')
const frequencyEl = document.getElementById('frequency')

rangeSlider.addEventListener('input', () => {
  const rangeValue = rangeSlider.value
  getMonthlyRate(rangeValue)

  if (toggleBtn.firstElementChild.classList.contains('toggled')) {
    getAnnualRate(rangeValue)
  }
})

toggleBtn.addEventListener('click', function () {
  const rangeValue = rangeSlider.value
  toggleBtn.firstElementChild.classList.toggle('toggled')

  if (toggleBtn.firstElementChild.classList.contains('toggled')) {
    getAnnualRate(rangeValue)
  } else if (!toggleBtn.firstElementChild.classList.contains('toggled')) {
    getMonthlyRate(rangeValue)
  }
})

function getMonthlyRate(rangeValue) {
  let pageviewsAmount = ''
  let monthlyRate = ''
  if (rangeValue === '0') {
    ;(pageviewsAmount = 10), (monthlyRate = 4)
  } else if (rangeValue === '25') {
    ;(pageviewsAmount = 50), (monthlyRate = 10)
  } else if (rangeValue === '50') {
    ;(pageviewsAmount = 100), (monthlyRate = 16)
  } else if (rangeValue === '75') {
    ;(pageviewsAmount = 500), (monthlyRate = 20)
  } else if (rangeValue === '100') {
    ;(pageviewsAmount = 1000), (monthlyRate = 24)
  }

  if (pageviewsAmount === 1000) {
    pageviews.textContent = '1M pageviews'
  } else {
    pageviews.textContent = pageviewsAmount + 'k pageviews'
  }
  rateEl.textContent = `$${monthlyRate}.00`
  frequencyEl.textContent = '/month'
  return monthlyRate
}

function getAnnualRate(rangeValue) {
  const monthlyRate = getMonthlyRate(rangeValue)
  const annualRate = monthlyRate * 12 * 0.75
  rateEl.textContent = `$${annualRate}.00`
  frequencyEl.textContent = '/year'
}
