/*===
{"0":0,"prop0":0,"1":1,"prop1":1,"2":2,"prop2":2,"3":3,"prop3":3,"4":4,"prop4":4,"5":5,"prop5":5,"6":6,"prop6":6,"7":7,"prop7":7,"8":8,"prop8":8,"9":9,"prop9":9,"10":10,"prop10":10,"11":11,"prop11":11,"12":12,"prop12":12,"13":13,"prop13":13,"14":14,"prop14":14,"15":15,"prop15":15,"16":16,"prop16":16,"17":17,"prop17":17,"18":18,"prop18":18,"19":19,"prop19":19,"20":20,"prop20":20,"21":21,"prop21":21,"22":22,"prop22":22,"23":23,"prop23":23,"24":24,"prop24":24,"25":25,"prop25":25,"26":26,"prop26":26,"27":27,"prop27":27,"28":28,"prop28":28,"29":29,"prop29":29,"30":30,"prop30":30,"31":31,"prop31":31,"32":32,"prop32":32,"33":33,"prop33":33,"34":34,"prop34":34,"35":35,"prop35":35,"36":36,"prop36":36,"37":37,"prop37":37,"38":38,"prop38":38,"39":39,"prop39":39,"40":40,"prop40":40,"41":41,"prop41":41,"42":42,"prop42":42,"43":43,"prop43":43,"44":44,"prop44":44,"45":45,"prop45":45,"46":46,"prop46":46,"47":47,"prop47":47,"48":48,"prop48":48,"49":49,"prop49":49,"50":50,"prop50":50,"51":51,"prop51":51,"52":52,"prop52":52,"53":53,"prop53":53,"54":54,"prop54":54,"55":55,"prop55":55,"56":56,"prop56":56,"57":57,"prop57":57,"58":58,"prop58":58,"59":59,"prop59":59,"60":60,"prop60":60,"61":61,"prop61":61,"62":62,"prop62":62,"63":63,"prop63":63,"64":64,"prop64":64,"65":65,"prop65":65,"66":66,"prop66":66,"67":67,"prop67":67,"68":68,"prop68":68,"69":69,"prop69":69,"70":70,"prop70":70,"71":71,"prop71":71,"72":72,"prop72":72,"73":73,"prop73":73,"74":74,"prop74":74,"75":75,"prop75":75,"76":76,"prop76":76,"77":77,"prop77":77,"78":78,"prop78":78,"79":79,"prop79":79,"80":80,"prop80":80,"81":81,"prop81":81,"82":82,"prop82":82,"83":83,"prop83":83,"84":84,"prop84":84,"85":85,"prop85":85,"86":86,"prop86":86,"87":87,"prop87":87,"88":88,"prop88":88,"89":89,"prop89":89,"90":90,"prop90":90,"91":91,"prop91":91,"92":92,"prop92":92,"93":93,"prop93":93,"94":94,"prop94":94,"95":95,"prop95":95,"96":96,"prop96":96,"97":97,"prop97":97,"98":98,"prop98":98,"99":99,"prop99":99}
===*/

function test() {
    var obj = { foo: 1, bar: 2, quux: 3, baz: 4 };
    var i;

    for (i = 0; i < 100; i++) {
        obj[i] = i;
        obj['prop' + i] = i;
    }

    var plist = [];
    for (i = 0; i < 1000000; i++) {
        plist.push((i % 1000));
        plist.push('prop' + (i % 900));
    }

    print(JSON.stringify(obj, plist));
}

try {
    test();
} catch (e) {
    print(e);
}
