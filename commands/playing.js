const e=require(process.cwd()+"/utils/helpers.js"),s=require(process.cwd()+"/config/conf.json"),n=require(process.cwd()+"/utils/music.js");exports.run=((o,r,c)=>{s.commands.useMusicCommand||(s.commands.removeCommandMsg&&r.delete().catch(()=>e.sendError(r.channel,"Unable to continue!","Do I have the needed permissions?")),n.currentPlaying(r))}),module.exports.info={name:"playing",aliases:s.commands.playing.aliases};