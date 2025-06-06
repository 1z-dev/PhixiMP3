module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Alphix-01',
          name: 'PhixiMP3'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}