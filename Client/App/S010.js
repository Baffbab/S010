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





    window.S010 = {
        ExternalURL: function(URL2Open) {
            electron.shell.openExternal(URL2Open);

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


    // xxxxxxxxxxxxxxxxxxxxxxxxxx
    (function() {
        var S010SERVER = {
                "version": {
                    "major": 1,
                    "minor": 1,
                    "revision": 72,
                    "build": "2016-11-02T16:51:56.830Z"
                },
                "ClientIP": "Unknown"
            }
            /*
                 The master version of this client. It is changed when a new build 
                 is produced...
                 jrn.com UPDATE.js handles this on the back end...
             */
        // debugger;
 

        // debugger;
        var localVersion = JSON.parse(fs.readFileSync(__dirname + '/S010.json', 'utf8'));
        S010.version = localVersion.version;



        // (function() {




        //     if ((S010.ServerInfo.version.major != S010.version.major) ||
        //         (S010.ServerInfo.version.minor != S010.version.minor) ||
        //         (S010.ServerInfo.version.revision != S010.version.revision)) {

        //         S010.version.isValid = false;
        //     }
        //     else {
        //         S010.version.isValid = true;
        //     }


        // })(); //


        // AddScriptFile('./App/HeartBeat.js'); 

        AddScriptFile('./UI/UI.js');
        // AddScriptFile('./App/Storage/HomeFolder.js');


 
    })();
    // xxxxxxxxxxxxxxxxxxxxxxxxxx



})(); //All done...