module.exports = (parser) => {
    parser.command({
        name: 'pluginTest',
        description: 'Your plugin!',
        flags: ["-pt","--pt"],
        code: (data) => {
            console.log(parser.utils.term(data == "string",`Got a string!`,`Got a ${parser.utils.type(data)}`))
        }
    });
    parser.start();
}