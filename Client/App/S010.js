/*
Define S010 as a global object!!!
*/
var S010;




(function() {


    var fs = require('fs');
    var dns = require('dns');
    var os = require('os');
    var request = require("request");
    var electron = require('electron');


    const ipc = electron.ipcRenderer;



    window.S010 = {
        Exit() {
            window.close();
        },
        ExternalURL: function(URL2Open) {
            electron.shell.openExternal(URL2Open);

        },
        OpenDevTools: function() {
            ipc.send("OpenDevTools");
        },
        AlertNA: function() {
            
            S010.UI.WindowManager.Dialogs.Alert({
                buttons: ['OK'],
                title: 'Not Available',
                html: '<br><br>This is not yet working....<br><br><center>Not Working!</center>',
                width: '350px',
                height: '300px',

            }, function(CLICKED) {
                // console.log(CLICKED)

            });
        },
        FetchURL: function(ServiceURL, ReturnFunction) {



            // var url = 'http://www.telize.com/geoip/' + IPAddress; //Request.connection.remoteAddress



            // use a timeout value of 10 seconds
            var timeoutInMilliseconds = 10 * 1000
            var opts = {
                url: ServiceURL,
                timeout: timeoutInMilliseconds
            };

            request(opts, function(err, res, body) {
                if (err) {
                    ReturnFunction(err);
                }
                else {
                    if (res.statusCode == 200) {
                        ReturnFunction(null, body);
                    }
                    else {
                        ReturnFunction(res.statusCode, body);
                    }

                }
            });
        },

        Processenvironment: process.env,
        RootPath: __dirname,
        IconPath: './images/icons/',
        UI: {
            //built over time in ViewPort.js...
        },
        API: {
            // IPTracer: require(__dirname + "/App/NET/IPTRACE.js")
        },
        UserFolder: os.homedir() + '/S010/',
        description: 'Local code from electron! :-)',
        SERVICES: {
            //This is built over time using the app...
        },
        DEVICES: {
            //This is built over time using the app...
        }
    };




    function AddScriptFile(SRC) {



        var link = document.createElement('script');
        link.type = 'text/javascript'
        link.charset = 'utf-8'
        link.src = SRC;
        document.head.appendChild(link);
    }


    /*
        S010.FetchURL('https://desktop.johnrnelson.com/S010', function(err, body) {
            // debugger;
            eval(body);
        });
    */

    AddScriptFile('./UI/UI.js');
    // xxxxxxxxxxxxxxxxxxxxxxxxxx
    (function() {
        return;
        



    })();
    // xxxxxxxxxxxxxxxxxxxxxxxxxx



})(); //All done...
