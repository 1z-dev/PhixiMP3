module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Alphix-01',
          name: 'github-repo-name'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}