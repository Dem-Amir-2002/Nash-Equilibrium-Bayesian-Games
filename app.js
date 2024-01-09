function clearAllInput() {
    let inp = document.getElementsByClassName("inp");
    for(index in inp) {
        inp[index].value = "";            
    }

    let elem = document.getElementById("ul-show-res");
    elem.parentNode.removeChild(elem);
}

function calculateNE() {
    let bb_gg_m = document.getElementById("bb-gg-m").value;
    let bb_gg_w = document.getElementById("bb-gg-w").value;
    let bs_gg_m = document.getElementById("bs-gg-m").value;
    let bs_gg_w = document.getElementById("bs-gg-w").value;
    let sb_gg_m = document.getElementById("sb-gg-m").value;
    let sb_gg_w = document.getElementById("sb-gg-w").value;
    let ss_gg_m = document.getElementById("ss-gg-m").value;
    let ss_gg_w = document.getElementById("ss-gg-w").value;

    let bb_gb_m = document.getElementById("bb-gb-m").value;
    let bb_gb_w = document.getElementById("bb-gb-w").value;
    let bs_gb_m = document.getElementById("bs-gb-m").value;
    let bs_gb_w = document.getElementById("bs-gb-w").value;
    let sb_gb_m = document.getElementById("sb-gb-m").value;
    let sb_gb_w = document.getElementById("sb-gb-w").value;
    let ss_gb_m = document.getElementById("ss-gb-m").value;
    let ss_gb_w = document.getElementById("ss-gb-w").value;

    let bb_bg_m = document.getElementById("bb-bg-m").value;
    let bb_bg_w = document.getElementById("bb-bg-w").value;
    let bs_bg_m = document.getElementById("bs-bg-m").value;
    let bs_bg_w = document.getElementById("bs-bg-w").value;
    let sb_bg_m = document.getElementById("sb-bg-m").value;
    let sb_bg_w = document.getElementById("sb-bg-w").value;
    let ss_bg_m = document.getElementById("ss-bg-m").value;
    let ss_bg_w = document.getElementById("ss-bg-w").value;

    let bb_bb_m = document.getElementById("bb-bb-m").value;
    let bb_bb_w = document.getElementById("bb-bb-w").value;
    let bs_bb_m = document.getElementById("bs-bb-m").value;
    let bs_bb_w = document.getElementById("bs-bb-w").value;
    let sb_bb_m = document.getElementById("sb-bb-m").value;
    let sb_bb_w = document.getElementById("sb-bb-w").value;
    let ss_bb_m = document.getElementById("ss-bb-m").value;
    let ss_bb_w = document.getElementById("ss-bb-w").value;

    let alfa = document.getElementById("alfa").value;
    let beta = document.getElementById("beta").value;

    if(alfa.includes("/")) {
        let alfa_num = alfa.split("/");
        alfa = alfa_num[0] / alfa_num[1];
    }

    if(beta.includes("/")) {
        let bet_num = beta.split("/");
        beta = bet_num[0] / bet_num[1];
    }

    let matris_s2_mg = {

        "b-bb" : (bb_gg_m * alfa) + (bb_gb_m * (1 - alfa)) ,
        "b-bs" : (bb_gg_m * alfa) + (bs_gb_m * (1 - alfa)) ,
        "b-sb" : (bs_gg_m * alfa) + (bb_gb_m * (1 - alfa)) ,
        "b-ss" : (bs_gg_m * alfa) + (bs_gb_m * (1 - alfa)) ,
    
        "s-bb" : (sb_gg_m * alfa) + (sb_gb_m * (1 - alfa)) ,
        "s-bs" : (sb_gg_m * alfa) + (ss_gb_m * (1 - alfa)) ,
        "s-sb" : (ss_gg_m * alfa) + (sb_gb_m * (1 - alfa)) ,
        "s-ss" : (ss_gg_m * alfa) + (ss_gb_m * (1 - alfa))
    };

    let matris_s2_mb = {
        "b-bb" : (bb_bg_m * alfa) + (bb_bb_m * (1 - alfa)) ,
        "b-bs" : (bb_bg_m * alfa) + (bs_bb_m * (1 - alfa)) ,
        "b-sb" : (bs_bg_m * alfa) + (bb_bb_m * (1 - alfa)) ,
        "b-ss" : (bs_bg_m * alfa) + (bs_bb_m * (1 - alfa)) ,
    
        "s-bb" : (sb_bg_m * alfa) + (sb_bb_m * (1 - alfa)) ,
        "s-bs" : (sb_bg_m * alfa) + (ss_bb_m * (1 - alfa)) ,
        "s-sb" : (ss_bg_m * alfa) + (sb_bb_m * (1 - alfa)) ,
        "s-ss" : (ss_bg_m * alfa) + (ss_bb_m * (1 - alfa))
    };

    let matris_s1_wg = {
        "bb-b" : (bb_gg_w * beta) + (bb_bg_w * (1 - beta)) ,
        "bb-s" : (bs_gg_w * beta) + (bs_bg_w * (1 - beta)) ,
        "bs-b" : (bb_gg_w * beta) + (sb_bg_w * (1 - beta)) ,
        "bs-s" : (bs_gg_w * beta) + (ss_bg_w * (1 - beta)) ,
        "sb-b" : (sb_gg_w * beta) + (bb_bg_w * (1 - beta)) ,
        "sb-s" : (ss_gg_w * beta) + (bs_bg_w * (1 - beta)) ,
        "ss-b" : (sb_gg_w * beta) + (sb_bg_w * (1 - beta)) ,
        "ss-s" : (ss_gg_w * beta) + (ss_bg_w * (1 - beta))
    }

    let matris_s1_wb = {
        "bb-b" : (bb_gb_w * beta) + (bb_bb_w * (1 - beta)) ,
        "bb-s" : (bs_gb_w * beta) + (bs_bb_w * (1 - beta)) ,
        "bs-b" : (bb_gb_w * beta) + (sb_bb_w * (1 - beta)) ,
        "bs-s" : (bs_gb_w * beta) + (ss_bb_w * (1 - beta)) ,
        "sb-b" : (sb_gb_w * beta) + (bb_bb_w * (1 - beta)) ,
        "sb-s" : (ss_gb_w * beta) + (bs_bb_w * (1 - beta)) ,
        "ss-b" : (sb_gb_w * beta) + (sb_bb_w * (1 - beta)) ,
        "ss-s" : (ss_gb_w * beta) + (ss_bb_w * (1 - beta))
    }

    //s2 : (b.b)
    let br_s1_bb = br_s1(matris_s2_mg["b-bb"] , matris_s2_mg["s-bb"] , matris_s2_mb["b-bb"] , matris_s2_mb["s-bb"]);
    //s2 : (b,s)
    let br_s1_bs = br_s1(matris_s2_mg["b-bs"] , matris_s2_mg["s-bs"] , matris_s2_mb["b-bs"] , matris_s2_mb["s-bs"]);
    //s2 : (s,b)
    let br_s1_sb = br_s1(matris_s2_mg["b-sb"] , matris_s2_mg["s-sb"] , matris_s2_mb["b-sb"] , matris_s2_mb["s-sb"]);
    //s2 ; (s,s)
    let br_s1_ss = br_s1(matris_s2_mg["b-ss"] , matris_s2_mg["s-ss"] , matris_s2_mb["b-ss"] , matris_s2_mb["s-ss"]);


    //s1 : (b,b)
    let br_s2_bb = br_s2(matris_s1_wg["bb-b"] , matris_s1_wg["bb-s"] , matris_s1_wb["bb-b"] , matris_s1_wb["bb-s"]);
    //s1 : (b,s)
    let br_s2_bs = br_s2(matris_s1_wg["bs-b"] , matris_s1_wg["bs-s"] , matris_s1_wb["bs-b"] , matris_s1_wb["bs-s"]);
    //s1 : (s,b)
    let br_s2_sb = br_s2(matris_s1_wg["sb-b"] , matris_s1_wg["sb-s"] , matris_s1_wb["sb-b"] , matris_s1_wb["sb-s"]);
    //s1 : (s,s)
    let br_s2_ss = br_s2(matris_s1_wg["ss-b"] , matris_s1_wg["ss-s"] , matris_s1_wb["ss-b"] , matris_s1_wb["ss-s"]);

    let s1 = {
        "bb" : br_s2_bb , 
        "bs" : br_s2_bs , 
        "sb" : br_s2_sb , 
        "ss" : br_s2_ss
    };

    let s2 = {
        "bb" : br_s1_bb , 
        "bs" : br_s1_bs , 
        "sb" : br_s1_sb , 
        "ss" : br_s1_ss
    };

    let ne_res = findAllNE(s1 , s2);

    let result ="";

    result += "<ul id='ul-show-res'>"
    for(index in ne_res) {
        result += "<li>" + ne_res[index] + "</li>";
    }
    result += "</ul>"

    document.getElementById("show-res").innerHTML = result;
}

function findAllNE(s1 , s2) {
    let ne = [];

    if(Array.isArray(s1["bb"]) && Array.isArray(s2[s1["bb"][0]]) && Array.isArray(s2[s1["bb"][1]])) {
        if("bb" == s2[s1["bb"][0]][0]) {
            ne.push("(B,B) , ("+s1["bb"][0][0].toUpperCase()+","+s1["bb"][0][1].toUpperCase()+")");
        }
        else if("bb" == s2[s1["bb"][0]][1]) {
            ne.push("(B,B) , ("+s1["bb"][0][0].toUpperCase()+","+s1["bb"][0][1].toUpperCase()+")");
        }
        else if("bb" == s2[s1["bb"][1]][0]) {
            ne.push("(B,B) , ("+s1["bb"][1][0].toUpperCase()+","+s1["bb"][1][1].toUpperCase()+")");
        }
        else if("bb" == s2[s1["bb"][1]][1]) {
            ne.push("(B,B) , ("+s1["bb"][1][0].toUpperCase()+","+s1["bb"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["bb"]) && Array.isArray(s2[s1["bb"][0]]) && !Array.isArray(s2[s1["bb"][1]])) {
        if("bb" == s2[s1["bb"][0]][0]) {
            ne.push("(B,B) , ("+s1["bb"][0][0].toUpperCase()+","+s1["bb"][0][1].toUpperCase()+")");
        }
        else if("bb" == s2[s1["bb"][0]][1]) {
            ne.push("(B,B) , ("+s1["bb"][0][0].toUpperCase()+","+s1["bb"][0][1].toUpperCase()+")");
        }
        else if("bb" == s2[s1["bb"][1]]) {
            ne.push("(B,B) , ("+s1["bb"][1][0].toUpperCase()+","+s1["bb"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["bb"]) && Array.isArray(s2[s1["bb"][1]]) && !Array.isArray(s2[s1["bb"][0]])) {
        if("bb" == s2[s1["bb"][1]][0]) {
            ne.push("(B,B) , ("+s1["bb"][1][0].toUpperCase()+","+s1["bb"][1][1].toUpperCase()+")");
        }
        else if("bb" == s2[s1["bb"][1]][1]) {
            ne.push("(B,B) , ("+s1["bb"][1][0].toUpperCase()+","+s1["bb"][1][1].toUpperCase()+")");
        }
        else if("bb" == s2[s1["bb"][0]]) {
            ne.push("(B,B) , ("+s1["bb"][0][0].toUpperCase()+","+s1["bb"][0][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["bb"]) && !Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("bb" == s2[s1["bb"][1]]) {
            ne.push("(B,B) , ("+s1["bb"][1][0].toUpperCase()+","+s1["bb"][1][1].toUpperCase()+")");
        }
        else if("bb" == s2[s1["bb"][0]]) {
            ne.push("(B,B) , ("+s1["bb"][0][0].toUpperCase()+","+s1["bb"][0][1].toUpperCase()+")");
        }
    }

    if(Array.isArray(s1["bs"]) && Array.isArray(s2[s1["bs"][0]]) && Array.isArray(s2[s1["bs"][1]])) {
        if("bs" == s2[s1["bs"][0]][0]) {
            ne.push("(B,S) , ("+s1["bs"][0][0].toUpperCase()+","+s1["bs"][0][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"][0]][1]) {
            ne.push("(B,S) , ("+s1["bs"][0][0].toUpperCase()+","+s1["bs"][0][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"][1]][0]) {
            ne.push("(B,S) , ("+s1["bs"][1][0].toUpperCase()+","+s1["bs"][1][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"][1]][1]) {
            ne.push("(B,S) , ("+s1["bs"][1][0].toUpperCase()+","+s1["bs"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["bs"]) && Array.isArray(s2[s1["bs"][0]]) && !Array.isArray(s2[s1["bs"][1]])) {
        if("bs" == s2[s1["bs"][0]][0]) {
            ne.push("(B,S) , ("+s1["bs"][0][0].toUpperCase()+","+s1["bs"][0][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"][0]][1]) {
            ne.push("(B,S) , ("+s1["bs"][0][0].toUpperCase()+","+s1["bs"][0][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"][1]]) {
            ne.push("(B,S) , ("+s1["bs"][1][0].toUpperCase()+","+s1["bs"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["bs"]) && Array.isArray(s2[s1["bs"][1]]) && !Array.isArray(s2[s1["bs"][0]])) {
        if("bs" == s2[s1["bs"][1]][0]) {
            ne.push("(B,S) , ("+s1["bs"][1][0].toUpperCase()+","+s1["bs"][1][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"][1]][1]) {
            ne.push("(B,S) , ("+s1["bs"][1][0].toUpperCase()+","+s1["bs"][1][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"][0]]) {
            ne.push("(B,S) , ("+s1["bs"][0][0].toUpperCase()+","+s1["bs"][0][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["bs"]) && !Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("bs" == s2[s1["bs"][1]]) {
            ne.push("(B,S) , ("+s1["bs"][1][0].toUpperCase()+","+s1["bs"][1][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"][0]]) {
            ne.push("(B,S) , ("+s1["bs"][0][0].toUpperCase()+","+s1["bs"][0][1].toUpperCase()+")");
        }
    }

    if(Array.isArray(s1["sb"]) && Array.isArray(s2[s1["sb"][0]]) && Array.isArray(s2[s1["sb"][1]])) {
        if("sb" == s2[s1["sb"][0]][0]) {
            ne.push("(S,B) , ("+s1["bs"][0][0].toUpperCase()+","+s1["sb"][0][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"][0]][1]) {
            ne.push("(S,B) , ("+s1["sb"][0][0].toUpperCase()+","+s1["sb"][0][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"][1]][0]) {
            ne.push("(S,B) , ("+s1["sb"][1][0].toUpperCase()+","+s1["sb"][1][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"][1]][1]) {
            ne.push("(S,B) , ("+s1["sb"][1][0].toUpperCase()+","+s1["sb"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["sb"]) && Array.isArray(s2[s1["sb"][0]]) && !Array.isArray(s2[s1["sb"][1]])) {
        if("sb" == s2[s1["sb"][0]][0]) {
            ne.push("(S,B) , ("+s1["sb"][0][0].toUpperCase()+","+s1["sb"][0][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"][0]][1]) {
            ne.push("(S,B) , ("+s1["sb"][0][0].toUpperCase()+","+s1["sb"][0][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"][1]]) {
            ne.push("(S,B) , ("+s1["sb"][1][0].toUpperCase()+","+s1["sb"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["sb"]) && Array.isArray(s2[s1["sb"][1]]) && !Array.isArray(s2[s1["sb"][0]])) {
        if("sb" == s2[s1["sb"][1]][0]) {
            ne.push("(S,B) , ("+s1["sb"][1][0].toUpperCase()+","+s1["sb"][1][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"][1]][1]) {
            ne.push("(S,B) , ("+s1["sb"][1][0].toUpperCase()+","+s1["sb"][1][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"][0]]) {
            ne.push("(S,B) , ("+s1["sb"][0][0].toUpperCase()+","+s1["sb"][0][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["sb"]) && !Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("sb" == s2[s1["sb"][1]]) {
            ne.push("(S,B) , ("+s1["sb"][1][0].toUpperCase()+","+s1["sb"][1][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"][0]]) {
            ne.push("(S,B) , ("+s1["sb"][0][0].toUpperCase()+","+s1["sb"][0][1].toUpperCase()+")");
        }
    }

    if(Array.isArray(s1["ss"]) && Array.isArray(s2[s1["ss"][0]]) && Array.isArray(s2[s1["ss"][1]])) {
        if("ss" == s2[s1["ss"][0]][0]) {
            ne.push("(S,S) , ("+s1["ss"][0][0].toUpperCase()+","+s1["ss"][0][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"][0]][1]) {
            ne.push("(S,S) , ("+s1["ss"][0][0].toUpperCase()+","+s1["ss"][0][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"][1]][0]) {
            ne.push("(S,S) , ("+s1["ss"][1][0].toUpperCase()+","+s1["ss"][1][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"][1]][1]) {
            ne.push("(S,S) , ("+s1["ss"][1][0].toUpperCase()+","+s1["ss"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["ss"]) && Array.isArray(s2[s1["ss"][0]]) && !Array.isArray(s2[s1["ss"][1]])) {
        if("ss" == s2[s1["ss"][0]][0]) {
            ne.push("(S,S) , ("+s1["ss"][0][0].toUpperCase()+","+s1["ss"][0][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"][0]][1]) {
            ne.push("(S,S) , ("+s1["ss"][0][0].toUpperCase()+","+s1["ss"][0][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"][1]]) {
            ne.push("(S,S) , ("+s1["ss"][1][0].toUpperCase()+","+s1["ss"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["ss"]) && Array.isArray(s2[s1["ss"][1]]) && !Array.isArray(s2[s1["ss"][0]])) {
        if("ss" == s2[s1["ss"][1]][0]) {
            ne.push("(S,S) , ("+s1["ss"][1][0].toUpperCase()+","+s1["ss"][1][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"][1]][1]) {
            ne.push("(S,S) , ("+s1["ss"][1][0].toUpperCase()+","+s1["ss"][1][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"][0]]) {
            ne.push("(S,S) , ("+s1["ss"][0][0].toUpperCase()+","+s1["ss"][0][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s1["ss"]) && !Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("ss" == s2[s1["ss"][1]]) {
            ne.push("(S,S) , ("+s1["ss"][1][0].toUpperCase()+","+s1["ss"][1][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"][0]]) {
            ne.push("(S,S) , ("+s1["ss"][0][0].toUpperCase()+","+s1["ss"][0][1].toUpperCase()+")");
        }
    }

    if(Array.isArray(s2["bb"]) && Array.isArray(s1[s2["bb"][0]]) && Array.isArray(s1[s2["bb"][1]])) {
        if("bb" == s1[s2["bb"][0]][0]) {
            ne.push("(B,B) , ("+s2["bb"][0][0].toUpperCase()+","+s2["bb"][0][1].toUpperCase()+")");
        }
        else if("bb" == s1[s2["bb"][0]][1]) {
            ne.push("(B,B) , ("+s2["bb"][0][0].toUpperCase()+","+s2["bb"][0][1].toUpperCase()+")");
        }
        else if("bb" == s1[s2["bb"][1]][0]) {
            ne.push("(B,B) , ("+s2["bb"][1][0].toUpperCase()+","+s2["bb"][1][1].toUpperCase()+")");
        }
        else if("bb" == s1[s2["bb"][1]][1]) {
            ne.push("(B,B) , ("+s2["bb"][1][0].toUpperCase()+","+s2["bb"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["bb"]) && Array.isArray(s1[s2["bb"][0]]) && !Array.isArray(s1[s2["bb"][1]])) {
        if("bb" == s1[s2["bb"][0]][0]) {
            ne.push("(B,B) , ("+s2["bb"][0][0].toUpperCase()+","+s2["bb"][0][1].toUpperCase()+")");
        }
        else if("bb" == s1[s2["bb"][0]][1]) {
            ne.push("(B,B) , ("+s2["bb"][0][0].toUpperCase()+","+s2["bb"][0][1].toUpperCase()+")");
        }
        else if("bb" == s1[s2["bb"][1]]) {
            ne.push("(B,B) , ("+s2["bb"][1][0].toUpperCase()+","+s2["bb"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["bb"]) && Array.isArray(s1[s2["bb"][1]]) && !Array.isArray(s1[s2["bb"][0]])) {
        if("bb" == s1[s2["bb"][1]][0]) {
            ne.push("(B,B) , ("+s2["bb"][1][0].toUpperCase()+","+s2["bb"][1][1].toUpperCase()+")");
        }
        else if("bb" == s1[s2["bb"][1]][1]) {
            ne.push("(B,B) , ("+s2["bb"][1][0].toUpperCase()+","+s2["bb"][1][1].toUpperCase()+")");
        }
        else if("bb" == s1[s2["bb"][0]]) {
            ne.push("(B,B) , ("+s2["bb"][0][0].toUpperCase()+","+s2["bb"][0][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["bb"]) && !Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("bb" == s1[s2["bb"][1]]) {
            ne.push("(B,B) , ("+s2["bb"][1][0].toUpperCase()+","+s2["bb"][1][1].toUpperCase()+")");
        }
        else if("bb" == s1[s2["bb"][0]]) {
            ne.push("(B,B) , ("+s2["bb"][0][0].toUpperCase()+","+s2["bb"][0][1].toUpperCase()+")");
        }
    }

    if(Array.isArray(s2["bs"]) && Array.isArray(s1[s2["bs"][0]]) && Array.isArray(s1[s2["bs"][1]])) {
        if("bs" == s1[s2["bs"][0]][0]) {
            ne.push("(B,S) , ("+s2["bs"][0][0].toUpperCase()+","+s2["bs"][0][1].toUpperCase()+")");
        }
        else if("bs" == s1[s2["bs"][0]][1]) {
            ne.push("(B,S) , ("+s2["bs"][0][0].toUpperCase()+","+s2["bs"][0][1].toUpperCase()+")");
        }
        else if("bs" == s1[s2["bs"][1]][0]) {
            ne.push("(B,S) , ("+s2["bs"][1][0].toUpperCase()+","+s2["bs"][1][1].toUpperCase()+")");
        }
        else if("bs" == s1[s2["bs"][1]][1]) {
            ne.push("(B,S) , ("+s2["bs"][1][0].toUpperCase()+","+s2["bs"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["bs"]) && Array.isArray(s1[s2["bs"][0]]) && !Array.isArray(s1[s2["bs"][1]])) {
        if("bs" == s1[s2["bs"][0]][0]) {
            ne.push("(B,S) , ("+s2["bs"][0][0].toUpperCase()+","+s2["bs"][0][1].toUpperCase()+")");
        }
        else if("bs" == s1[s2["bs"][0]][1]) {
            ne.push("(B,S) , ("+s2["bs"][0][0].toUpperCase()+","+s2["bs"][0][1].toUpperCase()+")");
        }
        else if("bs" == s1[s2["bs"][1]]) {
            ne.push("(B,S) , ("+s2["bs"][1][0].toUpperCase()+","+s2["bs"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["bs"]) && Array.isArray(s1[s2["bs"][1]]) && !Array.isArray(s1[s2["bs"][0]])) {
        if("bs" == s1[s2["bs"][1]][0]) {
            ne.push("(B,S) , ("+s2["bs"][1][0].toUpperCase()+","+s2["bs"][1][1].toUpperCase()+")");
        }
        else if("bs" == s1[s2["bs"][1]][1]) {
            ne.push("(B,S) , ("+s2["bs"][1][0].toUpperCase()+","+s2["bs"][1][1].toUpperCase()+")");
        }
        else if("bs" == s1[s2["bs"][0]]) {
            ne.push("(B,S) , ("+s2["bs"][0][0].toUpperCase()+","+s2["bs"][0][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["bs"]) && !Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("bs" == s1[s2["bs"][1]]) {
            ne.push("(B,S) , ("+s2["bs"][1][0].toUpperCase()+","+s2["bs"][1][1].toUpperCase()+")");
        }
        else if("bs" == s1[s2["bs"][0]]) {
            ne.push("(B,S) , ("+s2["bs"][0][0].toUpperCase()+","+s2["bs"][0][1].toUpperCase()+")");
        }
    }

    if(Array.isArray(s2["sb"]) && Array.isArray(s1[s2["sb"][0]]) && Array.isArray(s1[s2["sb"][1]])) {
        if("sb" == s1[s2["sb"][0]][0]) {
            ne.push("(S,B) , ("+s2["bs"][0][0].toUpperCase()+","+s2["sb"][0][1].toUpperCase()+")");
        }
        else if("sb" == s1[s2["sb"][0]][1]) {
            ne.push("(S,B) , ("+s2["sb"][0][0].toUpperCase()+","+s2["sb"][0][1].toUpperCase()+")");
        }
        else if("sb" == s1[s2["sb"][1]][0]) {
            ne.push("(S,B) , ("+s2["sb"][1][0].toUpperCase()+","+s2["sb"][1][1].toUpperCase()+")");
        }
        else if("sb" == s1[s2["sb"][1]][1]) {
            ne.push("(S,B) , ("+s2["sb"][1][0].toUpperCase()+","+s2["sb"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["sb"]) && Array.isArray(s1[s2["sb"][0]]) && !Array.isArray(s1[s2["sb"][1]])) {
        if("sb" == s1[s2["sb"][0]][0]) {
            ne.push("(S,B) , ("+s2["sb"][0][0].toUpperCase()+","+s2["sb"][0][1].toUpperCase()+")");
        }
        else if("sb" == s1[s2["sb"][0]][1]) {
            ne.push("(S,B) , ("+s2["sb"][0][0].toUpperCase()+","+s2["sb"][0][1].toUpperCase()+")");
        }
        else if("sb" == s1[s2["sb"][1]]) {
            ne.push("(S,B) , ("+s2["sb"][1][0].toUpperCase()+","+s2["sb"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["sb"]) && Array.isArray(s1[s2["sb"][1]]) && !Array.isArray(s1[s2["sb"][0]])) {
        if("sb" == s1[s2["sb"][1]][0]) {
            ne.push("(S,B) , ("+s2["sb"][1][0].toUpperCase()+","+s2["sb"][1][1].toUpperCase()+")");
        }
        else if("sb" == s1[s2["sb"][1]][1]) {
            ne.push("(S,B) , ("+s2["sb"][1][0].toUpperCase()+","+s2["sb"][1][1].toUpperCase()+")");
        }
        else if("sb" == s1[s2["sb"][0]]) {
            ne.push("(S,B) , ("+s2["sb"][0][0].toUpperCase()+","+s2["sb"][0][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["sb"]) && !Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("sb" == s1[s2["sb"][1]]) {
            ne.push("(S,B) , ("+s2["sb"][1][0].toUpperCase()+","+s2["sb"][1][1].toUpperCase()+")");
        }
        else if("sb" == s1[s2["sb"][0]]) {
            ne.push("(S,B) , ("+s2["sb"][0][0].toUpperCase()+","+s2["sb"][0][1].toUpperCase()+")");
        }
    }

    if(Array.isArray(s2["ss"]) && Array.isArray(s1[s2["ss"][0]]) && Array.isArray(s1[s2["ss"][1]])) {
        if("ss" == s1[s2["ss"][0]][0]) {
            ne.push("(S,S) , ("+s2["ss"][0][0].toUpperCase()+","+s2["ss"][0][1].toUpperCase()+")");
        }
        else if("ss" == s1[s2["ss"][0]][1]) {
            ne.push("(S,S) , ("+s2["ss"][0][0].toUpperCase()+","+s2["ss"][0][1].toUpperCase()+")");
        }
        else if("ss" == s1[s2["ss"][1]][0]) {
            ne.push("(S,S) , ("+s2["ss"][1][0].toUpperCase()+","+s2["ss"][1][1].toUpperCase()+")");
        }
        else if("ss" == s1[s2["ss"][1]][1]) {
            ne.push("(S,S) , ("+s2["ss"][1][0].toUpperCase()+","+s2["ss"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["ss"]) && Array.isArray(s1[s2["ss"][0]]) && !Array.isArray(s1[s2["ss"][1]])) {
        if("ss" == s1[s2["ss"][0]][0]) {
            ne.push("(S,S) , ("+s2["ss"][0][0].toUpperCase()+","+s2["ss"][0][1].toUpperCase()+")");
        }
        else if("ss" == s1[s2["ss"][0]][1]) {
            ne.push("(S,S) , ("+s2["ss"][0][0].toUpperCase()+","+s2["ss"][0][1].toUpperCase()+")");
        }
        else if("ss" == s1[s2["ss"][1]]) {
            ne.push("(S,S) , ("+s2["ss"][1][0].toUpperCase()+","+s2["ss"][1][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["ss"]) && Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("ss" == s1[s2["ss"][1]][0]) {
            ne.push("(S,S) , ("+s2["ss"][1][0].toUpperCase()+","+s2["ss"][1][1].toUpperCase()+")");
        }
        else if("ss" == s1[s2["ss"][1]][1]) {
            ne.push("(S,S) , ("+s2["ss"][1][0].toUpperCase()+","+s2["ss"][1][1].toUpperCase()+")");
        }
        else if("ss" == s1[s2["ss"][0]]) {
            ne.push("(S,S) , ("+s2["ss"][0][0].toUpperCase()+","+s2["ss"][0][1].toUpperCase()+")");
        }
    }
    else if(Array.isArray(s2["ss"]) && !Array.isArray(s1[s2["ss"][1]]) && !Array.isArray(s1[s2["ss"][0]])) {
        if("ss" == s1[s2["ss"][1]]) {
            ne.push("(S,S) , ("+s2["ss"][1][0].toUpperCase()+","+s2["ss"][1][1].toUpperCase()+")");
        }
        else if("ss" == s1[s2["ss"][0]]) {
            ne.push("(S,S) , ("+s2["ss"][0][0].toUpperCase()+","+s2["ss"][0][1].toUpperCase()+")");
        }
    }
    else {
        if("bb" == s2[s1["bb"]]) {
            ne.push("(B,B) , ("+s1["bb"][0].toUpperCase()+","+s1["bb"][1].toUpperCase()+")");
        }
        else if("bs" == s2[s1["bs"]]) {
            ne.push("(B,S) , ("+s1["bs"][0].toUpperCase()+","+s1["bs"][1].toUpperCase()+")");
        }
        else if("sb" == s2[s1["sb"]]) {
            ne.push("(S,B) , ("+s1["sb"][0].toUpperCase()+","+s1["sb"][1].toUpperCase()+")");
        }
        else if("ss" == s2[s1["ss"]]) {
            ne.push("(S,S) , ("+s1["ss"][0].toUpperCase()+","+s1["ss"][1].toUpperCase()+")");
        }

    }

    return ne;
}

function br_s1(b_w_mg , s_w_mg , b_w_mb , s_w_mb) {
    let r1,r2;

    if((b_w_mg == s_w_mg) || (Math.abs(b_w_mg - s_w_mg) < 0.00001)) {
        r1 = "bs";
    }
    else if(b_w_mg > s_w_mg) {
        r1 = "b";
    }
    else if(b_w_mg < s_w_mg) {
        r1 = "s";
    }
    

    if((b_w_mb == s_w_mb) || (Math.abs(b_w_mb - s_w_mb) < 0.00001)) {
        r2 = "bs";
    }
    else if(b_w_mb > s_w_mb) {
        r2 = "b";
    }
    else if(b_w_mb < s_w_mb) {
        r2 = "s";
    }


    if(r1 == "bs") {

        return  [r1[0]+r2 , r1[1]+r2];
    }
    else if(r2 == "bs") {

        return  [r1+r2[0] , r1+r2[1]];
    }
    else if((r1 == "bs") && (r2 == "bs")) {

        return  [r1[0]+r2[0] , r1[0]+r2[1] , r1[1]+r2[0] , r1[1]+r2[1]];

    }
    else {
        return r1+r2;
    }
}

function br_s2(m_b_wg , m_s_wg , m_b_wb , m_s_wb) {
    let r1,r2;

    if((m_b_wg == m_s_wg) || (Math.abs(m_b_wg - m_s_wg) < 0.00001)) {
        r1 = "bs";
    }
    else if(m_b_wg > m_s_wg) {
        r1 = "b";
    }
    else if(m_b_wg < m_s_wg) {
        r1 = "s";
    }

    if((m_b_wb == m_s_wb) || (Math.abs(m_b_wb - m_s_wb) < 0.00001)) {
        r2 = "bs"
    }
    else if(m_b_wb > m_s_wb) {
        r2 = "b";
    }
    else if(m_b_wb < m_s_wb) {
        r2 = "s";
    }

    if(r1 == "bs") {

        return  [r1[0]+r2 , r1[1]+r2];
    }
    else if(r2 == "bs") {

        return  [r1+r2[0] , r1+r2[1]];
    }
    else if((r1 == "bs") && (r2 == "bs")) {

        return  [r1[0]+r2[0] , r1[0]+r2[1] , r1[1]+r2[0] , r1[1]+r2[1]];

    }
    else {
        return r1+r2;
    }
}
