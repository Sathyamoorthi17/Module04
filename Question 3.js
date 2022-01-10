// Display all countries name, region, sub region and population

var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true);

request.send();

request.onload=function(){
    var data=JSON.parse(this.response);

    for ( var i=0;i<data.length;i++){
        console.log(`${data[i].name} , Region : ${data[i].region} , Subregion : ${data[i].subregion} , Population : ${data[i].population}`);
    }

};

// Output : 


//   Afghanistan , Region : Asia , Subregion : Southern Asia , Population : 40218234
//   Åland Islands , Region : Europe , Subregion : Northern Europe , Population : 28875
//   Albania , Region : Europe , Subregion : Southern Europe , Population : 2837743
//   Algeria , Region : Africa , Subregion : Northern Africa , Population : 43851043
//   American Samoa , Region : Oceania , Subregion : Polynesia , Population : 55197
//   Andorra , Region : Europe , Subregion : Southern Europe , Population : 77265
//   Angola , Region : Africa , Subregion : Middle Africa , Population : 32866268
//   Anguilla , Region : Americas , Subregion : Caribbean , Population : 13452
//   Antarctica , Region : Polar , Subregion : Antarctica , Population : 1000
//   Antigua and Barbuda , Region : Americas , Subregion : Caribbean , Population : 97928
//   Argentina , Region : Americas , Subregion : South America , Population : 45376763
//   Armenia , Region : Asia , Subregion : Western Asia , Population : 2963234
//   Aruba , Region : Americas , Subregion : Caribbean , Population : 106766
//   Australia , Region : Oceania , Subregion : Australia and New Zealand , Population : 25687041
//   Austria , Region : Europe , Subregion : Central Europe , Population : 8917205
//   Azerbaijan , Region : Asia , Subregion : Western Asia , Population : 10110116
//   Bahamas , Region : Americas , Subregion : Caribbean , Population : 393248
//   Bahrain , Region : Asia , Subregion : Western Asia , Population : 1701583
//   Bangladesh , Region : Asia , Subregion : Southern Asia , Population : 164689383
//   Barbados , Region : Americas , Subregion : Caribbean , Population : 287371
//   Belarus , Region : Europe , Subregion : Eastern Europe , Population : 9398861
//   Belgium , Region : Europe , Subregion : Western Europe , Population : 11555997
//   Belize , Region : Americas , Subregion : Central America , Population : 397621
//   Benin , Region : Africa , Subregion : Western Africa , Population : 12123198
//   Bermuda , Region : Americas , Subregion : Northern America , Population : 63903
//   Bhutan , Region : Asia , Subregion : Southern Asia , Population : 771612
//   Bolivia (Plurinational State of) , Region : Americas , Subregion : South America , Population : 11673029
//   Bonaire, Sint Eustatius and Saba , Region : Americas , Subregion : Caribbean , Population : 17408
//   Bosnia and Herzegovina , Region : Europe , Subregion : Southern Europe , Population : 3280815
//   Botswana , Region : Africa , Subregion : Southern Africa , Population : 2351625
//   Bouvet Island , Region : Antarctic Ocean , Subregion : South Antarctic Ocean , Population : 0
//   Brazil , Region : Americas , Subregion : South America , Population : 212559409
//   British Indian Ocean Territory , Region : Africa , Subregion : Eastern Africa , Population : 3000
//   United States Minor Outlying Islands , Region : Americas , Subregion : Northern America , Population : 300
//   Virgin Islands (British) , Region : Americas , Subregion : Caribbean , Population : 30237
//   Virgin Islands (U.S.) , Region : Americas , Subregion : Caribbean , Population : 106290
//   Brunei Darussalam , Region : Asia , Subregion : South-Eastern Asia , Population : 437483
//   Bulgaria , Region : Europe , Subregion : Eastern Europe , Population : 6927288
//   Burkina Faso , Region : Africa , Subregion : Western Africa , Population : 20903278
//   Burundi , Region : Africa , Subregion : Eastern Africa , Population : 11890781
//   Cambodia , Region : Asia , Subregion : South-Eastern Asia , Population : 16718971
//   Cameroon , Region : Africa , Subregion : Middle Africa , Population : 26545864
//   Canada , Region : Americas , Subregion : Northern America , Population : 38005238
//   Cabo Verde , Region : Africa , Subregion : Western Africa , Population : 555988
//   Cayman Islands , Region : Americas , Subregion : Caribbean , Population : 65720
//   Central African Republic , Region : Africa , Subregion : Middle Africa , Population : 4829764
//   Chad , Region : Africa , Subregion : Middle Africa , Population : 16425859
//   Chile , Region : Americas , Subregion : South America , Population : 19116209
//   China , Region : Asia , Subregion : Eastern Asia , Population : 1402112000
//   Christmas Island , Region : Oceania , Subregion : Australia and New Zealand , Population : 2072
//   Cocos (Keeling) Islands , Region : Oceania , Subregion : Australia and New Zealand , Population : 550
//   Colombia , Region : Americas , Subregion : South America , Population : 50882884
//   Comoros , Region : Africa , Subregion : Eastern Africa , Population : 869595
//   Congo , Region : Africa , Subregion : Middle Africa , Population : 5518092
//   Congo (Democratic Republic of the) , Region : Africa , Subregion : Middle Africa , Population : 89561404
//   Cook Islands , Region : Oceania , Subregion : Polynesia , Population : 18100
//   Costa Rica , Region : Americas , Subregion : Central America , Population : 5094114
//   Croatia , Region : Europe , Subregion : Southern Europe , Population : 4047200
//   Cuba , Region : Americas , Subregion : Caribbean , Population : 11326616
//   Curaçao , Region : Americas , Subregion : Caribbean , Population : 155014
//   Cyprus , Region : Europe , Subregion : Southern Europe , Population : 1207361
//   Czech Republic , Region : Europe , Subregion : Central Europe , Population : 10698896
//   Denmark , Region : Europe , Subregion : Northern Europe , Population : 5831404
//   Djibouti , Region : Africa , Subregion : Eastern Africa , Population : 988002
//   Dominica , Region : Americas , Subregion : Caribbean , Population : 71991
//   Dominican Republic , Region : Americas , Subregion : Caribbean , Population : 10847904
//   Ecuador , Region : Americas , Subregion : South America , Population : 17643060
//   Egypt , Region : Africa , Subregion : Northern Africa , Population : 102334403
//   El Salvador , Region : Americas , Subregion : Central America , Population : 6486201
//   Equatorial Guinea , Region : Africa , Subregion : Middle Africa , Population : 1402985
//   Eritrea , Region : Africa , Subregion : Eastern Africa , Population : 5352000
//   Estonia , Region : Europe , Subregion : Northern Europe , Population : 1331057
//   Ethiopia , Region : Africa , Subregion : Eastern Africa , Population : 114963583
//   Falkland Islands (Malvinas) , Region : Americas , Subregion : South America , Population : 2563
//   Faroe Islands , Region : Europe , Subregion : Northern Europe , Population : 48865
//   Fiji , Region : Oceania , Subregion : Melanesia , Population : 896444
//   Finland , Region : Europe , Subregion : Northern Europe , Population : 5530719
//   France , Region : Europe , Subregion : Western Europe , Population : 67391582
//   French Guiana , Region : Americas , Subregion : South America , Population : 254541
//   French Polynesia , Region : Oceania , Subregion : Polynesia , Population : 280904
//   French Southern Territories , Region : Africa , Subregion : Southern Africa , Population : 140
//   Gabon , Region : Africa , Subregion : Middle Africa , Population : 2225728
//   Gambia , Region : Africa , Subregion : Western Africa , Population : 2416664
//   Georgia , Region : Asia , Subregion : Western Asia , Population : 3714000
//   Germany , Region : Europe , Subregion : Central Europe , Population : 83240525
//   Ghana , Region : Africa , Subregion : Western Africa , Population : 31072945
//   Gibraltar , Region : Europe , Subregion : Southern Europe , Population : 33691
//   Greece , Region : Europe , Subregion : Southern Europe , Population : 10715549
//   Greenland , Region : Americas , Subregion : Northern America , Population : 56367
//   Grenada , Region : Americas , Subregion : Caribbean , Population : 112519
//   Guadeloupe , Region : Americas , Subregion : Caribbean , Population : 400132
//   Guam , Region : Oceania , Subregion : Micronesia , Population : 168783
//   Guatemala , Region : Americas , Subregion : Central America , Population : 16858333
//   Guernsey , Region : Europe , Subregion : Northern Europe , Population : 62999
//   Guinea , Region : Africa , Subregion : Western Africa , Population : 13132792
//   Guinea-Bissau , Region : Africa , Subregion : Western Africa , Population : 1967998
//   Guyana , Region : Americas , Subregion : South America , Population : 786559
//   Haiti , Region : Americas , Subregion : Caribbean , Population : 11402533
//   Heard Island and McDonald Islands , Region : Antarctic , Subregion : Antarctic , Population : 0
//   Vatican City , Region : Europe , Subregion : Southern Europe , Population : 451
//   Honduras , Region : Americas , Subregion : Central America , Population : 9904608
//   Hungary , Region : Europe , Subregion : Central Europe , Population : 9749763
//   Hong Kong , Region : Asia , Subregion : Eastern Asia , Population : 7481800
//   Iceland , Region : Europe , Subregion : Northern Europe , Population : 366425
//   India , Region : Asia , Subregion : Southern Asia , Population : 1380004385
//   Indonesia , Region : Asia , Subregion : South-Eastern Asia , Population : 273523621
//   Ivory Coast , Region : Africa , Subregion : Western Africa , Population : 26378275
//   Iran (Islamic Republic of) , Region : Asia , Subregion : Southern Asia , Population : 83992953
//   Iraq , Region : Asia , Subregion : Western Asia , Population : 40222503
//   Ireland , Region : Europe , Subregion : Northern Europe , Population : 4994724
//   Isle of Man , Region : Europe , Subregion : Northern Europe , Population : 85032
//   Israel , Region : Asia , Subregion : Western Asia , Population : 9216900
//   Italy , Region : Europe , Subregion : Southern Europe , Population : 59554023
//   Jamaica , Region : Americas , Subregion : Caribbean , Population : 2961161
//   Japan , Region : Asia , Subregion : Eastern Asia , Population : 125836021
//   Jersey , Region : Europe , Subregion : Northern Europe , Population : 100800
//   Jordan , Region : Asia , Subregion : Western Asia , Population : 10203140
//   Kazakhstan , Region : Asia , Subregion : Central Asia , Population : 18754440
//   Kenya , Region : Africa , Subregion : Eastern Africa , Population : 53771300
//   Kiribati , Region : Oceania , Subregion : Micronesia , Population : 119446
//   Kuwait , Region : Asia , Subregion : Western Asia , Population : 4270563
//   Kyrgyzstan , Region : Asia , Subregion : Central Asia , Population : 6591600
//   Lao People's Democratic Republic , Region : Asia , Subregion : South-Eastern Asia , Population : 7275556
//   Latvia , Region : Europe , Subregion : Northern Europe , Population : 1901548
//   Lebanon , Region : Asia , Subregion : Western Asia , Population : 6825442
//   Lesotho , Region : Africa , Subregion : Southern Africa , Population : 2142252
//   Liberia , Region : Africa , Subregion : Western Africa , Population : 5057677
//   Libya , Region : Africa , Subregion : Northern Africa , Population : 6871287
//   Liechtenstein , Region : Europe , Subregion : Central Europe , Population : 38137
//   Lithuania , Region : Europe , Subregion : Northern Europe , Population : 2794700
//   Luxembourg , Region : Europe , Subregion : Western Europe , Population : 632275
//   Macao , Region : Asia , Subregion : Eastern Asia , Population : 649342
//   North Macedonia , Region : Europe , Subregion : Southern Europe , Population : 2083380
//   Madagascar , Region : Africa , Subregion : Eastern Africa , Population : 27691019
//   Malawi , Region : Africa , Subregion : Eastern Africa , Population : 19129955
//   Malaysia , Region : Asia , Subregion : South-Eastern Asia , Population : 32365998
//   Maldives , Region : Asia , Subregion : Southern Asia , Population : 540542
//   Mali , Region : Africa , Subregion : Western Africa , Population : 20250834
//   Malta , Region : Europe , Subregion : Southern Europe , Population : 525285
//   Marshall Islands , Region : Oceania , Subregion : Micronesia , Population : 59194
//   Martinique , Region : Americas , Subregion : Caribbean , Population : 378243
//   Mauritania , Region : Africa , Subregion : Western Africa , Population : 4649660
//   Mauritius , Region : Africa , Subregion : Eastern Africa , Population : 1265740
//   Mayotte , Region : Africa , Subregion : Eastern Africa , Population : 226915
//   Mexico , Region : Americas , Subregion : North America , Population : 128932753
//   Micronesia (Federated States of) , Region : Oceania , Subregion : Micronesia , Population : 115021
//   Moldova (Republic of) , Region : Europe , Subregion : Eastern Europe , Population : 2617820
//   Monaco , Region : Europe , Subregion : Western Europe , Population : 39244
//   Mongolia , Region : Asia , Subregion : Eastern Asia , Population : 3278292
//   Montenegro , Region : Europe , Subregion : Southern Europe , Population : 621718
//   Montserrat , Region : Americas , Subregion : Caribbean , Population : 4922
//   Morocco , Region : Africa , Subregion : Northern Africa , Population : 36910558
//   Mozambique , Region : Africa , Subregion : Eastern Africa , Population : 31255435
//   Myanmar , Region : Asia , Subregion : South-Eastern Asia , Population : 54409794
//   Namibia , Region : Africa , Subregion : Southern Africa , Population : 2540916
//   Nauru , Region : Oceania , Subregion : Micronesia , Population : 10834
//   Nepal , Region : Asia , Subregion : Southern Asia , Population : 29136808
//   Netherlands , Region : Europe , Subregion : Western Europe , Population : 17441139
//   New Caledonia , Region : Oceania , Subregion : Melanesia , Population : 271960
//   New Zealand , Region : Oceania , Subregion : Australia and New Zealand , Population : 5084300
//   Nicaragua , Region : Americas , Subregion : Central America , Population : 6624554
//   Niger , Region : Africa , Subregion : Western Africa , Population : 24206636
//   Nigeria , Region : Africa , Subregion : Western Africa , Population : 206139587
//   Niue , Region : Oceania , Subregion : Polynesia , Population : 1470
//   Norfolk Island , Region : Oceania , Subregion : Australia and New Zealand , Population : 2302
//   Korea (Democratic People's Republic of) , Region : Asia , Subregion : Eastern Asia , Population : 25778815
//   Northern Mariana Islands , Region : Oceania , Subregion : Micronesia , Population : 57557
//   Norway , Region : Europe , Subregion : Northern Europe , Population : 5379475
//   Oman , Region : Asia , Subregion : Western Asia , Population : 5106622
//   Pakistan , Region : Asia , Subregion : Southern Asia , Population : 220892331
//   Palau , Region : Oceania , Subregion : Micronesia , Population : 18092
//   Palestine, State of , Region : Asia , Subregion : Western Asia , Population : 4803269
//   Panama , Region : Americas , Subregion : Central America , Population : 4314768
//   Papua New Guinea , Region : Oceania , Subregion : Melanesia , Population : 8947027
//   Paraguay , Region : Americas , Subregion : South America , Population : 7132530
//   Peru , Region : Americas , Subregion : South America , Population : 32971846
//   Philippines , Region : Asia , Subregion : South-Eastern Asia , Population : 109581085
//   Pitcairn , Region : Oceania , Subregion : Polynesia , Population : 56
//   Poland , Region : Europe , Subregion : Central Europe , Population : 37950802
//   Portugal , Region : Europe , Subregion : Southern Europe , Population : 10305564
//   Puerto Rico , Region : Americas , Subregion : Caribbean , Population : 3194034
//   Qatar , Region : Asia , Subregion : Western Asia , Population : 2881060
//   Republic of Kosovo , Region : Europe , Subregion : Eastern Europe , Population : 1775378
//   Réunion , Region : Africa , Subregion : Eastern Africa , Population : 840974
//   Romania , Region : Europe , Subregion : Eastern Europe , Population : 19286123
//   Russian Federation , Region : Europe , Subregion : Eastern Europe , Population : 144104080
//   Rwanda , Region : Africa , Subregion : Eastern Africa , Population : 12952209
//   Saint Barthélemy , Region : Americas , Subregion : Caribbean , Population : 9417
//   Saint Helena, Ascension and Tristan da Cunha , Region : Africa , Subregion : Western Africa , Population : 4255
//   Saint Kitts and Nevis , Region : Americas , Subregion : Caribbean , Population : 53192
//   Saint Lucia , Region : Americas , Subregion : Caribbean , Population : 183629
//   Saint Martin (French part) , Region : Americas , Subregion : Caribbean , Population : 38659
//   Saint Pierre and Miquelon , Region : Americas , Subregion : Northern America , Population : 6069
//   Saint Vincent and the Grenadines , Region : Americas , Subregion : Caribbean , Population : 110947
//   Samoa , Region : Oceania , Subregion : Polynesia , Population : 198410
//   San Marino , Region : Europe , Subregion : Southern Europe , Population : 33938
//   Sao Tome and Principe , Region : Africa , Subregion : Middle Africa , Population : 219161
//   Saudi Arabia , Region : Asia , Subregion : Western Asia , Population : 34813867
//   Senegal , Region : Africa , Subregion : Western Africa , Population : 16743930
//   Serbia , Region : Europe , Subregion : Southern Europe , Population : 6908224
//   Seychelles , Region : Africa , Subregion : Eastern Africa , Population : 98462
//   Sierra Leone , Region : Africa , Subregion : Western Africa , Population : 7976985
//   Singapore , Region : Asia , Subregion : South-Eastern Asia , Population : 5685807
//   Sint Maarten (Dutch part) , Region : Americas , Subregion : Caribbean , Population : 40812
//   Slovakia , Region : Europe , Subregion : Central Europe , Population : 5458827
//   Slovenia , Region : Europe , Subregion : Southern Europe , Population : 2100126
//   Solomon Islands , Region : Oceania , Subregion : Melanesia , Population : 686878
//   Somalia , Region : Africa , Subregion : Eastern Africa , Population : 15893219
//   South Africa , Region : Africa , Subregion : Southern Africa , Population : 59308690
//   South Georgia and the South Sandwich Islands , Region : Americas , Subregion : South America , Population : 30
//   Korea (Republic of) , Region : Asia , Subregion : Eastern Asia , Population : 51780579
//   Spain , Region : Europe , Subregion : Southern Europe , Population : 47351567
//   Sri Lanka , Region : Asia , Subregion : Southern Asia , Population : 21919000
//   Sudan , Region : Africa , Subregion : Northern Africa , Population : 43849269
//   South Sudan , Region : Africa , Subregion : Middle Africa , Population : 11193729
//   Suriname , Region : Americas , Subregion : South America , Population : 586634
//   Svalbard and Jan Mayen , Region : Europe , Subregion : Northern Europe , Population : 2562
//   Swaziland , Region : Africa , Subregion : Southern Africa , Population : 1160164
//   Sweden , Region : Europe , Subregion : Northern Europe , Population : 10353442
//   Switzerland , Region : Europe , Subregion : Central Europe , Population : 8636896
//   Syrian Arab Republic , Region : Asia , Subregion : Western Asia , Population : 17500657
//   Taiwan , Region : Asia , Subregion : Eastern Asia , Population : 23503349
//   Tajikistan , Region : Asia , Subregion : Central Asia , Population : 9537642
//   Tanzania, United Republic of , Region : Africa , Subregion : Eastern Africa , Population : 59734213
//   Thailand , Region : Asia , Subregion : South-Eastern Asia , Population : 69799978
//   Timor-Leste , Region : Asia , Subregion : South-Eastern Asia , Population : 1318442
//   Togo , Region : Africa , Subregion : Western Africa , Population : 8278737
//   Tokelau , Region : Oceania , Subregion : Polynesia , Population : 1411
//   Tonga , Region : Oceania , Subregion : Polynesia , Population : 105697
//   Trinidad and Tobago , Region : Americas , Subregion : Caribbean , Population : 1399491
//   Tunisia , Region : Africa , Subregion : Northern Africa , Population : 11818618
//   Turkey , Region : Asia , Subregion : Western Asia , Population : 84339067
//   Turkmenistan , Region : Asia , Subregion : Central Asia , Population : 6031187
//   Turks and Caicos Islands , Region : Americas , Subregion : Caribbean , Population : 38718
//   Tuvalu , Region : Oceania , Subregion : Polynesia , Population : 11792
//   Uganda , Region : Africa , Subregion : Eastern Africa , Population : 45741000
//   Ukraine , Region : Europe , Subregion : Eastern Europe , Population : 44134693
//   United Arab Emirates , Region : Asia , Subregion : Western Asia , Population : 9890400
//   United Kingdom of Great Britain and Northern Ireland , Region : Europe , Subregion : Northern Europe , Population : 67215293
//   United States of America , Region : Americas , Subregion : Northern America , Population : 329484123
//   Uruguay , Region : Americas , Subregion : South America , Population : 3473727
//   Uzbekistan , Region : Asia , Subregion : Central Asia , Population : 34232050
//   Vanuatu , Region : Oceania , Subregion : Melanesia , Population : 307150
//   Venezuela (Bolivarian Republic of) , Region : Americas , Subregion : South America , Population : 28435943
//   Vietnam , Region : Asia , Subregion : South-Eastern Asia , Population : 97338583
//   Wallis and Futuna , Region : Oceania , Subregion : Polynesia , Population : 11750
//   Western Sahara , Region : Africa , Subregion : Northern Africa , Population : 510713
//   Yemen , Region : Asia , Subregion : Western Asia , Population : 29825968
//   Zambia , Region : Africa , Subregion : Eastern Africa , Population : 18383956
//   Zimbabwe , Region : Africa , Subregion : Eastern Africa , Population : 14862927
