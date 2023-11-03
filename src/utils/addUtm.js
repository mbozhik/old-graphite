function getUTMParameters() {
  const urlParams = new URLSearchParams(window.location.search)
  const utmSource = urlParams.get('utm_source')
  const utmMedium = urlParams.get('utm_medium')
  const utmCampaign = urlParams.get('utm_campaign')

  return {utmSource, utmMedium, utmCampaign}
}

function updateAllButtonsURL() {
  const buttons = document.querySelectorAll('.BUTTON')
  const utmParams = getUTMParameters()

  buttons.forEach((button) => {
    const currentURL = button.getAttribute('href')

    if (currentURL.includes('?')) {
      button.setAttribute('href', `${currentURL}&utm_source=${utmParams.utmSource}&utm_medium=${utmParams.utmMedium}&utm_campaign=${utmParams.utmCampaign}`)
    } else {
      button.setAttribute('href', `${currentURL}?utm_source=${utmParams.utmSource}&utm_medium=${utmParams.utmMedium}&utm_campaign=${utmParams.utmCampaign}`)
    }
  })
}

updateAllButtonsURL()
