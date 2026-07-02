// Useful fields:
// repo.name              — repository name e.g. 'PigMoney'
// repo.description       — description or null if not set
// repo.html_url          — link to the repo on GitHub
// repo.language          — primary language e.g. 'Java' or null if not detected
// repo.pushed_at         — last pushed date as ISO string e.g. '2026-06-24T13:45:00Z'
// repo.stargazers_count  — number of stars
// repo.forks_count       — number of forks
// repo.topics            — array of topic tags e.g. ['minecraft', 'java']
// repo.visibility        — 'public' or 'private'

async function loadLatestRepo() {
    const response = await fetch('https://api.github.com/users/ThomasK975/repos?sort=pushed&per_page=1')
    const repos = await response.json()
    const repo = repos[0]

    const latestRepo = document.querySelector('#latest-repo')

    const repoLink = document.querySelector('#repo-link')
    const repoName = document.querySelector('#repo-name')
    const repoLanguage = document.querySelector('#repo-language')
    const repoDescription = document.querySelector('#repo-description')
    const repoUpdated = document.querySelector('#repo-updated')

    repoName.textContent = repo.name
    repoLink.setAttribute('href', repo.html_url)
    repoLanguage.textContent = repo.language
    repoDescription.textContent = repo.description
    const date = new Date(repo.pushed_at).toLocaleDateString('en-GB')
    repoUpdated.textContent = date

    latestRepo.style.display = 'block'

    // then update the DOM with repo.name, repo.description etc.
}

document.addEventListener('DOMContentLoaded', loadLatestRepo)