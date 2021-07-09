const showJobScreen = document.getElementById('show-job-card')
const jobCard = document.getElementById('job-card')
const submitButton = document.getElementById('submit-job')
const jobList = document.getElementById('jobs-list')

showJobScreen.addEventListener('click', function () {
  jobCard.className = 'visible'
})

submitButton.addEventListener('click', function (e) {
  e.preventDefault()

  const appliedStatus = document.createElement('input')
  appliedStatus.setAttribute('type', 'checkbox')

  const jobsDiv = document.createElement('div')
  jobsDiv.className = 'job'

  const jobTitle = document.getElementById('job-title').value
  const companyName = document.getElementById('company-name').value

  const jobP = document.createElement('p')
  jobP.innerHTML = `Job title: ${jobTitle}`

  const companyP = document.createElement('p')
  companyP.innerHTML = `Company name: ${companyName}`

  const appliedToP = document.createElement('p')
  appliedToP.innerHTML = 'Applied to: '

  const checkP = document.createElement('p')
  checkP.appendChild(appliedStatus)

  jobsDiv.appendChild(jobP)
  jobsDiv.appendChild(companyP)
  jobsDiv.appendChild(appliedToP)
  jobsDiv.appendChild(checkP)

  jobList.appendChild(jobsDiv)

  jobCard.className = 'invisible'
})
