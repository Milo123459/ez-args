module.exports = (parser) => {
    parser.command({
        name: 'version',
        description: 'Get the version of the package',
        flags: ["-v","--v","-version","--version"],
        code: (data) => {
            console.log(`${require('./package.json').name}@${require('./package.json').version}`)
        }
    })
}