// Display all the country flags in console

var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true);

request.send();

request.onload=function(){
    var data=JSON.parse(this.response);

    for ( var i=0;i<data.length;i++){
        console.log(`${data[i].name} flag : ${data[i].flag}`);
    }
};


// Output : 
//   Afghanistan flag : https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
//   Åland Islands flag : https://flagcdn.com/ax.svg
//   Albania flag : https://flagcdn.com/al.svg
//   Algeria flag : https://flagcdn.com/dz.svg
//   American Samoa flag : https://flagcdn.com/as.svg
//   Andorra flag : https://flagcdn.com/ad.svg
//   Angola flag : https://flagcdn.com/ao.svg
//   Anguilla flag : https://flagcdn.com/ai.svg
//   Antarctica flag : https://flagcdn.com/aq.svg
//   Antigua and Barbuda flag : https://flagcdn.com/ag.svg
//   Argentina flag : https://flagcdn.com/ar.svg
//   Armenia flag : https://flagcdn.com/am.svg
//   Aruba flag : https://flagcdn.com/aw.svg
//   Australia flag : https://flagcdn.com/au.svg
//   Austria flag : https://flagcdn.com/at.svg
//   Azerbaijan flag : https://flagcdn.com/az.svg
//   Bahamas flag : https://flagcdn.com/bs.svg
//   Bahrain flag : https://flagcdn.com/bh.svg
//   Bangladesh flag : https://flagcdn.com/bd.svg
//   Barbados flag : https://flagcdn.com/bb.svg
//   Belarus flag : https://flagcdn.com/by.svg
//   Belgium flag : https://flagcdn.com/be.svg
//   Belize flag : https://flagcdn.com/bz.svg
//   Benin flag : https://flagcdn.com/bj.svg
//   Bermuda flag : https://flagcdn.com/bm.svg
//   Bhutan flag : https://flagcdn.com/bt.svg
//   Bolivia (Plurinational State of) flag : https://flagcdn.com/bo.svg
//   Bonaire, Sint Eustatius and Saba flag : https://flagcdn.com/bq.svg
//   Bosnia and Herzegovina flag : https://flagcdn.com/ba.svg
//   Botswana flag : https://flagcdn.com/bw.svg
//   Bouvet Island flag : https://flagcdn.com/bv.svg
//   Brazil flag : https://flagcdn.com/br.svg
//   British Indian Ocean Territory flag : https://flagcdn.com/io.svg
//   United States Minor Outlying Islands flag : https://flagcdn.com/um.svg
//   Virgin Islands (British) flag : https://flagcdn.com/vg.svg
//   Virgin Islands (U.S.) flag : https://flagcdn.com/vi.svg
//   Brunei Darussalam flag : https://flagcdn.com/bn.svg
//   Bulgaria flag : https://flagcdn.com/bg.svg
//   Burkina Faso flag : https://flagcdn.com/bf.svg
//   Burundi flag : https://flagcdn.com/bi.svg
//   Cambodia flag : https://flagcdn.com/kh.svg
//   Cameroon flag : https://flagcdn.com/cm.svg
//   Canada flag : https://flagcdn.com/ca.svg
//   Cabo Verde flag : https://flagcdn.com/cv.svg
//   Cayman Islands flag : https://flagcdn.com/ky.svg
//   Central African Republic flag : https://flagcdn.com/cf.svg
//   Chad flag : https://flagcdn.com/td.svg
//   Chile flag : https://flagcdn.com/cl.svg
//   China flag : https://flagcdn.com/cn.svg
//   Christmas Island flag : https://flagcdn.com/cx.svg
//   Cocos (Keeling) Islands flag : https://flagcdn.com/cc.svg
//   Colombia flag : https://flagcdn.com/co.svg
//   Comoros flag : https://flagcdn.com/km.svg
//   Congo flag : https://flagcdn.com/cg.svg
//   Congo (Democratic Republic of the) flag : https://flagcdn.com/cd.svg
//   Cook Islands flag : https://flagcdn.com/ck.svg
//   Costa Rica flag : https://flagcdn.com/cr.svg
//   Croatia flag : https://flagcdn.com/hr.svg
//   Cuba flag : https://flagcdn.com/cu.svg
//   Curaçao flag : https://flagcdn.com/cw.svg
//   Cyprus flag : https://flagcdn.com/cy.svg
//   Czech Republic flag : https://flagcdn.com/cz.svg
//   Denmark flag : https://flagcdn.com/dk.svg
//   Djibouti flag : https://flagcdn.com/dj.svg
//   Dominica flag : https://flagcdn.com/dm.svg
//   Dominican Republic flag : https://flagcdn.com/do.svg
//   Ecuador flag : https://flagcdn.com/ec.svg
//   Egypt flag : https://flagcdn.com/eg.svg
//   El Salvador flag : https://flagcdn.com/sv.svg
//   Equatorial Guinea flag : https://flagcdn.com/gq.svg
//   Eritrea flag : https://flagcdn.com/er.svg
//   Estonia flag : https://flagcdn.com/ee.svg
//   Ethiopia flag : https://flagcdn.com/et.svg
//   Falkland Islands (Malvinas) flag : https://flagcdn.com/fk.svg
//   Faroe Islands flag : https://flagcdn.com/fo.svg
//   Fiji flag : https://flagcdn.com/fj.svg
//   Finland flag : https://flagcdn.com/fi.svg
//   France flag : https://flagcdn.com/fr.svg
//   French Guiana flag : https://flagcdn.com/gf.svg
//   French Polynesia flag : https://flagcdn.com/pf.svg
//   French Southern Territories flag : https://flagcdn.com/tf.svg
//   Gabon flag : https://flagcdn.com/ga.svg
//   Gambia flag : https://flagcdn.com/gm.svg
//   Georgia flag : https://flagcdn.com/ge.svg
//   Germany flag : https://flagcdn.com/de.svg
//   Ghana flag : https://flagcdn.com/gh.svg
//   Gibraltar flag : https://flagcdn.com/gi.svg
//   Greece flag : https://flagcdn.com/gr.svg
//   Greenland flag : https://flagcdn.com/gl.svg
//   Grenada flag : https://flagcdn.com/gd.svg
//   Guadeloupe flag : https://flagcdn.com/gp.svg
//   Guam flag : https://flagcdn.com/gu.svg
//   Guatemala flag : https://flagcdn.com/gt.svg
//   Guernsey flag : https://flagcdn.com/gg.svg
//   Guinea flag : https://flagcdn.com/gn.svg
//   Guinea-Bissau flag : https://flagcdn.com/gw.svg
//   Guyana flag : https://flagcdn.com/gy.svg
//   Haiti flag : https://flagcdn.com/ht.svg
//   Heard Island and McDonald Islands flag : https://flagcdn.com/hm.svg
//   Vatican City flag : https://flagcdn.com/va.svg
//   Honduras flag : https://flagcdn.com/hn.svg
//   Hungary flag : https://flagcdn.com/hu.svg
//   Hong Kong flag : https://flagcdn.com/hk.svg
//   Iceland flag : https://flagcdn.com/is.svg
//   India flag : https://flagcdn.com/in.svg
//   Indonesia flag : https://flagcdn.com/id.svg
//   Ivory Coast flag : https://flagcdn.com/ci.svg
//   Iran (Islamic Republic of) flag : https://flagcdn.com/ir.svg
//   Iraq flag : https://flagcdn.com/iq.svg
//   Ireland flag : https://flagcdn.com/ie.svg
//   Isle of Man flag : https://flagcdn.com/im.svg
//   Israel flag : https://flagcdn.com/il.svg
//   Italy flag : https://flagcdn.com/it.svg
//   Jamaica flag : https://flagcdn.com/jm.svg
//   Japan flag : https://flagcdn.com/jp.svg
//   Jersey flag : https://flagcdn.com/je.svg
//   Jordan flag : https://flagcdn.com/jo.svg
//   Kazakhstan flag : https://flagcdn.com/kz.svg
//   Kenya flag : https://flagcdn.com/ke.svg
//   Kiribati flag : https://flagcdn.com/ki.svg
//   Kuwait flag : https://flagcdn.com/kw.svg
//   Kyrgyzstan flag : https://flagcdn.com/kg.svg
//   Lao People's Democratic Republic flag : https://flagcdn.com/la.svg
//   Latvia flag : https://flagcdn.com/lv.svg
//   Lebanon flag : https://flagcdn.com/lb.svg
//   Lesotho flag : https://flagcdn.com/ls.svg
//   Liberia flag : https://flagcdn.com/lr.svg
//   Libya flag : https://flagcdn.com/ly.svg
//   Liechtenstein flag : https://flagcdn.com/li.svg
//   Lithuania flag : https://flagcdn.com/lt.svg
//   Luxembourg flag : https://flagcdn.com/lu.svg
//   Macao flag : https://flagcdn.com/mo.svg
//   North Macedonia flag : https://flagcdn.com/mk.svg
//   Madagascar flag : https://flagcdn.com/mg.svg
//   Malawi flag : https://flagcdn.com/mw.svg
//   Malaysia flag : https://flagcdn.com/my.svg
//   Maldives flag : https://flagcdn.com/mv.svg
//   Mali flag : https://flagcdn.com/ml.svg
//   Malta flag : https://flagcdn.com/mt.svg
//   Marshall Islands flag : https://flagcdn.com/mh.svg
//   Martinique flag : https://flagcdn.com/mq.svg
//   Mauritania flag : https://flagcdn.com/mr.svg
//   Mauritius flag : https://flagcdn.com/mu.svg
//   Mayotte flag : https://flagcdn.com/yt.svg
//   Mexico flag : https://flagcdn.com/mx.svg
//   Micronesia (Federated States of) flag : https://flagcdn.com/fm.svg
//   Moldova (Republic of) flag : https://flagcdn.com/md.svg
//   Monaco flag : https://flagcdn.com/mc.svg
//   Mongolia flag : https://flagcdn.com/mn.svg
//   Montenegro flag : https://flagcdn.com/me.svg
//   Montserrat flag : https://flagcdn.com/ms.svg
//   Morocco flag : https://flagcdn.com/ma.svg
//   Mozambique flag : https://flagcdn.com/mz.svg
//   Myanmar flag : https://flagcdn.com/mm.svg
//   Namibia flag : https://flagcdn.com/na.svg
//   Nauru flag : https://flagcdn.com/nr.svg
//   Nepal flag : https://flagcdn.com/np.svg
//   Netherlands flag : https://flagcdn.com/nl.svg
//   New Caledonia flag : https://flagcdn.com/nc.svg
//   New Zealand flag : https://flagcdn.com/nz.svg
//   Nicaragua flag : https://flagcdn.com/ni.svg
//   Niger flag : https://flagcdn.com/ne.svg
//   Nigeria flag : https://flagcdn.com/ng.svg
//   Niue flag : https://flagcdn.com/nu.svg
//   Norfolk Island flag : https://flagcdn.com/nf.svg
//   Korea (Democratic People's Republic of) flag : https://flagcdn.com/kp.svg
//   Northern Mariana Islands flag : https://flagcdn.com/mp.svg
//   Norway flag : https://flagcdn.com/no.svg
//   Oman flag : https://flagcdn.com/om.svg
//   Pakistan flag : https://flagcdn.com/pk.svg
//   Palau flag : https://flagcdn.com/pw.svg
//   Palestine, State of flag : https://flagcdn.com/ps.svg
//   Panama flag : https://flagcdn.com/pa.svg
//   Papua New Guinea flag : https://flagcdn.com/pg.svg
//   Paraguay flag : https://flagcdn.com/py.svg
//   Peru flag : https://flagcdn.com/pe.svg
//   Philippines flag : https://flagcdn.com/ph.svg
//   Pitcairn flag : https://flagcdn.com/pn.svg
//   Poland flag : https://flagcdn.com/pl.svg
//   Portugal flag : https://flagcdn.com/pt.svg
//   Puerto Rico flag : https://flagcdn.com/pr.svg
//   Qatar flag : https://flagcdn.com/qa.svg
//   Republic of Kosovo flag : https://flagcdn.com/xk.svg
//   Réunion flag : https://flagcdn.com/re.svg
//   Romania flag : https://flagcdn.com/ro.svg
//   Russian Federation flag : https://flagcdn.com/ru.svg
//   Rwanda flag : https://flagcdn.com/rw.svg
//   Saint Barthélemy flag : https://flagcdn.com/bl.svg
//   Saint Helena, Ascension and Tristan da Cunha flag : https://flagcdn.com/sh.svg
//   Saint Kitts and Nevis flag : https://flagcdn.com/kn.svg
//   Saint Lucia flag : https://flagcdn.com/lc.svg
//   Saint Martin (French part) flag : https://flagcdn.com/mf.svg
//   Saint Pierre and Miquelon flag : https://flagcdn.com/pm.svg
//   Saint Vincent and the Grenadines flag : https://flagcdn.com/vc.svg
//   Samoa flag : https://flagcdn.com/ws.svg
//   San Marino flag : https://flagcdn.com/sm.svg
//   Sao Tome and Principe flag : https://flagcdn.com/st.svg
//   Saudi Arabia flag : https://flagcdn.com/sa.svg
//   Senegal flag : https://flagcdn.com/sn.svg
//   Serbia flag : https://flagcdn.com/rs.svg
//   Seychelles flag : https://flagcdn.com/sc.svg
//   Sierra Leone flag : https://flagcdn.com/sl.svg
//   Singapore flag : https://flagcdn.com/sg.svg
//   Sint Maarten (Dutch part) flag : https://flagcdn.com/sx.svg
//   Slovakia flag : https://flagcdn.com/sk.svg
//   Slovenia flag : https://flagcdn.com/si.svg
//   Solomon Islands flag : https://flagcdn.com/sb.svg
//   Somalia flag : https://flagcdn.com/so.svg
//   South Africa flag : https://flagcdn.com/za.svg
//   South Georgia and the South Sandwich Islands flag : https://flagcdn.com/gs.svg
//   Korea (Republic of) flag : https://flagcdn.com/kr.svg
//   Spain flag : https://flagcdn.com/es.svg
//   Sri Lanka flag : https://flagcdn.com/lk.svg
//   Sudan flag : https://flagcdn.com/sd.svg
//   South Sudan flag : https://flagcdn.com/ss.svg
//   Suriname flag : https://flagcdn.com/sr.svg
//   Svalbard and Jan Mayen flag : https://flagcdn.com/sj.svg
//   Swaziland flag : https://flagcdn.com/sz.svg
//   Sweden flag : https://flagcdn.com/se.svg
//   Switzerland flag : https://flagcdn.com/ch.svg
//   Syrian Arab Republic flag : https://flagcdn.com/sy.svg
//   Taiwan flag : https://flagcdn.com/tw.svg
//   Tajikistan flag : https://flagcdn.com/tj.svg
//   Tanzania, United Republic of flag : https://flagcdn.com/tz.svg
//   Thailand flag : https://flagcdn.com/th.svg
//   Timor-Leste flag : https://flagcdn.com/tl.svg
//   Togo flag : https://flagcdn.com/tg.svg
//   Tokelau flag : https://flagcdn.com/tk.svg
//   Tonga flag : https://flagcdn.com/to.svg
//   Trinidad and Tobago flag : https://flagcdn.com/tt.svg
//   Tunisia flag : https://flagcdn.com/tn.svg
//   Turkey flag : https://flagcdn.com/tr.svg
//   Turkmenistan flag : https://flagcdn.com/tm.svg
//   Turks and Caicos Islands flag : https://flagcdn.com/tc.svg
//   Tuvalu flag : https://flagcdn.com/tv.svg
//   Uganda flag : https://flagcdn.com/ug.svg
//   Ukraine flag : https://flagcdn.com/ua.svg
//   United Arab Emirates flag : https://flagcdn.com/ae.svg
//   United Kingdom of Great Britain and Northern Ireland flag : https://flagcdn.com/gb.svg
//   United States of America flag : https://flagcdn.com/us.svg
//   Uruguay flag : https://flagcdn.com/uy.svg
//   Uzbekistan flag : https://flagcdn.com/uz.svg
//   Vanuatu flag : https://flagcdn.com/vu.svg
//   Venezuela (Bolivarian Republic of) flag : https://flagcdn.com/ve.svg
//   Vietnam flag : https://flagcdn.com/vn.svg
//   Wallis and Futuna flag : https://flagcdn.com/wf.svg
//   Western Sahara flag : https://flagcdn.com/eh.svg
//   Yemen flag : https://flagcdn.com/ye.svg
//   Zambia flag : https://flagcdn.com/zm.svg
//   Zimbabwe flag : https://flagcdn.com/zw.svg
