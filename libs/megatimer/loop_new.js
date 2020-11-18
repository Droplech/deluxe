(function () {
    var _id = "8965851ae6e6df540d0baadbb0a4cd1a"; 
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:100%;height:75px;'></div>");
    var _t = document.createElement("script");
    _t.src = "libs/megatimer/timer.min.js";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "3",
                "params": {
                    "weekdays": [1, 1, 1, 1, 1, 1, 1],
                    "usertime": true,
                    "time": "00:00",
                    "tz": -180,
                    "hours": "24",
                    "minutes": "0"
                }
            },
            "design": {
                "type": "plate",
                "params": {
                    "round": "4",
                    "background": "solid",
                    "background-color": "#000",
                    "effect": "slide",
                    "space": "6",
                    "separator-margin": "10",
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "41",
                    "number-font-color": "#fff",
                    "padding": "5",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Arial"
                    },
                    "text-font-size": "12",
                    "text-font-color": "#fff"
                }
            },
            "designId": 4,
            "theme": "white",
            "width": 469,
            "height": 75
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);