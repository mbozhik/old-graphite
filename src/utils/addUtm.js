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
    if (utmParams.utmSource) {
      const currentURL = button.getAttribute('href')
      const updatedURL = `${currentURL}?utm_source=${utmParams.utmSource}&utm_medium=${utmParams.utmMedium}&utm_campaign=${utmParams.utmCampaign}`
      button.setAttribute('href', updatedURL)
    }
  })
}

updateAllButtonsURL()
