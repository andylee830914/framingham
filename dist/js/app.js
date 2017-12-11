function myeval() {
    var i, age, sex, sex_type, chole, high_chole, smoke, smoke_type, sp, cure, cure_type, score, result;
    var sex_return="", smoke_return="", cure_return="";
    age = document.getElementById("age").value;
    chole = document.getElementById("chole").value;
    high_chole = document.getElementById("high_chole").value;
    sp = document.getElementById("sp").value;    
    result = document.getElementById("result");
    

    sex = document.getElementsByName("sex");
    for (i = 0; i < sex.length; ++i) {
        if (sex[i].checked) {
            sex_type = sex[i].value;
            sex_return = i;
        }
    }
    smoke = document.getElementsByName("smoke");
    for (i = 0; i < smoke.length; ++i) {
        if (smoke[i].checked) {
            smoke_type = smoke[i].value;
            smoke_return = i;
        }
    }
    cure = document.getElementsByName("cure");
    for (i = 0; i < cure.length; ++i) {
        if (cure[i].checked) {
            cure_type = cure[i].value;
            cure_return = i;
        }
    }
    
    score = rule(age, sex_return, chole, high_chole, smoke_return, sp, cure_return);
    if (score == 0){
        result.innerHTML = '<div class="alert alert-danger" role="alert">未輸入資料</div>'
    }else if(score == 1){
        result.innerHTML = '<div class="alert alert-danger" role="alert">無法計算, 年齡需介於20~79歲之間</div>'
    }else{
        result.innerHTML = '<div class="alert alert-primary" role="alert">' + "對一位" + age + "歲" + "，" + smoke_type + "，" + cure_type + "高血壓藥物的" + sex_type + "，十年內罹患冠心病的機率為" + score + '</div>';        
    }
    return;
}
function rule(age, sex, chole, high_chole, smoke, sp, cure) {
    if ((age === "" || sex === "" || chole === "" || high_chole === "" || smoke === "" ||sp === "" || cure === "")) {
        return 0;
    }
    var score = 0;
    age = Number(Math.round(age));

    if (age < 20 || age >= 80) {
        return 1;
    }


    sex = Number(sex);
    chole = Number(Math.round(chole));
    high_chole = Number(Math.round(high_chole));
    smoke = Number(smoke);
    sp = Number(sp);
    cure = Number(cure);

    if (age >= 20 && age < 35) {
        if (sex == 1) score += -9; else score += -7;
    } else if (age >= 35 && age < 40) {
        if (sex == 1) score += -4; else score += -3;
    } else if (age >= 40 && age < 45) {
        if (sex == 1) score += 0; else score += 0;
    } else if (age >= 45 && age < 50) {
        if (sex == 1) score += 3; else score += 3;
    } else if (age >= 50 && age < 55) {
        if (sex == 1) score += 6; else score += 6;
    } else if (age >= 55 && age < 60) {
        if (sex == 1) score += 8; else score += 8;
    } else if (age >= 60 && age < 65) {
        if (sex == 1) score += 10; else score += 10;
    } else if (age >= 65 && age < 70) {
        if (sex == 1) score += 11; else score += 12;
    } else if (age >= 70 && age < 75) {
        if (sex == 1) score += 12; else score += 14;
    } else if (age >= 75 && age < 80) {
        if (sex == 1) score += 13; else score += 16;
    }
    if (chole < 160) {
        score += 0;
    } else if (chole >= 160 && chole < 200) {
        if (age >= 20 && age < 40) {
            if (sex == 1) score += 4; else score += 4;
        } else if (age >= 40 && age < 50) {
            if (sex == 1) score += 3; else score += 3;
        } else if (age >= 50 && age < 60) {
            if (sex == 1) score += 2; else score += 2;
        } else if (age >= 60 && age < 70) {
            if (sex == 1) score += 1; else score += 1;
        } else if (age >= 70 && age < 80) {
            if (sex == 1) score += 1; else score += 1;
        }
    } else if (chole >= 200 && chole < 240) {
        if (age >= 20 && age < 40) {
            if (sex == 1) score += 7; else score += 8;
        } else if (age >= 40 && age < 50) {
            if (sex == 1) score += 5; else score += 6;
        } else if (age >= 50 && age < 60) {
            if (sex == 1) score += 3; else score += 4;
        } else if (age >= 60 && age < 70) {
            if (sex == 1) score += 1; else score += 2;
        } else if (age >= 70 && age < 80) {
            if (sex == 1) score += 0; else score += 1;
        }
    } else if (chole >= 240 && chole < 280) {
        if (age >= 20 && age < 40) {
            if (sex == 1) score += 9; else score += 11;
        } else if (age >= 40 && age < 50) {
            if (sex == 1) score += 6; else score += 8;
        } else if (age >= 50 && age < 60) {
            if (sex == 1) score += 4; else score += 5;
        } else if (age >= 60 && age < 70) {
            if (sex == 1) score += 2; else score += 3;
        } else if (age >= 70 && age < 80) {
            if (sex == 1) score += 1; else score += 2;
        }
    } else {
        if (age >= 20 && age < 40) {
            if (sex == 1) score += 11; else score += 13;
        } else if (age >= 40 && age < 50) {
            if (sex == 1) score += 8; else score += 10;
        } else if (age >= 50 && age < 60) {
            if (sex == 1) score += 5; else score += 7;
        } else if (age >= 60 && age < 70) {
            if (sex == 1) score += 3; else score += 4;
        } else if (age >= 70 && age < 80) {
            if (sex == 1) score += 1; else score += 2;
        }
    }
    if (smoke == 1) {
        if (age >= 20 && age < 40) {
            if (sex == 1) score += 8; else score += 9;
        } else if (age >= 40 && age < 50) {
            if (sex == 1) score += 5; else score += 7;
        } else if (age >= 50 && age < 60) {
            if (sex == 1) score += 3; else score += 4;
        } else if (age >= 60 && age < 70) {
            if (sex == 1) score += 1; else score += 2;
        } else if (age >= 70 && age < 80) {
            if (sex == 1) score += 1; else score += 1;
        }
    }
    if (high_chole >= 60) {
        score += -1;
    } else if (high_chole >= 50 && high_chole < 60) {
        score += 0;
    } else if (high_chole >= 40 && high_chole < 50) {
        score += 1;
    } else {
        score += 2;
    }
    if (cure == 0) {
        if (sp < 120) {
            if (sex == 1) score += 0; else score += 0;
        } else if (sp >= 120 && sp < 130) {
            if (sex == 1) score += 0; else score += 1;
        } else if (sp >= 130 && sp < 140) {
            if (sex == 1) score += 1; else score += 2;
        } else if (sp >= 140 && sp < 150) {
            if (sex == 1) score += 1; else score += 3;
        } else {
            if (sex == 1) score += 2; else score += 4;
        }
    } else {
        if (sp < 120) {
            if (sex == 1) score += 0; else score += 0;
        } else if (sp >= 120 && sp < 130) {
            if (sex == 1) score += 1; else score += 3;
        } else if (sp >= 130 && sp < 140) {
            if (sex == 1) score += 2; else score += 4;
        } else if (sp >= 140 && sp < 150) {
            if (sex == 1) score += 2; else score += 5;
        } else {
            if (sex == 1) score += 3; else score += 6;
        }
    }

    if (sex == 1) {
        if (score < 0) { score_text = "< 1 %"; }
        else if (score < 5) { score_text = "1 %"; }
        else if (score <= 6) { score_text = "2 %"; }
        else if (score == 7) { score_text = "3 %"; }
        else if (score == 8) { score_text = "4 %"; }
        else if (score == 9) { score_text = "5 %"; }
        else if (score == 10) { score_text = "6 %"; }
        else if (score == 11) { score_text = "8 %"; }
        else if (score == 12) { score_text = "10%"; }
        else if (score == 13) { score_text = "12%"; }
        else if (score == 14) { score_text = "16%"; }
        else if (score == 15) { score_text = "20%"; }
        else if (score == 16) { score_text = "25%"; }
        else { score_text = ">=30%"; }
    } else {
        if (score < 9) { score_text = "< 1 %"; }
        else if (score < 13) { score_text = "1 %"; }
        else if (score <= 14) { score_text = "2 %"; }
        else if (score == 15) { score_text = "3 %"; }
        else if (score == 16) { score_text = "4 %"; }
        else if (score == 17) { score_text = "5 %"; }
        else if (score == 18) { score_text = "6 %"; }
        else if (score == 19) { score_text = "8 %"; }
        else if (score == 20) { score_text = "11%"; }
        else if (score == 21) { score_text = "14%"; }
        else if (score == 22) { score_text = "17%"; }
        else if (score == 23) { score_text = "22%"; }
        else if (score == 24) { score_text = "27%"; }
        else { score_text = ">=30%"; }
    }
    score_text = score_text + ". (評估分數為" + score + ")";
    return score_text;
}