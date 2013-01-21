var win = Ti.UI.createWindow({backgroundColor:'white'});
win.open();

var NappUAGCM = require('dk.napp.uagcm');
Ti.API.info("module is => " + NappUAGCM);

if (Ti.Platform.name == "android") {
	NappUAGCM.registerForPushNotifications({
		pushServiceEnabled: true,
		tags: [ 'appcelerator', 'napp' ],

		success: function(e) {
			Ti.API.debug('NappUAGCM Register succeed: ' + e.apid);
		},
		error: function(e) {
			Ti.API.debug("NappUAGCM Register failed");
		},
		callback: function(e) {
			var message = "";
			for(var key in e){	
				message += key+":"+e[key]+"\n";
			}
			Ti.API.debug('NappUAGCM push received: ' + message);
		}
	});
}