var clArgs = process.argv.slice(2); 

module.exports.url = clArgs[0].indexOf('@') > 0 ? clArgs[0] :
'mongodb://' + clArgs[0] + ':' + clArgs[1] + '@ds035280.mongolab.com:35280/ssmongodb';