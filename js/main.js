!function(e){function o(o){for(var t,d,s=o[0],c=o[1],m=o[2],l=0,h=[];l<s.length;l++)d=s[l],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&h.push(i[d][0]),i[d]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(r&&r(o);h.length;)h.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,o=0;o<n.length;o++){for(var a=n[o],t=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(t=!1)}t&&(n.splice(o--,1),e=d(d.s=a[0]))}return e}var t={},i={0:0},n=[];function d(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.m=e,d.c=t,d.d=function(e,o,a){d.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,o){if(1&o&&(e=d(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)d.d(a,t,function(o){return e[o]}.bind(null,t));return a},d.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(o,"a",o),o},d.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},d.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var m=0;m<s.length;m++)o(s[m]);var r=c;n.push([11,1]),a()}([,,,function(e,o,a){},function(e,o,a){},,,function(e,o,a){},function(e,o,a){},function(e,o,a){},function(e,o,a){},function(e,o,a){"use strict";function t(e){try{if(!e)throw"error: routes param is mandatory";this.constructor(e),this.init()}catch(e){console.error(e)}}a.r(o),t.prototype={routes:void 0,rootElem:void 0,constructor(e){this.routes=e,this.rootElem=document.getElementById("app")},init(){const e=this.routes;!function(e,o){window.addEventListener("hashchange",a=>{e.hasChanged(e,o)})}(this,e),this.hasChanged(this,e)},hasChanged(e,o){if(window.location.hash.length>0)for(var a=0,{length:t}=o;a<t;a++){(i=o[a]).isActiveRoute(window.location.hash.substr(1))&&e.goToRoute(i.htmlName)}else{a=0;for(var{length:t}=o;a<t;a++){var i;(i=o[a]).default&&e.goToRoute(i.htmlName)}}},goToRoute(e,o){!function(a){const t=`views/${e}`,i=new XMLHttpRequest;i.onreadystatechange=function(){4===this.readyState&&200===this.status&&(a.rootElem.innerHTML=this.responseText)},i.open("GET",t,!0),i.send(),i.onload=function(e){4===i.readyState&&200===i.status&&"function"==typeof o&&o()}}(this)}};var i=t;function n(e,o,a){try{if(!e||!o)throw"error: name and htmlName params are mandatories";this.constructor(e,o,a)}catch(e){console.error(e)}}n.prototype={name:void 0,htmlName:void 0,default:void 0,constructor(e,o,a){this.name=e,this.htmlName=o,this.default=a},isActiveRoute(e){return e.replace("#","")===this.name}};var d=n;a(3);var s={set(e,o){localStorage.setItem(e,o)},get:e=>localStorage.getItem(e)?localStorage.getItem(e):null,setObject(e,o){localStorage.setItem(e,JSON.stringify(o))},getObject:e=>JSON.parse(localStorage.getItem(e))?JSON.parse(localStorage.getItem(e)):null,remove(e){localStorage.removeItem(e)},clear(){localStorage.clear()}};var c={app:{id:1139053,hash:"460fe61f384ea26d9baf5846273f4338",version:"1.0.0"},server:{test:[{id:1,host:"149.154.175.10",port:80},{id:2,host:"149.154.167.40",port:443},{id:3,host:"149.154.175.117",port:80}],production:[{id:1,host:"149.154.175.50",port:80},{id:2,host:"149.154.167.50",port:80},{id:3,host:"149.154.175.100",port:80},{id:4,host:"1149.154.167.50",port:80},{id:5,host:"149.154.171.5",port:80}],https:[{id:1,host:"pluto.web.telegram.org",port:80},{id:2,host:"venus.web.telegram.org",port:80},{id:3,host:"aurora.web.telegram.org",port:80},{id:4,host:"vesta.web.telegram.org",port:80},{id:5,host:"flora.web.telegram.org",port:80}]}};const m=e=>+e<10?`0${e}`:e,r=e=>{const o=new Date(1e3*e);return`${m(o.getHours())}:${m(o.getMinutes())}`};function l(e,o){const a=e.split(" ");let t=0;return a.forEach(e=>{e===o&&t++}),0===t&&a.push(o),a.join(" ")}function h(e,o){return e.split(" ").map(e=>e===o?"":e).join(" ")}const u=[{name:"Afghanistan",dial_code:"+93",code:"AF",emoji:"🇦🇫"},{name:"Aland Islands",dial_code:"+358",code:"AX",emoji:"🇦🇽"},{name:"Albania",dial_code:"+355",code:"AL",emoji:"🇦🇱"},{name:"Algeria",dial_code:"+213",code:"DZ",emoji:"🇩🇿"},{name:"American Samoa",dial_code:"+1 684",code:"AS",emoji:"🇦🇸"},{name:"Andorra",dial_code:"+376",code:"AD",emoji:"🇦🇩"},{name:"Angola",dial_code:"+244",code:"AO",emoji:"🇦🇴"},{name:"Anguilla",dial_code:"+1 264",code:"AI",emoji:"🇦🇮"},{name:"Antarctica",dial_code:"+672",code:"AQ",emoji:"🇦🇶"},{name:"Antigua and Barbuda",dial_code:"+1268",code:"AG",emoji:"🇦🇬"},{name:"Argentina",dial_code:"+54",code:"AR",emoji:"🇦🇷"},{name:"Armenia",dial_code:"+374",code:"AM",emoji:"🇦🇲"},{name:"Aruba",dial_code:"+297",code:"AW",emoji:"🇦🇼"},{name:"Australia",dial_code:"+61",code:"AU",emoji:"🇦🇺"},{name:"Austria",dial_code:"+43",code:"AT",emoji:"🇦🇹"},{name:"Azerbaijan",dial_code:"+994",code:"AZ",emoji:"🇦🇿"},{name:"Bahamas",dial_code:"+1 242",code:"BS",emoji:"🇧🇸"},{name:"Bahrain",dial_code:"+973",code:"BH",emoji:"🇧🇭"},{name:"Bangladesh",dial_code:"+880",code:"BD",emoji:"🇧🇩"},{name:"Barbados",dial_code:"+1 246",code:"BB",emoji:"🇧🇧"},{name:"Belarus",dial_code:"+375",code:"BY",emoji:"🇧🇾"},{name:"Belgium",dial_code:"+32",code:"BE",emoji:"🇧🇪"},{name:"Belize",dial_code:"+501",code:"BZ",emoji:"🇧🇿"},{name:"Benin",dial_code:"+229",code:"BJ",emoji:"🇧🇯"},{name:"Bermuda",dial_code:"+1 441",code:"BM",emoji:"🇧🇲"},{name:"Bhutan",dial_code:"+975",code:"BT",emoji:"🇧🇹"},{name:"Bolivia, Plurinational State of",dial_code:"+591",code:"BO",emoji:"🇧🇴"},{name:"Bosnia and Herzegovina",dial_code:"+387",code:"BA",emoji:"🇧🇦"},{name:"Botswana",dial_code:"+267",code:"BW",emoji:"🇧🇼"},{name:"Brazil",dial_code:"+55",code:"BR",emoji:"🇧🇷"},{name:"British Indian Ocean Territory",dial_code:"+246",code:"IO",emoji:"🇮🇴"},{name:"Brunei Darussalam",dial_code:"+673",code:"BN",emoji:"🇧🇳"},{name:"Bulgaria",dial_code:"+359",code:"BG",emoji:"🇧🇬"},{name:"Burkina Faso",dial_code:"+226",code:"BF",emoji:"🇧🇫"},{name:"Burundi",dial_code:"+257",code:"BI",emoji:"🇧🇮"},{name:"Cambodia",dial_code:"+855",code:"KH",emoji:"🇰🇭"},{name:"Cameroon",dial_code:"+237",code:"CM",emoji:"🇨🇲"},{name:"Canada",dial_code:"+1",code:"CA",emoji:"🇨🇦"},{name:"Cape Verde",dial_code:"+238",code:"CV",emoji:"🇨🇻"},{name:"Cayman Islands",dial_code:"+ 345",code:"KY",emoji:"🇰🇾"},{name:"Central African Republic",dial_code:"+236",code:"CF",emoji:"🇨🇫"},{name:"Chad",dial_code:"+235",code:"TD",emoji:"🇹🇩"},{name:"Chile",dial_code:"+56",code:"CL",emoji:"🇨🇱"},{name:"China",dial_code:"+86",code:"CN",emoji:"🇨🇳"},{name:"Christmas Island",dial_code:"+61",code:"CX",emoji:"🇨🇽"},{name:"Cocos (Keeling) Islands",dial_code:"+61",code:"CC",emoji:"🇨🇨"},{name:"Colombia",dial_code:"+57",code:"CO",emoji:"🇨🇴"},{name:"Comoros",dial_code:"+269",code:"KM",emoji:"🇰🇲"},{name:"Congo",dial_code:"+242",code:"CG",emoji:"🇨🇩"},{name:"Congo, The Democratic Republic of the Congo",dial_code:"+243",code:"CD",emoji:"🇨🇬"},{name:"Cook Islands",dial_code:"+682",code:"CK",emoji:"🇨🇰"},{name:"Costa Rica",dial_code:"+506",code:"CR",emoji:"🇨🇷"},{name:"Cote d'Ivoire",dial_code:"+225",code:"CI",emoji:"🇨🇮"},{name:"Croatia",dial_code:"+385",code:"HR",emoji:"🇭🇷"},{name:"Cuba",dial_code:"+53",code:"CU",emoji:"🇨🇺"},{name:"Cyprus",dial_code:"+357",code:"CY",emoji:"🇨🇾"},{name:"Czech Republic",dial_code:"+420",code:"CZ",emoji:"🇨🇿"},{name:"Denmark",dial_code:"+45",code:"DK",emoji:"🇩🇰"},{name:"Djibouti",dial_code:"+253",code:"DJ",emoji:"🇩🇯"},{name:"Dominica",dial_code:"+1 767",code:"DM",emoji:"🇩🇲"},{name:"Dominican Republic",dial_code:"+1 849",code:"DO",emoji:"🇩🇴"},{name:"Ecuador",dial_code:"+593",code:"EC",emoji:"🇪🇨"},{name:"Egypt",dial_code:"+20",code:"EG",emoji:"🇪🇬"},{name:"El Salvador",dial_code:"+503",code:"SV",emoji:"🇸🇻"},{name:"Equatorial Guinea",dial_code:"+240",code:"GQ",emoji:"🇬🇶"},{name:"Eritrea",dial_code:"+291",code:"ER",emoji:"🇪🇷"},{name:"Estonia",dial_code:"+372",code:"EE",emoji:"🇪🇪"},{name:"Ethiopia",dial_code:"+251",code:"ET",emoji:"🇪🇹"},{name:"Falkland Islands (Malvinas)",dial_code:"+500",code:"FK",emoji:"🇫🇰"},{name:"Faroe Islands",dial_code:"+298",code:"FO",emoji:"🇫🇴"},{name:"Fiji",dial_code:"+679",code:"FJ",emoji:"🇫🇯"},{name:"Finland",dial_code:"+358",code:"FI",emoji:"🇫🇮"},{name:"France",dial_code:"+33",code:"FR",emoji:"🇫🇷"},{name:"French Guiana",dial_code:"+594",code:"GF",emoji:"🇬🇫"},{name:"French Polynesia",dial_code:"+689",code:"PF",emoji:"🇵🇫"},{name:"Gabon",dial_code:"+241",code:"GA",emoji:"🇬🇦"},{name:"Gambia",dial_code:"+220",code:"GM",emoji:"🇬🇲"},{name:"Georgia",dial_code:"+995",code:"GE",emoji:"🇬🇪"},{name:"Germany",dial_code:"+49",code:"DE",emoji:"🇩🇪"},{name:"Ghana",dial_code:"+233",code:"GH",emoji:"🇬🇭"},{name:"Gibraltar",dial_code:"+350",code:"GI",emoji:"🇬🇮"},{name:"Greece",dial_code:"+30",code:"GR",emoji:"🇬🇷"},{name:"Greenland",dial_code:"+299",code:"GL",emoji:"🇬🇱"},{name:"Grenada",dial_code:"+1 473",code:"GD",emoji:"🇬🇩"},{name:"Guadeloupe",dial_code:"+590",code:"GP",emoji:"🇬🇵"},{name:"Guam",dial_code:"+1 671",code:"GU",emoji:"🇬🇺"},{name:"Guatemala",dial_code:"+502",code:"GT",emoji:"🇬🇹"},{name:"Guernsey",dial_code:"+44",code:"GG",emoji:"🇬🇬"},{name:"Guinea",dial_code:"+224",code:"GN",emoji:"🇬🇳"},{name:"Guinea-Bissau",dial_code:"+245",code:"GW",emoji:"🇬🇼"},{name:"Guyana",dial_code:"+595",code:"GY",emoji:"🇬🇾"},{name:"Haiti",dial_code:"+509",code:"HT",emoji:"🇭🇹"},{name:"Holy See (Vatican City State)",dial_code:"+379",code:"VA",emoji:"🇻🇦"},{name:"Honduras",dial_code:"+504",code:"HN",emoji:"🇭🇳"},{name:"Hong Kong",dial_code:"+852",code:"HK",emoji:"🇭🇰"},{name:"Hungary",dial_code:"+36",code:"HU",emoji:"🇭🇺"},{name:"Iceland",dial_code:"+354",code:"IS",emoji:"🇮🇸"},{name:"India",dial_code:"+91",code:"IN",emoji:"🇮🇳"},{name:"Indonesia",dial_code:"+62",code:"ID",emoji:"🇮🇩"},{name:"Iran, Islamic Republic of Persian Gulf",dial_code:"+98",code:"IR",emoji:"🇮🇷"},{name:"Iraq",dial_code:"+964",code:"IQ",emoji:"🇮🇶"},{name:"Ireland",dial_code:"+353",code:"IE",emoji:"🇮🇪"},{name:"Isle of Man",dial_code:"+44",code:"IM",emoji:"🇮🇲"},{name:"Israel",dial_code:"+972",code:"IL",emoji:"🇮🇱"},{name:"Italy",dial_code:"+39",code:"IT",emoji:"🇮🇹"},{name:"Jamaica",dial_code:"+1 876",code:"JM",emoji:"🇯🇲"},{name:"Japan",dial_code:"+81",code:"JP",emoji:"🇯🇵"},{name:"Jersey",dial_code:"+44",code:"JE",emoji:"🇯🇪"},{name:"Jordan",dial_code:"+962",code:"JO",emoji:"🇯🇴"},{name:"Kazakhstan",dial_code:"+7 7",code:"KZ",emoji:"🇰🇿"},{name:"Kenya",dial_code:"+254",code:"KE",emoji:"🇰🇪"},{name:"Kiribati",dial_code:"+686",code:"KI",emoji:"🇰🇮"},{name:"Korea, Democratic People's Republic of Korea",dial_code:"+850",code:"KP",emoji:"🇰🇵"},{name:"Korea, Republic of South Korea",dial_code:"+82",code:"KR",emoji:"🇰🇷"},{name:"Kuwait",dial_code:"+965",code:"KW",emoji:"🇰🇼"},{name:"Kyrgyzstan",dial_code:"+996",code:"KG",emoji:"🇰🇬"},{name:"Laos",dial_code:"+856",code:"LA",emoji:"🇱🇦"},{name:"Latvia",dial_code:"+371",code:"LV",emoji:"🇱🇻"},{name:"Lebanon",dial_code:"+961",code:"LB",emoji:"🇱🇧"},{name:"Lesotho",dial_code:"+266",code:"LS",emoji:"🇱🇸"},{name:"Liberia",dial_code:"+231",code:"LR",emoji:"🇱🇷"},{name:"Libyan Arab Jamahiriya",dial_code:"+218",code:"LY",emoji:"🇱🇾"},{name:"Liechtenstein",dial_code:"+423",code:"LI",emoji:"🇱🇮"},{name:"Lithuania",dial_code:"+370",code:"LT",emoji:"🇱🇹"},{name:"Luxembourg",dial_code:"+352",code:"LU",emoji:"🇱🇺"},{name:"Macao",dial_code:"+853",code:"MO",emoji:"🇲🇴"},{name:"Macedonia",dial_code:"+389",code:"MK",emoji:"🇲🇰"},{name:"Madagascar",dial_code:"+261",code:"MG",emoji:"🇲🇬"},{name:"Malawi",dial_code:"+265",code:"MW",emoji:"🇲🇼"},{name:"Malaysia",dial_code:"+60",code:"MY",emoji:"🇲🇾"},{name:"Maldives",dial_code:"+960",code:"MV",emoji:"🇲🇻"},{name:"Mali",dial_code:"+223",code:"ML",emoji:"🇲🇱"},{name:"Malta",dial_code:"+356",code:"MT",emoji:"🇲🇹"},{name:"Marshall Islands",dial_code:"+692",code:"MH",emoji:"🇲🇭"},{name:"Martinique",dial_code:"+596",code:"MQ",emoji:"🇲🇶"},{name:"Mauritania",dial_code:"+222",code:"MR",emoji:"🇲🇷"},{name:"Mauritius",dial_code:"+230",code:"MU",emoji:"🇲🇺"},{name:"Mayotte",dial_code:"+262",code:"YT",emoji:"🇾🇹"},{name:"Mexico",dial_code:"+52",code:"MX",emoji:"🇲🇽"},{name:"Micronesia, Federated States of Micronesia",dial_code:"+691",code:"FM",emoji:"🇫🇲"},{name:"Moldova",dial_code:"+373",code:"MD",emoji:"🇲🇩"},{name:"Monaco",dial_code:"+377",code:"MC",emoji:"🇲🇨"},{name:"Mongolia",dial_code:"+976",code:"MN",emoji:"🇲🇳"},{name:"Montenegro",dial_code:"+382",code:"ME",emoji:"🇲🇪"},{name:"Montserrat",dial_code:"+1664",code:"MS",emoji:"🇲🇸"},{name:"Morocco",dial_code:"+212",code:"MA",emoji:"🇲🇦"},{name:"Mozambique",dial_code:"+258",code:"MZ",emoji:"🇲🇿"},{name:"Myanmar",dial_code:"+95",code:"MM",emoji:"🇲🇲"},{name:"Namibia",dial_code:"+264",code:"NA",emoji:"🇳🇦"},{name:"Nauru",dial_code:"+674",code:"NR",emoji:"🇳🇷"},{name:"Nepal",dial_code:"+977",code:"NP",emoji:"🇳🇵"},{name:"Netherlands",dial_code:"+31",code:"NL",emoji:"🇳🇱"},{name:"Netherlands Antilles",dial_code:"+599",code:"AN",emoji:"🇧🇶"},{name:"New Caledonia",dial_code:"+687",code:"NC",emoji:"🇳🇨"},{name:"New Zealand",dial_code:"+64",code:"NZ",emoji:"🇳🇿"},{name:"Nicaragua",dial_code:"+505",code:"NI",emoji:"🇳🇮"},{name:"Niger",dial_code:"+227",code:"NE",emoji:"🇳🇪"},{name:"Nigeria",dial_code:"+234",code:"NG",emoji:"🇳🇬"},{name:"Niue",dial_code:"+683",code:"NU",emoji:"🇳🇺"},{name:"Norfolk Island",dial_code:"+672",code:"NF",emoji:"🇳🇫"},{name:"Northern Mariana Islands",dial_code:"+1 670",code:"MP",emoji:"🇲🇵"},{name:"Norway",dial_code:"+47",code:"NO",emoji:"🇳🇴"},{name:"Oman",dial_code:"+968",code:"OM",emoji:"🇴🇲"},{name:"Pakistan",dial_code:"+92",code:"PK",emoji:"🇵🇰"},{name:"Palau",dial_code:"+680",code:"PW",emoji:"🇵🇼"},{name:"Palestinian Territory, Occupied",dial_code:"+970",code:"PS",emoji:"🇵🇸"},{name:"Panama",dial_code:"+507",code:"PA",emoji:"🇵🇦"},{name:"Papua New Guinea",dial_code:"+675",code:"PG",emoji:"🇵🇬"},{name:"Paraguay",dial_code:"+595",code:"PY",emoji:"🇵🇾"},{name:"Peru",dial_code:"+51",code:"PE",emoji:"🇵🇪"},{name:"Philippines",dial_code:"+63",code:"PH",emoji:"🇵🇭"},{name:"Pitcairn",dial_code:"+872",code:"PN",emoji:"🇵🇳"},{name:"Poland",dial_code:"+48",code:"PL",emoji:"🇵🇱"},{name:"Portugal",dial_code:"+351",code:"PT",emoji:"🇵🇹"},{name:"Puerto Rico",dial_code:"+1 939",code:"PR",emoji:"🇵🇷"},{name:"Qatar",dial_code:"+974",code:"QA",emoji:"🇶🇦"},{name:"Romania",dial_code:"+40",code:"RO",emoji:"🇷🇴"},{name:"Russia",dial_code:"+7",code:"RU",emoji:"🇷🇺"},{name:"Rwanda",dial_code:"+250",code:"RW",emoji:"🇷🇼"},{name:"Reunion",dial_code:"+262",code:"RE",emoji:"🇷🇪"},{name:"Saint Barthelemy",dial_code:"+590",code:"BL",emoji:"🇧🇱"},{name:"Saint Helena, Ascension and Tristan Da Cunha",dial_code:"+290",code:"SH",emoji:"🇸🇭"},{name:"Saint Kitts and Nevis",dial_code:"+1 869",code:"KN",emoji:"🇰🇳"},{name:"Saint Lucia",dial_code:"+1 758",code:"LC",emoji:"🇱🇨"},{name:"Saint Martin",dial_code:"+590",code:"MF",emoji:"🇲🇫"},{name:"Saint Pierre and Miquelon",dial_code:"+508",code:"PM",emoji:"🇵🇲"},{name:"Saint Vincent and the Grenadines",dial_code:"+1 784",code:"VC",emoji:"🇻🇨"},{name:"Samoa",dial_code:"+685",code:"WS",emoji:"🇼🇸"},{name:"San Marino",dial_code:"+378",code:"SM",emoji:"🇸🇲"},{name:"Sao Tome and Principe",dial_code:"+239",code:"ST",emoji:"🇸🇹"},{name:"Saudi Arabia",dial_code:"+966",code:"SA",emoji:"🇸🇦"},{name:"Senegal",dial_code:"+221",code:"SN",emoji:"🇸🇳"},{name:"Serbia",dial_code:"+381",code:"RS",emoji:"🇷🇸"},{name:"Seychelles",dial_code:"+248",code:"SC",emoji:"🇸🇨"},{name:"Sierra Leone",dial_code:"+232",code:"SL",emoji:"🇸🇱"},{name:"Singapore",dial_code:"+65",code:"SG",emoji:"🇸🇬"},{name:"Slovakia",dial_code:"+421",code:"SK",emoji:"🇸🇰"},{name:"Slovenia",dial_code:"+386",code:"SI",emoji:"🇸🇮"},{name:"Solomon Islands",dial_code:"+677",code:"SB",emoji:"🇸🇧"},{name:"Somalia",dial_code:"+252",code:"SO",emoji:"🇸🇴"},{name:"South Africa",dial_code:"+27",code:"ZA",emoji:"🇿🇦"},{name:"South Georgia and the South Sandwich Islands",dial_code:"+500",code:"GS",emoji:"🇬🇸"},{name:"Spain",dial_code:"+34",code:"ES",emoji:"🇪🇸"},{name:"Sri Lanka",dial_code:"+94",code:"LK",emoji:"🇱🇰"},{name:"Sudan",dial_code:"+249",code:"SD",emoji:"🇸🇩"},{name:"Suriname",dial_code:"+597",code:"SR",emoji:"🇸🇷"},{name:"Svalbard and Jan Mayen",dial_code:"+47",code:"SJ",emoji:"🇸🇯"},{name:"Swaziland",dial_code:"+268",code:"SZ",emoji:"🇸🇿"},{name:"Sweden",dial_code:"+46",code:"SE",emoji:"🇸🇪"},{name:"Switzerland",dial_code:"+41",code:"CH",emoji:"🇨🇭"},{name:"Syrian Arab Republic",dial_code:"+963",code:"SY",emoji:"🇸🇾"},{name:"Taiwan",dial_code:"+886",code:"TW",emoji:"🇹🇼"},{name:"Tajikistan",dial_code:"+992",code:"TJ",emoji:"🇹🇯"},{name:"Tanzania, United Republic of Tanzania",dial_code:"+255",code:"TZ",emoji:"🇹🇿"},{name:"Thailand",dial_code:"+66",code:"TH",emoji:"🇹🇭"},{name:"Timor-Leste",dial_code:"+670",code:"TL",emoji:"🇹🇱"},{name:"Togo",dial_code:"+228",code:"TG",emoji:"🇹🇬"},{name:"Tokelau",dial_code:"+690",code:"TK",emoji:"🇹🇰"},{name:"Tonga",dial_code:"+676",code:"TO",emoji:"🇹🇴"},{name:"Trinidad and Tobago",dial_code:"+1 868",code:"TT",emoji:"🇹🇹"},{name:"Tunisia",dial_code:"+216",code:"TN",emoji:"🇹🇳"},{name:"Turkey",dial_code:"+90",code:"TR",emoji:"🇹🇷"},{name:"Turkmenistan",dial_code:"+993",code:"TM",emoji:"🇹🇲"},{name:"Turks and Caicos Islands",dial_code:"+1 649",code:"TC",emoji:"🇹🇨"},{name:"Tuvalu",dial_code:"+688",code:"TV",emoji:"🇹🇻"},{name:"Uganda",dial_code:"+256",code:"UG",emoji:"🇺🇬"},{name:"Ukraine",dial_code:"+380",code:"UA",emoji:"🇺🇦"},{name:"United Arab Emirates",dial_code:"+971",code:"AE",emoji:"🇦🇪"},{name:"United Kingdom",dial_code:"+44",code:"GB",emoji:"🇬🇧"},{name:"United States",dial_code:"+1",code:"US",emoji:"🇺🇸"},{name:"Uruguay",dial_code:"+598",code:"UY",emoji:"🇺🇾"},{name:"Uzbekistan",dial_code:"+998",code:"UZ",emoji:"🇺🇿"},{name:"Vanuatu",dial_code:"+678",code:"VU",emoji:"🇻🇺"},{name:"Venezuela, Bolivarian Republic of Venezuela",dial_code:"+58",code:"VE",emoji:"🇻🇪"},{name:"Vietnam",dial_code:"+84",code:"VN",emoji:"🇻🇳"},{name:"Virgin Islands, British",dial_code:"+1 284",code:"VG",emoji:"🇻🇬"},{name:"Virgin Islands, U.S.",dial_code:"+1 340",code:"VI",emoji:"🇻🇮"},{name:"Wallis and Futuna",dial_code:"+681",code:"WF",emoji:"🇼🇫"},{name:"Yemen",dial_code:"+967",code:"YE",emoji:"🇾🇪"},{name:"Zambia",dial_code:"+260",code:"ZM",emoji:"🇿🇲"},{name:"Zimbabwe",dial_code:"+263",code:"ZW",emoji:"🇿🇼"}];a(4);var _=class{constructor(){this.api=telegramApi,this.userAuth=s.getObject("user_auth"),this.limit=20,this.currentChatId=0,this.params="",this.scrollMessageId="",this.offset=0,this.messagesWereLoaded=!0,this.chatsOffset=0,this.chatsWereLoaded=!1}sendMessage(){const e=this;this.currentChatId&&document.getElementById("sendInput").innerHTML&&this.api.sendMessage(this.currentChatId,document.getElementById("sendInput").innerHTML).then((function(o){document.getElementById("sendInput").innerHTML="",e.onUpdate(o)}))}onKeyUpInput(e){console.log(e),e.preventDefault(),"Enter"===e.key&&this.sendMessage()}setChatInfo(e){const o=`avatar-${e.id}`,a=document.getElementById(o),t=a.style.backgroundImage?`background-image: ${a.style.backgroundImage}`:"";""===a.innerText&&(t||setTimeout(()=>this.setChatInfo(e),500)),document.getElementById("chatInfo").innerHTML=`\n    <div class="im__info-container">\n      <div class="im__info-item">\n      <div class="im__info-item-avatar" style='${t||""}'>\n        ${t?"":a.innerText}\n      </div>\n      <div class="im__info-item-title">\n      <div class="im__info-item-title-text">${e.title?e.title:wordsList.deletedAccount}</div>\n      </div>\n      <div class="im__info-item-status">Online</div>\n      </div>\n    </div>`}setActiveChat(e){console.log("setActiveChat",e),document.querySelector(".chats__item_active")&&document.querySelector(".chats__item_active").classList.remove("chats__item_active"),document.getElementById(`chat-${e.id}`).classList.add("chats__item_active");const o={id:"user"===e.type?e.id:-e.id,type:e.type};this.currentChatId=o.id,this.loadMessages(o,!0,e.lastReadId),document.getElementById("sendMessage").style.display="flex"}scrollMessages(){if(0===document.getElementById("messagesScroll").scrollTop&&!this.messagesWereLoaded){const e={...this.params,skip:this.offset};this.loadMessages(e)}}addMessage(e,o=!1,a=!1,t){console.log("item",e);const i=new Object({id:e.id,message:e.message,timestamp:e.date,date:r(e.date),is_outgoing:e.from_id===this.userAuth.id}),n=document.createElement("div");if(n.className=`messages__item ${e.arrow?"messages__item_arrow":""}`,n.id=`message-${i.id}`,i.is_outgoing&&(n.className=`messages__item messages__item_out ${e.arrow?"messages__item_arrow":""}`),n.innerHTML=`\n    <div class="messages__item-avatar"></div>\n    <div class="messages__item-text">\n      <span class="messages__item-text-content">\n      ${i.message}\n      </span>  \n      <span class="messages__item-time">\n        ${i.is_outgoing?`${t>=e.id?'<div class="arrow-read"></div>':'<div class="arrow"></div>'}`:""}\n        ${i.date}\n      </span>\n    </div>`,o){document.getElementById("messages").append(n);const e=document.getElementById("messagesScroll");e.scrollTop=e.scrollHeight}else if(document.getElementById("messages").prepend(n),a){const e=document.getElementById("messagesScroll");e.scrollTop=e.scrollHeight}else{document.getElementById("messagesScroll").scrollTop=document.getElementById(`message-${this.scrollMessageId}`).offsetTop}}loadMessages(e,o=!1,a){o&&(this.offset=0,document.getElementById("messages").innerHTML=""),e.take=this.limit,this.params=e,this.api.getHistory(e).then(e=>{const{messages:t}=e;console.log("getMEssage",t),t.length<this.limit&&(this.messagesWereLoaded=!0),this.offset=this.offset+this.limit,t[0].id&&(this.scrollMessageId=t[0].id);let i=0;if(t.forEach(e=>{i===e.from_id?e.arrow=!1:(e.arrow=!0,i=e.from_id),this.addMessage(e,!1,o,a)}),o){this.messagesWereLoaded=!1;const e=document.getElementById("messagesScroll");e.scrollTop=e.scrollHeight}})}getChats(e,o=0){o||this.setChatLoader(!0),this.api.getDialogs(e,this.limit).then(e=>{const{result:a,offset:t}=e,{dialogs:i,messages:n,chats:d,users:s}=a;i.length<this.limit&&(this.chatsWereLoaded=!0),this.chatsOffset=t,i.forEach(e=>{o?(o<0&&(o=-o),e.peer.channel_id!==o&&e.peer.user_id!==o&&e.peer.chat_id!==o||this.configureChat(e,n,d,s,!0)):this.configureChat(e,n,d,s)}),console.log("ENDDD!!!!!!"),this.setChatLoader(!1)}).catch(e=>{this.setChatLoader(!1),console.error(e)})}setChatLoader(e){const o=document.getElementById("chatLoader");o.style.display=e?"flex":"none"}configureChat(e,o,a,t,i=!1){const n=new Object({arrow:"",arrowClass:e.read_outbox_max_id>=e.top_message?"arrow-read":"arrow",lastReadId:e.read_outbox_max_id,id:"",access_hash:"",avatar:"",title:"",message:"",mute:!!e.notify_settings.mute_until,peer:e.peer,pinned:!!e.pFlags.pinned,flags:e.flags,date:"",timestamp:"",type:"",unread_count:e.unread_count,isChannel:!1});if(o.forEach(o=>{e.top_message===o.id&&(n.arrow=o.from_id===this.userAuth.id,n.message=o,n.timestamp=o.date,n.date=function(e){const o=new Date(1e3*e),a=new Date;let t="";if(a-o<864e5)t=r(e);else if(a-o<6048e5){t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][o.getDay()]}else{t=`${m(o.getMonth()+1)}/${m(o.getDate())}/${`${o.getFullYear()}`.replace("20","")}`}return t}(o.date))}),"peerUser"===e.peer._?t.forEach(o=>{e.peer.user_id===o.id&&(n.id=o.id,n.title=`${o.first_name?o.first_name:""} ${o.last_name?o.last_name:""}`,n.access_hash=o.access_hash?o.access_hash:"",n.avatar=o.photo?o.photo.photo_small:"",n.type="user")}):a.forEach(o=>{e.peer.channel_id!==o.id&&e.peer.chat_id!==o.id||(n.id=o.id,n.title=o.title,n.access_hash=o.access_hash?o.access_hash:"",n.isChannel=!0,n.avatar=o.photo?o.photo.photo_small:"",n.type=e.peer.channel_id?"channel":"chat")}),document.getElementById(`avatar-${n.id}`)&&(n.avatarNode=document.getElementById(`avatar-${n.id}`).cloneNode(),n.avatarNode.innerHTML=document.getElementById(`avatar-${n.id}`).innerHTML),this.addChat(n,i),!i||document.getElementById(`avatar-${n.id}`))if(n.avatar){const e=n.avatar;e._="inputFileLocation",this.api.invokeApi("upload.getFile",{location:e,offset:0,limit:1048576}).then(e=>{const o=`data:image/jpeg;base64,${btoa(String.fromCharCode.apply(null,e.bytes))}`;document.getElementById(`avatar-${n.id}`).style.backgroundImage=`url(${o})`}).catch(e=>{console.error(e),document.getElementById(`avatar-${n.id}`).innerHTML=this.getDefaultAvatarText(n.title),document.getElementById(`avatar-${n.id}`).style.backgroundColor=this.getRandomColor()})}else document.getElementById(`avatar-${n.id}`).innerHTML=this.getDefaultAvatarText(n.title),document.getElementById(`avatar-${n.id}`).style.backgroundColor=this.getRandomColor()}scrollChats(){const e=document.getElementById("chatsScroll");e.scrollHeight-e.offsetHeight===e.scrollTop&&(this.chatsWereLoaded||this.getChats(this.chatsOffset))}getMessage(e){if(e.message)return e.message;if(e.media){let o;switch(e.media._){case"messageMediaDocument":e.media.document.attributes?e.media.document.attributes.forEach(e=>{if(!o)switch(e._){case"documentAttributeSticker":o=e.alt+" Sticker";break;case"documentAttributeFilename":o=e.file_name;break;case"documentAttributeAudio":o=e.pFlags.voice?"Voice Message":"Audio"}}):o="Document";break;case"messageMediaPhoto":o=e.media.caption?`🖼️${e.media.caption}`:"Photo";break;case"messageMediaGeo":o="Location";break;default:console.log("MEDIAA",e)}return o}if("messageService"===e._){let o;switch(e.action._){case"messageActionChatAddUser":o="join the group";break;case"messageActionCustomAction":o=e.action.message;break;case"messageActionChatMigrateTo":o="messageActionChatMigrateTo";break;case"messageActionChatDeleteUser":o="messageActionChatDeleteUser";break;case"messageActionChatEditTitle":o=`channel renamed to "${e.action.title}"`}return o}}getDefaultAvatarText(e){if(e){const o=e.split(" ");return 1===o.length?o[0].charAt(0)+o[0].charAt(1):o[0].charAt(0)+o[1].charAt(0)}return""}getRandomColor(){return["#28a745","#d73a49","#6f42c1","#0366d6","#f66a0a"][Math.floor(5*Math.random())]}addChat(e,o=!1){const a=`avatar-${e.id}`,t=document.createElement("div");t.className="chats__item",t.id=`chat-${e.id}`,t.innerHTML=`\n    ${e.avatarNode?"":`<div id='${a}' class="chats__item-avatar"></div>`}\n    <div class="chats__item-title">\n        <div class="chats__item-title-text" title="${e.title}">${e.title}</div>\n        ${e.mute?'<div class="chats__item-mute-icon"></div>':""}\n    </div>\n    <div class="chats__item-last">${e.arrow?"You: ":""}${this.getMessage(e.message)}</div>\n    <div class="chats__item-time">\n        ${e.arrow?`<div class="${e.arrowClass}"></div>`:""}\n        ${e.date}\n    </div>\n    ${e.pinned&&!e.unread_count?'<div class="chats__item-pinned"></div>':""}\n    ${e.unread_count?`<div class="chats__item-unread ${e.mute?"chats__item-unread_mute":""}">${e.unread_count}</div>`:""}`,t.addEventListener("click",()=>this.setActiveChat(e)),t.addEventListener("click",()=>this.setChatInfo(e)),e.avatarNode&&t.prepend(e.avatarNode),o?(this.deleteChat(e.id),e.pinned?document.getElementById("pinnedChats").prepend(t):document.getElementById("chats").prepend(t)):e.pinned?document.getElementById("pinnedChats").append(t):document.getElementById("chats").append(t),console.log("RENDER CHAT")}deleteChat(e){document.getElementById(`chat-${e}`)&&document.getElementById(`chat-${e}`).remove()}onUpdate(e){console.log("onUpdate",e,e._);const o=this;if("updates"===e._){const{updates:a}=e;a.forEach(e=>{e&&o.checkUpdate(e)})}else o.checkUpdate(e)}checkUpdate(e){switch(e._){case"updateNewMessage":{const{from_id:o,to_id:a}=e.message;if(a.chat_id)this.getChats(0,a.chat_id),-this.currentChatId===a.chat_id&&this.addMessage(e.message,!0);else{const t=o===this.userAuth.id?a.user_id:o;this.getChats(0,t),this.currentChatId===o&&this.addMessage(e.message,!0)}break}case"updateEditChannelMessage":case"updateNewChannelMessage":{const{to_id:o}=e.message;this.getChats(0,o.channel_id),-this.currentChatId===o.channel_id&&this.addMessage(e.message,!0);break}case"updateShortMessage":this.getChats(0,e.user_id),this.currentChatId===e.user_id&&this.addMessage(e,!0);break;case"updateShortSentMessage":this.api.getMessages(e.id).then(e=>{const{messages:o}=e,a=o[0];"peerUser"===a.to_id._?this.getChats(0,a.to_id.user_id):"peerChat"===a.to_id._?this.getChats(0,a.to_id.chat_id):this.getChats(0,a.to_id.channel_id),this.addMessage(a,!0)}).catch(e=>{console.log(e)});break;case"updateShortChatMessage":this.getChats(0,e.chat_id),-this.currentChatId===e.chat_id&&this.addMessage(e,!0)}}render(){const e=this;this.setChatLoader(!0),this.userAuth?(this.getChats(),this.api.subscribe(this.userAuth.id,e=>this.onUpdate(e))):this.api.invokeApi("users.getFullUser",{id:{_:"inputUserSelf"}}).then((function(o){s.setObject("user_auth",o.user),e.userAuth=o.user,e.getChats(),e.api.subscribe(o.user.id,e=>selt.onUpdate(e))})),document.getElementById("chatsScroll").onscroll=()=>this.scrollChats(),document.getElementById("messagesScroll").onscroll=()=>this.scrollMessages(),document.getElementById("sendButton").addEventListener("click",()=>this.sendMessage()),document.getElementById("sendInput").addEventListener("keyup",e=>this.onKeyUpInput(e))}},g=a(0),p=a.n(g);var j=class{constructor(){this.client=telegramApi,this.options={dcID:2,createNetworker:!0}}setUser(e){s.setObject("auth_user",e)}getUser(){return s.getObject("auth_user")}getCountry(){return this.client.invokeApi("help.getNearestDc",{},this.options)}sendCode(e){const o=p.a.defer(),a={flags:0,phone_number:e,api_id:c.app.id,api_hash:c.app.hash,lang_code:"en"};return this.client.invokeApi("auth.sendCode",a,this.options).then((function(e){o.resolve(e)}),(function(e){o.reject(e)})),o.promise}checkConfirmCode(e,o,a){const t=p.a.defer(),i=this,n={phone_number:e,phone_code_hash:o,phone_code:a};return this.client.invokeApi("auth.signIn",n,this.options).then(e=>{console.log("signIn success",e),i.setUser(e.user),t.resolve(e.user)},e=>{console.log("Sign In error",e),t.reject(e)}),t.promise}getPasswordState(){const e=p.a.defer();return this.client.invokeApi("account.getPassword",{},this.options).then(o=>{console.log("result",o),e.resolve(o)}).catch(o=>{e.reject(o)}),e.promise}checkPassword(e,o){return this.client.checkPasswordHash(e,o)}};a(7);var f=class{constructor(e,o){this.api=new j,this.router=e,this.salt=o,this.showPassword=!1}sendPasswordCode(e,o){this.api.checkPassword(this.salt,e).then(e=>{console.log("this.api.checkPassword !!!!!!!!!!!",e),this.router.goToRoute("im.html",()=>{(new _).render()})}).catch(e=>{console.error(e),o.className=l(o.className,"password__input_error")})}setLabel(e,o,a){e.length>0?(o.className=l(o.className,"password__input_active"),a.style.visibility="visible",a.style.opacity="0.5"):(o.className=h(o.className,"password__input_active"),a.style.opacity="0")}showPasswordCode(e,o,a){this.showPassword?(e.className="password__input-eye",o.className="password__img",a.type="password"):(e.className="password__input-eye password__input-eye_active",o.className="password__img password__img_show",a.type="text"),this.showPassword=!this.showPassword}render(){const e=document.getElementById("passwordInput"),o=document.getElementById("passwordEye"),a=document.getElementById("passwordImg"),t=document.getElementById("passwordCode"),i=document.getElementById("passwordButton");e.addEventListener("keyup",()=>this.setLabel(t.value,e,o)),i.addEventListener("click",()=>this.sendPasswordCode(t.value,e)),o.addEventListener("click",()=>this.showPasswordCode(o,a,t))}};a(8);var y=class{constructor(e,o,a){this.router=e,this.phoneNumber=o,this.phoneCodeHash=a,this.api=new j,this.state={confirmPhone:"",confirmCodeInput:""}}sendConfirmCode(e){e.length>0?this.state.confirmCodeInput.className=l(this.state.confirmCodeInput.className,"confirm__input_active"):this.state.confirmCodeInput.className=h(this.state.confirmCodeInput.className,"confirm__input_active"),5===e.length&&this.api.checkConfirmCode(this.phoneNumber,this.phoneCodeHash,e).then(e=>{console.log("response",e),this.router.goToRoute("im.html",()=>{(new _).render()})}).catch(e=>{"SESSION_PASSWORD_NEEDED"===e.type?this.api.getPasswordState().then(e=>{this.router.goToRoute("password.html",()=>{new f(this.router,e.current_salt).render()})}):(console.error(e),420!==e.code&&(this.state.confirmCodeInput.className=l(this.state.confirmCodeInput.className,"confirm__input_error")))})}sendCodeForNewPhone(e){this.state.confirmPhone.style.color="#000000",e!==this.phoneNumber&&this.api.sendCode(e).then(o=>{this.phoneNumber=e,this.phoneCodeHash=o.phone_code_hash}).catch(e=>{console.error(e),this.state.confirmPhone.style.color="#E53834"})}changeEventPressEnter(e){13===e.keyCode&&(this.state.confirmPhone.disabled=!0,this.sendCodeForNewPhone(this.state.confirmPhone.value)),this.state.confirmPhone.value.length>4&&(this.state.confirmPhone.style.width=`${20*this.state.confirmPhone.value.length}px`)}changeEventFocuOut(){this.state.confirmPhone.disabled=!0,this.sendCodeForNewPhone(this.state.confirmPhone.value)}changePhoneNumber(){this.state.confirmPhone.disabled=!1,this.state.confirmPhone.focus(),this.state.confirmPhone.selectionStart=this.state.confirmPhone.value.length,this.state.confirmPhone.addEventListener("focusout",()=>this.changeEventFocuOut()),this.state.confirmPhone.addEventListener("keyup",e=>this.changeEventPressEnter(e))}render(){this.state.confirmPhone=document.getElementById("confirmPhone"),this.state.confirmCodeInput=document.getElementById("confirmInput");const e=document.getElementById("confirmCode");document.getElementById("editPhoneNumber").addEventListener("click",()=>this.changePhoneNumber()),this.state.confirmPhone.value=this.phoneNumber,this.state.confirmPhone.style.width=`${20*this.state.confirmPhone.value.length}px`,this.state.confirmCodeInput.addEventListener("keyup",()=>this.sendConfirmCode(e.value))}};a(9);var v=class{constructor(e){this.router=e,this.api=new j,this.isReadyForSending=!0,this.state={countryId:"",countryInput:"",phoneNumber:"",phoneNumberInput:"",phoneNumberSendButton:"",countryArrow:""}}sendPhoneNumber(e){this.isReadyForSending&&(this.state.phoneNumberSendButton.innerText="PLEASE WAIT...",this.isReadyForSending=!1,setTimeout(()=>{this.isReadyForSending=!0,this.state.phoneNumberSendButton.innerText="NEXT"},3e3),this.api.sendCode(e).then(o=>{console.log(o),console.log("phone_registered",o.phone_registered);const a=o.phone_code_hash,t=o._;this.router.goToRoute("confirm.html",()=>{new y(this.router,e,a,t).render()})}).catch(e=>{this.state.phoneNumberInput.className=l(this.state.phoneNumberInput.className,"login__input_error")}))}onChangePhone(e){e.length>0?this.state.phoneNumberInput.className=l(this.state.phoneNumberInput.className,"login__input_active"):this.state.phoneNumberInput.className=h(this.state.phoneNumberInput.className,"login__input_active"),e.length>2?this.state.phoneNumberSendButton.className=l(this.state.phoneNumberSendButton.className,"show"):this.state.phoneNumberSendButton.className=h(this.state.phoneNumberSendButton.className,"show")}showCountriesList(){this.state.countryArrow.className=l(this.state.countryArrow.className,"active"),this.countryBox(this.state.countryId.value),document.getElementById("countriesList").className="countriesList show";const e=document.getElementById("closeZone");e.className="closeZone show",e.addEventListener("click",()=>this.hideCountriesList())}hideCountriesList(){this.state.countryArrow.className=h(this.state.countryArrow.className,"active"),document.getElementById("countriesList").className="countriesList",document.getElementById("closeZone").className="closeZone"}setCountry(e,o){this.state.countryId.value=e,this.state.phoneNumber.value=o,this.countryBox(e),this.onChangePhone(o),this.hideCountriesList()}getDefaultCountry(e){u.forEach(o=>{o.code===e&&this.setCountry(o.name,o.dial_code)})}countryBox(e){e.length>0?this.state.countryInput.className=l(this.state.countryInput.className,"login__input_active"):this.state.countryInput.className=h(this.state.countryInput.className,"login__input_active");const o=document.getElementById("countriesList");o.innerHTML="";let a=0;if(u.forEach(t=>{if(t.name.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1){const e=document.createElement("div");e.className="countryItem",e.innerHTML=`<div class="flag">${t.emoji?t.emoji:""}</div>\n           <div class='name'>${t.name}</div>\n           <div class='code'>${t.dial_code}</div>`,e.addEventListener("click",()=>this.setCountry(t.name,t.dial_code)),o.append(e),a++}}),0===a){const e=document.createElement("div");e.className="countryItem",e.innerHTML='<div class="name">Nothing found</div>',o.append(e)}}onFocusCountry(){this.state.countryInput.className=l(this.state.countryInput.className,"login__input_focused"),this.state.phoneNumberInput.className=h(this.state.phoneNumberInput.className,"login__input_focused"),this.showCountriesList()}onFocusPhone(){this.state.phoneNumberInput.className=l(this.state.phoneNumberInput.className,"login__input_focused"),this.state.countryInput.className=h(this.state.countryInput.className,"login__input_focused")}getCountryFromApi(){console.log("getCountryFromApi"),this.api.getCountry().then(e=>{console.log("response",e),this.getDefaultCountry(e.country)}).catch(e=>{console.log("error",e),setTimeout(()=>this.getCountryFromApi(),300)})}render(){this.state.countryId=document.getElementById("countryId"),this.state.countryInput=document.getElementById("countryInput"),this.state.phoneNumber=document.getElementById("phoneNumber"),this.state.phoneNumberInput=document.getElementById("phoneInput"),this.state.phoneNumberSendButton=document.getElementById("phoneNumberButton"),this.state.phoneNumber.addEventListener("keyup",()=>this.onChangePhone(phoneNumber.value)),this.state.countryId.addEventListener("keyup",()=>this.countryBox(this.state.countryId.value)),this.state.countryId.addEventListener("focusin",()=>this.onFocusCountry()),this.state.phoneNumber.addEventListener("focusin",()=>this.onFocusPhone()),this.state.phoneNumberSendButton.addEventListener("click",()=>this.sendPhoneNumber(phoneNumber.value)),this.state.countryArrow=document.getElementById("countryArrow"),this.getCountryFromApi()}};a(10);class I{constructor(){this.router={},this.api=telegramApi,this.isAuth=s.getObject("user_auth")}init(){this.api.setConfig(c),this.router=new i([new d("login","login.html"),new d("confirm","confirm.html"),new d("registration","registration.html"),new d("password","password.html"),new d("im","im.html")]),this.isAuth?this.router.goToRoute("im.html",()=>{(new _).render()}):this.router.goToRoute("login.html",()=>{new v(this.router).render()})}}(new I).init()}]);